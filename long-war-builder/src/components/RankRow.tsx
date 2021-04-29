import { Fragment } from 'react';
import { RankInterface } from '../types/Interfaces';
import PerkCell from './PerkCell';

interface RankRowProps {
  rank: RankInterface;
  rankIndex: number;
  perkSelectHandler(rankSelected: number, perkSelected: number): void;
}

const RankRow = (props: RankRowProps): JSX.Element => {
  const { rank, rankIndex } = props;
  return (
    <tr className="text-gray-50 divide-y divide-gray-600">
      <td className="text-center select-none">
        <img
          src={`${process.env.PUBLIC_URL}/${rank.imgPath}`}
          alt={rank.name}
          className="transform scale-75 object-none mx-auto -mb-1.5"
        ></img>
        <p className="text-sm">{rank.name}</p>
      </td>
      {rank.perkProgression.length == 1 ? (
        <Fragment>
          <td></td>
          <PerkCell
            perk={rank.perkProgression[0]}
            rankIndex={rankIndex}
            perkIndex={0}
            perkSelectHandler={props.perkSelectHandler}
          />
          <td></td>
        </Fragment>
      ) : (
        rank.perkProgression.map((perk, perkIndex) => {
          return (
            <PerkCell
              key={perk.perk}
              perk={perk}
              rankIndex={rankIndex}
              perkIndex={perkIndex}
              perkSelectHandler={props.perkSelectHandler}
            />
          );
        })
      )}
    </tr>
  );
};

export default RankRow;
