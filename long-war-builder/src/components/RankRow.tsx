import { Fragment } from 'react';
import { RankInterface } from '../types/Interfaces';

interface RankRowProps {
  rank: RankInterface;
}

const RankRow = ({ rank }: RankRowProps): JSX.Element => {
  return (
    <tr className="text-gray-50">
      <td>{rank.name}</td>
      {rank.perkProgression.map((perk) => {
        return (
          <td key={perk.perk}>
            <h5 className="text-sm">{perk.perk}</h5>
            <p className="text-xs">{perk.description}</p>
          </td>
        );
      })}
    </tr>
  );
};

export default RankRow;
