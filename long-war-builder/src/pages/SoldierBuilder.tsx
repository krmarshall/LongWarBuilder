import React, { useContext, useEffect } from 'react';
import ClassSelector from '../components/ClassSelector';
import SoldierStats from '../components/SoldierStats';
import PerkGrid from '../components/PerkGrid';
import rookie from '../data/rookie';
import BuildStorage from '../components/BuildStorage';
import { context, TypeEnums } from '../context';

const SoldierBuilder = (): JSX.Element => {
  //@ts-expect-error 2461
  const [state, dispatch] = useContext(context);
  const { className } = state;

  useEffect(() => {
    const statUpdate = {
      health: rookie.health,
      mobility: rookie.mobility,
      will: rookie.will,
      aim: rookie.aim,
    };

    dispatch({ type: TypeEnums.changeStats, payload: statUpdate });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [className]);

  return (
    <React.Fragment>
      <div className="flex content-center justify-center">
        <h2 className="text-gray-50 my-2 text-2xl">Soldier Planner</h2>
      </div>
      <ClassSelector />

      <div className="flex flex-row flex-nowrap">
        <PerkGrid />
        <div className="flex flex-col flex-nowrap">
          <SoldierStats />
          <BuildStorage />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SoldierBuilder;
