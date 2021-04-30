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
