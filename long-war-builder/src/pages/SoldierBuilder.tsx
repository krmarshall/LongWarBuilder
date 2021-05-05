import React from 'react';
import ClassSelector from '../components/ClassSelector';
import SoldierStats from '../components/SoldierStats';
import PerkGrid from '../components/PerkGrid';
import BuildStorage from '../components/BuildStorage';
import Notification from '../components/Notification';

const SoldierBuilder = (): JSX.Element => {
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
          <Notification />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SoldierBuilder;
