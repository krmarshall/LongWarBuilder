import { useContext, useEffect, useState } from 'react';
import { context, TypeEnums } from '../context';
import { LocalStorageClassInterface } from '../types/Interfaces';

const BuildStorage = (): JSX.Element => {
  const [buildName, setBuildName] = useState('');
  //@ts-expect-error 2461
  const [state, dispatch] = useContext(context);
  const { className, classBuilds, currentBuild } = state;
  const [classBuildsKeys, setClassBuildsKeys] = useState<Array<string>>();
  const assault = {
    buildTitle: {
      perks: [0, 0, 0, 0, 0, 0, 0],
    },
    anotherOne: {
      perks: [1, 1, 1, 1, 1, 1, 1],
    },
  };

  useEffect(() => {
    loadBuildsFromLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [className]);

  const loadBuildsFromLocalStorage = () => {
    const storageString = localStorage.getItem(className);
    if (storageString == null) {
      return;
    }
    const storageObject = JSON.parse(storageString);
    dispatch({ type: TypeEnums.changeClassBuilds, payload: JSON.parse(storageObject) });
    const keys = Object.keys(storageObject);
    setClassBuildsKeys(keys);
  };

  const saveBuildToStorage = () => {
    if (!buildName) {
      return;
    }
    const updateClassBuilds = { ...classBuilds };
    updateClassBuilds[buildName] = currentBuild;
    localStorage.setItem(className, JSON.stringify(updateClassBuilds));
    dispatch({ type: TypeEnums.changeClassBuilds, payload: updateClassBuilds });
  };

  const selectPerksFromSelectedBuild = (keyValue: string) => {
    const build = classBuilds[keyValue];
    dispatch({ type: TypeEnums.changeCurrentBuild, payload: build });
    dispatch({ type: TypeEnums.changeLoadBuildSignal, payload: true });
  };

  return (
    <div className="m-4 p-4 bg-darkGray h-full min-w-max justify-center text-gray-50">
      <h3 className="text-xl">Build Storage</h3>
      <ul>
        {classBuildsKeys?.map((keyValue) => {
          return (
            <li
              key={keyValue}
              onClick={() => {
                selectPerksFromSelectedBuild(keyValue);
              }}
            >
              {keyValue}
            </li>
          );
        })}
      </ul>
      <input
        type="text"
        id="buildName"
        className="text-gray-700"
        value={buildName}
        onChange={(event) => {
          setBuildName(event.target.value);
        }}
      ></input>
      <br />
      <button onClick={saveBuildToStorage}>Save Build</button>
    </div>
  );
};

export default BuildStorage;
