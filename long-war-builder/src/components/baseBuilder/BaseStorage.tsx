import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { decodeBaseFromString, encodeBaseToString } from '../../commonFunctions/encodingFunctions';
import { baseContext, BaseContextTypeEnums, BaseStateInterface } from '../../context/baseContext';
import { LocalStorageBaseInterface } from '../../types/interfaces/StorageInterfaces';

const BaseStorage = (): JSX.Element => {
  const [baseName, setBaseName] = useState('');
  const [savedBases, setSavedBases] = useState<LocalStorageBaseInterface>({});
  const [savedBaseKeys, setSavedBaseKeys] = useState<Array<string>>();
  const [urlLoaded, setUrlLoaded] = useState(false);

  // @ts-expect-error 2461
  const [baseState, baseDispatch] = useContext(baseContext);
  const { buildings } = baseState as BaseStateInterface;

  //@ts-expect-error 2339
  const { code } = useParams();

  useEffect(() => {
    loadBasesFromLocalStorage();
  }, []);

  useEffect(() => {
    if (code != undefined && !urlLoaded) {
      loadBaseFromQueryParam();
      setUrlLoaded(true);
    }
  }, [code, urlLoaded]);

  const saveBaseToStorage = () => {
    if (!baseName) {
      alert('Please add a name to the base before saving.');
      return;
    }
    const updatedSavedBases = JSON.parse(JSON.stringify(savedBases));
    updatedSavedBases[baseName] = buildings;
    localStorage.setItem('bases', JSON.stringify(updatedSavedBases));
    setBaseName('');

    const keys = Object.keys(updatedSavedBases);
    setSavedBaseKeys(keys);
    setSavedBases(updatedSavedBases);
  };

  const loadBasesFromLocalStorage = () => {
    const storageString = localStorage.getItem('bases');
    if (storageString == null) {
      setSavedBaseKeys(undefined);
      return;
    }
    const storageObject: LocalStorageBaseInterface = JSON.parse(storageString);
    const keys = Object.keys(storageObject);
    setSavedBaseKeys(keys);
    setSavedBases(storageObject);
  };

  const loadBaseFromQueryParam = () => {
    try {
      decodeBaseFromString(code, baseDispatch);
    } catch (error) {
      console.log(error);
    }
  };

  const generateBaseUrl = () => {
    const encodedString = encodeBaseToString(baseState);
    const link = `https://longwarassistant.netlify.app/base/${encodedString}`;
    navigator.clipboard
      .writeText(link)
      .then(() => {
        // Notification
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const populateSavedBase = (key: string) => {
    baseDispatch({ type: BaseContextTypeEnums.changeBuildings, payload: savedBases[key] });
  };

  const deleteBase = (key: string) => {
    const updatedSavedBases = JSON.parse(JSON.stringify(savedBases));
    delete updatedSavedBases[key];
    localStorage.setItem('bases', JSON.stringify(updatedSavedBases));
    const keys = Object.keys(updatedSavedBases);
    setSavedBaseKeys(keys);
    setSavedBases(updatedSavedBases);
  };

  return (
    <div
      className="m-4 p-4 ml-0 bg-darkGray opacity-100 h-auto rounded min-w-max justify-center text-gray-50 shadow-lg"
      style={{ maxHeight: '61%' }}
    >
      <h3 className="text-xl text-center">Base Storage</h3>
      <div
        className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-scrollbarGray"
        style={{ maxHeight: '57%' }}
      >
        <ul>
          {savedBaseKeys?.map((key) => {
            return (
              <li
                key={key}
                className="cursor-pointer bg-lightGray hover:bg-gray-700 border rounded p-1 m-1 border-gray-400 flex flex-row flex-nowrap select-none"
              >
                <p
                  className="flex-grow"
                  onClick={() => {
                    populateSavedBase(key);
                  }}
                >
                  {key}
                </p>
                <p
                  className="flex-grow-0 text-red-600 mx-1"
                  onClick={() => {
                    deleteBase(key);
                  }}
                >
                  X
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      <input
        type="text"
        id="baseName"
        className="text-gray-700 rounded bg-gray-200 placeholder-gray-500 m-1 p-1"
        placeholder="Base Name"
        value={baseName}
        onChange={(event) => {
          setBaseName(event.target.value);
        }}
      />

      <div className="flex flex-col flex-wrap content-center justify-center">
        <button
          className="rounded py-1 px-2 m-1 w-max self-center focus:outline-none  bg-gray-700 hover:bg-gray-600"
          onClick={saveBaseToStorage}
        >
          Save Base
        </button>
        <button
          className="rounded py-1 px-2 m-1 w-max self-center focus:outline-none  bg-gray-700 hover:bg-gray-600"
          onClick={generateBaseUrl}
        >
          Copy Link To Base
        </button>
      </div>
    </div>
  );
};

export default BaseStorage;
