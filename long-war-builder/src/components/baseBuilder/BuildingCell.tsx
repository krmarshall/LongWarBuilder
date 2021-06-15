import facilities from '../../data/facilities';
import { FacilityInterface } from '../../types/interfaces/FacilityInterface';

interface BuildingCellInterface {
  building: string;
}

const BuildingCell = ({ building }: BuildingCellInterface): JSX.Element => {
  const cellBuilding: FacilityInterface = facilities[building];
  return (
    <td>
      <img src={cellBuilding.img} alt={building}></img>
    </td>
  );
};

export default BuildingCell;
