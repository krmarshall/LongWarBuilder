import { useContext } from 'react';
import { baseContext, BaseStateInterface } from '../../context/baseContext';
import BuildingRow from './BuildingRow';

const BaseGrid = (): JSX.Element => {
  //@ts-expect-error 2461
  const [baseState] = useContext(baseContext);
  const { buildings } = baseState as BaseStateInterface;
  return (
    <div className="m-4 mt-1.5 p-2 bg-darkGray opacity-100 rounded">
      <table className="table-fixed">
        <tbody>
          {buildings.map((buildingRow, yIndex) => {
            return <BuildingRow key={yIndex} buildings={buildingRow} yIndex={yIndex} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BaseGrid;
