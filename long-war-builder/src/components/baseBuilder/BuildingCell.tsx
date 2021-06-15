import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { baseContext, BaseContextTypeEnums, BaseStateInterface } from '../../context/baseContext';
import facilities from '../../data/facilities';
import { FacilityInterface } from '../../types/interfaces/FacilityInterface';

interface BuildingCellInterface {
  building: string;
  yIndex: number;
  xIndex: number;
}

const BuildingCell = ({ building, yIndex, xIndex }: BuildingCellInterface): JSX.Element => {
  const [cellClassName, setCellClassName] = useState('opacity-60');
  //@ts-expect-error 2461
  const [baseState, baseDispatch] = useContext(baseContext);
  const { selectedCellY, selectedCellX } = baseState as BaseStateInterface;

  const cellBuilding: FacilityInterface = facilities[building];

  useEffect(() => {
    if (selectedCellY === yIndex && selectedCellX === xIndex) {
      setCellClassName('opacity-100 border border-gray-400 -m-1');
    } else {
      setCellClassName('opacity-60');
    }
  }, [selectedCellY, selectedCellX]);

  const onCellClick = () => {
    // Don't allow selection of access lifts
    if (xIndex === 3) {
      return;
    }
    baseDispatch({ type: BaseContextTypeEnums.selectCell, payload: { selectedCellY: yIndex, selectedCellX: xIndex } });
  };

  return (
    <td onClick={onCellClick}>
      <img src={cellBuilding.img} alt={building} className={cellClassName} draggable="false"></img>
    </td>
  );
};

export default BuildingCell;
