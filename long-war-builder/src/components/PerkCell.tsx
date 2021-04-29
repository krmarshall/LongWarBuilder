import { PerkInterface } from '../types/Interfaces';

interface PerkCellProps {
  perk: PerkInterface;
  rankIndex: number;
  perkIndex: number;
  perkSelectHandler(rankSelected: number, perkSelected: number): void;
}

const PerkCell = (props: PerkCellProps): JSX.Element => {
  const { perk, rankIndex, perkIndex } = props;
  return (
    <td
      data-selected=""
      className="text-center hover:bg-lightGray select-none"
      onClick={() => {
        props.perkSelectHandler(rankIndex, perkIndex);
      }}
    >
      <h5 className="text-sm">{perk.perk}</h5>
      <p className="text-xs">{perk.description}</p>
    </td>
  );
};

export default PerkCell;
