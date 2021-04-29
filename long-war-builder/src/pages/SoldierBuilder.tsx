import React, { useEffect, useState } from 'react';
import ClassSelector from '../components/ClassSelector';
import SoldierStats from '../components/SoldierStats';
import PerkGrid from '../components/PerkGrid';
import rookie from '../data/rookie';

const SoldierBuilder = (): JSX.Element => {
  const [className, setClassName] = useState('');
  // Could probably use a reducer here, but I find them more annoying than just passing state most of the time.
  const [health, setHealth] = useState(rookie.health);
  const [mobility, setMobility] = useState(rookie.mobility);
  const [will, setWill] = useState(rookie.will);
  const [aim, setAim] = useState(rookie.aim);
  const [defense, setDefense] = useState(rookie.defense);

  useEffect(() => {
    console.log(className);
  }, [className]);

  return (
    <React.Fragment>
      <div className="flex content-center justify-center">
        <h2 className="text-gray-50 my-2 text-2xl">Soldier Planner</h2>
      </div>
      <ClassSelector setClassName={setClassName} />

      <div className="flex flex-row flex-nowrap">
        <PerkGrid
          className={className}
          health={health}
          mobility={mobility}
          will={will}
          aim={aim}
          defense={defense}
          setHealth={setHealth}
          setMobility={setMobility}
          setWill={setWill}
          setAim={setAim}
          setDefense={setDefense}
        />
        <SoldierStats health={health} mobility={mobility} will={will} aim={aim} defense={defense} />
      </div>
    </React.Fragment>
  );
};

export default SoldierBuilder;
