import { useContext } from 'react';
import { context, TypeEnums } from '../context';
import { PerkInterface } from '../types/Interfaces';

interface PerkCellProps {
  perk: PerkInterface;
  rankIndex: number;
  perkIndex: number;
}

const PerkCell = ({ perk, rankIndex, perkIndex }: PerkCellProps): JSX.Element => {
  //@ts-expect-error 2461
  const [state, dispatch] = useContext(context);

  const selectPerkHandler = () => {
    const updatedBuild = [...state.currentBuild];
    updatedBuild[rankIndex] = updatedBuild[rankIndex] == perkIndex ? undefined : perkIndex;
    dispatch({ type: TypeEnums.changeCurrentBuild, payload: updatedBuild });
  };

  return (
    <td data-selected="" className="text-center hover:bg-lightGray select-none" onClick={selectPerkHandler}>
      <img
        src={`${process.env.PUBLIC_URL}/${perk.imgPath}`}
        alt={perk.perk}
        className="transform scale-75 object-none mx-auto -mb-2"
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
