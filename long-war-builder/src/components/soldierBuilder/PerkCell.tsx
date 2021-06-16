import { useContext } from 'react';
import { soldierContext, SoldierStateInterface, SoldierContextTypeEnums } from '../../context/soldierContext';
import { PerkInterface } from '../../types/interfaces/ClassInterfaces';

interface PerkCellProps {
  perk: PerkInterface;
  rankIndex: number;
  perkIndex: number;
}

const PerkCell = ({ perk, rankIndex, perkIndex }: PerkCellProps): JSX.Element => {
  //@ts-expect-error 2461
  const [state, dispatch] = useContext(soldierContext);
  const { currentBuild } = state as SoldierStateInterface;

  const selectPerkHandler = () => {
    const updatedBuild = [...currentBuild];
    updatedBuild[rankIndex] = updatedBuild[rankIndex] == perkIndex ? undefined : perkIndex;
    dispatch({ type: SoldierContextTypeEnums.changeCurrentBuild, payload: updatedBuild });
  };

  return (
    <td
      data-selected=""
      className="text-center hover:bg-lightGray select-none cursor-pointer"
      onClick={selectPerkHandler}
    >
      <img
        src={`${process.env.PUBLIC_URL}/${perk.imgPath}`}
        alt={perk.perk}
        className="transform scale-75 object-none mx-auto -mb-2"
        draggable="false"
      ></img>
      <h5 className="text-sm">{perk.perk}</h5>
      <p className="text-xs">{perk.description}</p>
      <p className="text-xs font-bold underline">
        {perk.mobility ? 'Mobility: ' + perk.mobility : ''} {perk.aim ? 'Aim: ' + perk.aim : ''}{' '}
        {perk.will ? 'Will: ' + perk.will : ''}
      </p>
    </td>
  );
};

export default PerkCell;
