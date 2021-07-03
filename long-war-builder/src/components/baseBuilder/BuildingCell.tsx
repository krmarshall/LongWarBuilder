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
  //@ts-expect-error 2461
  const [baseState, baseDispatch] = useContext(baseContext);
  const { buildings, selectedFacility } = baseState as BaseStateInterface;

  const cellBuilding: FacilityInterface = facilities[building];

  const onCellClick = () => {
    // Don't allow selection of access lifts
    if (xIndex === 3) {
      return;
    }
    const updatedBuildingGrid = JSON.parse(JSON.stringify(buildings));
    updatedBuildingGrid[yIndex][xIndex] = selectedFacility;
    baseDispatch({ type: BaseContextTypeEnums.changeBuildings, payload: updatedBuildingGrid });
  };

  return (
    <td onClick={onCellClick}>
      <img
        src={`${process.env.PUBLIC_URL}/${cellBuilding.img}`}
        alt={building}
        className={xIndex === 3 ? 'cursor-pointer opacity-70' : 'cursor-pointer opacity-70 hover:opacity-100'}
        draggable="false"
      ></img>
    </td>
  );
};

export default BuildingCell;
