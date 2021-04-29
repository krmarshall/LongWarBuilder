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
      <td className="text-center">{rank.name}</td>
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
