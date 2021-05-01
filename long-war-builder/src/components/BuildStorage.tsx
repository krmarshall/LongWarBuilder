import { useContext, useEffect, useState } from 'react';
import { context, TypeEnums } from '../context';
import { LocalStorageClassInterface } from '../types/Interfaces';

const BuildStorage = (): JSX.Element => {
  //@ts-expect-error 2461
  const [state, dispatch] = useContext(context);
  const { className, classBuilds } = state;
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
    dispatch({ type: TypeEnums.changeClassBuilds, payload: JSON.parse(storageString) });
  };

  const saveBuildToStorage = () => {
    localStorage.setItem(className, JSON.stringify(classBuilds));
  };

  return (
    <div className="m-4 p-4 bg-darkGray h-full min-w-max justify-center text-gray-50">
      <h3 className="text-xl">Build Storage</h3>
      <ul>
        <li className="">Example</li>
      </ul>
      <input type="text"></input>
      <br />
      <button>Save Build</button>
    </div>
  );
};

export default BuildStorage;
