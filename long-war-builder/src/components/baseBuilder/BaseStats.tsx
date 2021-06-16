import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { baseContext, BaseStateInterface } from '../../context/baseContext';

const BaseStats = (): JSX.Element => {
  const [workshopBonus, setWorkshopBonus] = useState('0');
  const [powerClassName, setPowerClassName] = useState('inline-block');

  // @ts-expect-error 2461
  const [baseState] = useContext(baseContext);
  const {
    powerGenerated,
    powerNeeded,
    researchBonus,
    workshopCount,
    workshopAdjacencyCount,
    satellitesSupported,
  } = baseState as BaseStateInterface;

  useEffect(() => {
    const updatedWorkshopBonus = (
      100 -
      (0.5 + 0.5 * Math.pow(0.8, workshopCount + 0.5 * workshopAdjacencyCount)) * 100
    ).toFixed(1);
    setWorkshopBonus(updatedWorkshopBonus);
  }, [workshopCount, workshopAdjacencyCount]);

  useEffect(() => {
    if (powerNeeded > powerGenerated) {
      setPowerClassName('inline-block text-red-500');
    } else {
      setPowerClassName('inline-block');
    }
  }, [powerGenerated, powerNeeded]);

  return (
    <div className="m-4 mt-1.5 ml-0 p-4 bg-darkGray opacity-100 rounded h-auto min-w-max justify-center text-gray-50 shadow-lg">
      <h3 className="text-xl text-center">Base Stats</h3>
      <div className="space-x-2">
        <img
          src={`${process.env.PUBLIC_URL}/img/stats/power.png`}
          alt="power"
          className="transform scale-75 object-none mx-auto inline-block"
        />
        <p className={powerClassName}>
          Power: {powerNeeded} / {powerGenerated}
        </p>
      </div>

      <div className="space-x-2">
        <img
          src={`${process.env.PUBLIC_URL}/img/stats/satellite.png`}
          alt="satellite"
          className="transform scale-75 object-none mx-auto inline-block"
        />
        <p className="inline-block">Satellites: {satellitesSupported}</p>
      </div>

      <div className="space-x-2">
        <img
          src={`${process.env.PUBLIC_URL}/img/stats/research.png`}
          alt="research"
          className="transform scale-75 object-none mx-auto inline-block"
        />
        <p className="inline-block">Research: {researchBonus}%</p>
      </div>

      <div className="space-x-2">
        <img
          src={`${process.env.PUBLIC_URL}/img/stats/workshop.png`}
          alt="workshop"
          className="transform scale-75 object-none mx-auto inline-block"
        />
        <p className="inline-block">Workshop: {workshopBonus}%</p>
      </div>
    </div>
  );
};

export default BaseStats;
