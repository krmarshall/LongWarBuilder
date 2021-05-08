import React from 'react';
import ClassSelector from '../components/soldierBuilder/ClassSelector';
import SoldierStats from '../components/soldierBuilder/SoldierStats';
import BuildStorage from '../components/soldierBuilder/BuildStorage';
import Notification from '../components/Notification';
import GridsContainer from '../components/soldierBuilder/GridsContainer';

const SoldierBuilder = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className="flex flex-row flex-nowrap">
        <img
          src={`${process.env.PUBLIC_URL}/img/perks/repair.png`}
          alt="SoldierBuilderLogo"
          className="transform scale-100 object-none mx-auto"
          style={{ width: '8%' }}
        ></img>
        <h3 className="text-gray-50 text-2xl text-center self-center justify-self-center" style={{ width: '12%' }}>
          Soldier Builder
        </h3>
        <ClassSelector />
        <div className="flex flex-col text-gray-50 text-sm mt-1" style={{ width: '20%' }}>
          <button className="self-center justify-center focus:outline-none rounded bg-gray-700 w-max m-0.5 py-0.5 px-2">
            Soldier Builder
          </button>
          <button className="self-center justify-center cursor-not-allowed focus:outline-none rounded bg-gray-700 w-max m-0.5 py-0.5 px-2">
            Mission Tracker
          </button>
          <button className="self-center justify-center cursor-not-allowed focus:outline-none rounded bg-gray-700 w-max m-0.5 py-0.5 px-2">
            Events Tracker
          </button>
        </div>
      </div>

      <div className="flex flex-row flex-nowrap" style={{ maxHeight: '86%' }}>
        <GridsContainer />
        <div className="flex flex-col flex-nowrap" style={{ maxHeight: '60%' }}>
          <SoldierStats />
          <BuildStorage />
          <Notification />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SoldierBuilder;
