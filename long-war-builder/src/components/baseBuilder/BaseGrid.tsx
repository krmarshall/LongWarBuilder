import { useContext } from 'react';
import { baseContext, BaseStateInterface } from '../../context/baseContext';
import BuildingRow from './BuildingRow';

const BaseGrid = (): JSX.Element => {
  //@ts-expect-error 2461
  const [baseState, baseDispatch] = useContext(baseContext);
  const { buildings } = baseState as BaseStateInterface;
  return (
    <div className="m-4 mt-1.5 p-2 bg-darkGray opacity-100 rounded" style={{ height: '80%' }}>
      <table className="table-fixed">
        <tbody>
          {buildings.map((buildingRow, buildingRowIndex) => {
            return <BuildingRow key={buildingRowIndex} buildings={buildingRow} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BaseGrid;
