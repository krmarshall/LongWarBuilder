import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { bioClasses } from '../data/classes';
import { ClassName } from '../types/enums/ClassEnums';
import { context, TypeEnums } from '../context';
import { UrlBuildInterface } from '../types/Interfaces';

const BuildStorage = (): JSX.Element => {
  const [buildName, setBuildName] = useState('');
  const [urlLoaded, setUrlLoaded] = useState(false);
  //@ts-expect-error 2461
  const [state, dispatch] = useContext(context);
  const { selectedClass, classBuilds, currentBuild } = state;
  const [classBuildsKeys, setClassBuildsKeys] = useState<Array<string>>();

  //@ts-expect-error 2339
  const { code } = useParams();

  useEffect(() => {
    loadBuildsFromLocalStorage();
  }, [selectedClass]);

  useEffect(() => {
    if (code != undefined && !urlLoaded) {
      loadBuildFromQueryParam();
      setUrlLoaded(true);
    }
  }, [code, urlLoaded]);

  const loadBuildsFromLocalStorage = () => {
    const storageString = localStorage.getItem(selectedClass);
    if (storageString == null) {
      dispatch({ type: TypeEnums.changeClassBuilds, payload: undefined });
      setClassBuildsKeys(undefined);
      return;
    }
    const storageObject = JSON.parse(storageString);
    dispatch({ type: TypeEnums.changeClassBuilds, payload: storageObject });
    const keys = Object.keys(storageObject);
    setClassBuildsKeys(keys);
  };

  const loadBuildFromQueryParam = () => {
    // eyJjbGFzcyI6IkFzc2F1bHQiLCJidWlsZCI6WzAsMSwyLDAsMSwyLDBdfQ==
    try {
      const buildString = atob(code);
      const buildObject = JSON.parse(buildString);
      dispatch({
        type: TypeEnums.loadUrlBuild,
        payload: {
          selectedClass: buildObject.class,
          classData: bioClasses[buildObject.class as ClassName],
          currentBuild: buildObject.build,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const generateBuildUrl = () => {
    const buildObject: UrlBuildInterface = {
      class: selectedClass,
      build: currentBuild,
    };
    const buildString = JSON.stringify(buildObject);
    const encodedString = btoa(buildString);
    const link = `${process.env.PUBLIC_URL}/build/${encodedString}`;
    navigator.clipboard
      .writeText(link)
      .then(() => {
        console.log('Written to clipboard successfully');
        dispatch({ type: TypeEnums.changeNotification, payload: 'Build Link Copied to Clipboard' });
      })
      .catch((error) => {
        console.log(`Error writing to clipboard: ${error}`);
        dispatch({ type: TypeEnums.changeNotification, payload: 'Error Copying To Clipboard...' });
      });
  };

  const saveBuildToStorage = () => {
    if (!selectedClass) {
      alert('Please select a class.');
      return;
    }
    let emptyArray = true;
    for (let i = 0; i < currentBuild.length; i++) {
      if (typeof currentBuild[i] == 'number') {
        emptyArray = false;
        break;
      }
    }
    if (emptyArray) {
      alert('Please select at least one perk.');
      return;
    }
    if (!buildName) {
      alert('Please add a name to the build before saving.');
      return;
    }
    const updateClassBuilds = { ...classBuilds };
    updateClassBuilds[buildName] = currentBuild;
    localStorage.setItem(selectedClass, JSON.stringify(updateClassBuilds));
    dispatch({ type: TypeEnums.changeClassBuilds, payload: updateClassBuilds });
    const keys = Object.keys(updateClassBuilds);
    setClassBuildsKeys(keys);
    setBuildName('');
  };

  const selectPerksFromSelectedBuild = (keyValue: string) => {
    const build = classBuilds[keyValue];
    dispatch({ type: TypeEnums.loadSavedBuild, payload: { currentBuild: build } });
  };

  const deleteBuild = (keyValue: string) => {
    const updateClassBuilds = { ...classBuilds };
    delete updateClassBuilds[keyValue];
    localStorage.setItem(selectedClass, JSON.stringify(updateClassBuilds));
    dispatch({ type: TypeEnums.changeClassBuilds, payload: updateClassBuilds });
    const keys = Object.keys(updateClassBuilds);
    setClassBuildsKeys(keys);
  };

  return (
    <div className="m-4 p-4 ml-0  bg-darkGray rounded h-auto min-w-max justify-center text-gray-50 shadow-lg">
      <h3 className="text-xl text-center">Build Storage</h3>
      <ul>
        {classBuildsKeys?.map((keyValue) => {
          return (
            <li
              key={keyValue}
              className="cursor-pointer bg-lightGray hover:bg-gray-700 border rounded p-1 m-1 border-gray-400 flex flex-row flex-nowrap"
            >
              <p
                className="flex-grow"
                onClick={() => {
                  selectPerksFromSelectedBuild(keyValue);
                }}
              >
                {keyValue}
              </p>
              <p
                className="flex-grow-0 text-red-600 mx-1"
                onClick={() => {
                  deleteBuild(keyValue);
                }}
              >
                X
              </p>
            </li>
          );
        })}
      </ul>
      <input
        type="text"
        id="buildName"
        className="text-gray-700 rounded bg-gray-200 placeholder-gray-500 m-1 p-1"
        placeholder="Build Name"
        value={buildName}
        onChange={(event) => {
          setBuildName(event.target.value);
        }}
      ></input>
      <br />
      <div className="flex flex-col flex-wrap content-center justify-center">
        <button
          className="rounded py-1 px-2 m-1 w-max self-center font-bold bg-lightGray hover:bg-blueGray"
          onClick={saveBuildToStorage}
        >
          Save Build
        </button>
        <button
          className="rounded py-1 px-2 m-1 w-max self-center font-bold bg-lightGray hover:bg-blueGray"
          onClick={generateBuildUrl}
        >
          Copy Link To Build
        </button>
      </div>
    </div>
  );
};

export default BuildStorage;
