import { useContext, useEffect, useState } from 'react';
import { context, TypeEnums } from '../context';

const BuildStorage = (): JSX.Element => {
  const [buildName, setBuildName] = useState('');
  //@ts-expect-error 2461
  const [state, dispatch] = useContext(context);
  const { className, classBuilds, currentBuild } = state;
  const [classBuildsKeys, setClassBuildsKeys] = useState<Array<string>>();

  useEffect(() => {
    loadBuildsFromLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [className]);

  const loadBuildsFromLocalStorage = () => {
    const storageString = localStorage.getItem(className);
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

  const saveBuildToStorage = () => {
    if (!className) {
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
    localStorage.setItem(className, JSON.stringify(updateClassBuilds));
    dispatch({ type: TypeEnums.changeClassBuilds, payload: updateClassBuilds });
    const keys = Object.keys(updateClassBuilds);
    setClassBuildsKeys(keys);
    setBuildName('');
  };

  const selectPerksFromSelectedBuild = (keyValue: string) => {
    const build = classBuilds[keyValue];
    dispatch({ type: TypeEnums.loadSavedBuild, payload: { loadBuildSignal: true, currentBuild: build } });
  };

  const deleteBuild = (keyValue: string) => {
    const updateClassBuilds = { ...classBuilds };
    delete updateClassBuilds[keyValue];
    localStorage.setItem(className, JSON.stringify(updateClassBuilds));
    dispatch({ type: TypeEnums.changeClassBuilds, payload: updateClassBuilds });
    const keys = Object.keys(updateClassBuilds);
    setClassBuildsKeys(keys);
  };

  return (
    <div className="m-4 p-4 bg-darkGray h-full min-w-max justify-center text-gray-50">
      <h3 className="text-xl text-center">Build Storage</h3>
      <ul>
        {classBuildsKeys?.map((keyValue) => {
          return (
            <li
              key={keyValue}
              className="cursor-pointer hover:bg-lightGray border rounded p-1 m-1 border-gray-400 flex flex-row flex-nowrap"
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
        className="text-gray-700 rounded bg-gray-300 placeholder-gray-500 m-1 p-1"
        placeholder="Build Name"
        value={buildName}
        onChange={(event) => {
          setBuildName(event.target.value);
        }}
      ></input>
      <br />
      <div className="flex content-center justify-center">
        <button className="rounded py-1 px-2 m-1 font-bold bg-lightGray hover:bg-blueGray" onClick={saveBuildToStorage}>
          Save Build
        </button>
      </div>
    </div>
  );
};

export default BuildStorage;
