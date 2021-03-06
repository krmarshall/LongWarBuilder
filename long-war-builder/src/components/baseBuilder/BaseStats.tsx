import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { baseContext, BaseContextTypeEnums, BaseStateInterface } from '../../context/baseContext';

const BaseStats = (): JSX.Element => {
  const [workshopBonus, setWorkshopBonus] = useState('0');
  const [powerClassName, setPowerClassName] = useState('inline-block');

  // @ts-expect-error 2461
  const [baseState, baseDispatch] = useContext(baseContext);
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

  const clearBase = () => {
    baseDispatch({
      type: BaseContextTypeEnums.changeBuildings,
      payload: [
        ['empty', 'empty', 'empty', 'accessLift', 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'accessLift', 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'accessLift', 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'accessLift', 'empty', 'empty', 'empty'],
      ],
    });
  };

  return (
    <div className="m-4 mt-1.5 ml-0 p-4 bg-darkGray opacity-100 rounded h-auto min-w-max justify-center text-gray-50 shadow-lg">
      <div className="flex flex-row">
        <p className="flex-grow"></p>
        <h3 className="text-xl m-auto text-center has-tooltip">
          Base Stats{' '}
          <span className="tooltip text-center">
            Adjacencies are included, just not shown on the grid yet. Research is the increased effectiveness of your
            scientists. Workshop is the cost reduction/material refund you will get back.
          </span>
        </h3>
        <p className="flex-grow"></p>
      </div>
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
      <div className="flex flex-col flex-wrap content-center justify-center">
        <button
          className="rounded py-1 px-2 m-1 w-max self-center focus:outline-none  bg-gray-700 hover:bg-gray-600"
          onClick={clearBase}
        >
          Clear Base
        </button>
      </div>
    </div>
  );
};

export default BaseStats;
