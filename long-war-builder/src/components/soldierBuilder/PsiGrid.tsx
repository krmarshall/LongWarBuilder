import { useContext } from 'react';
import { context } from '../../context';
import Psi from '../../data/psi';
import { PsiRankInterface } from '../../types/interfaces/PsiInterfaces';
import PsiRankRow from './PsiRankRow';

const PsiGrid = (): JSX.Element => {
  //@ts-expect-error 2461
  const [state, dispatch] = useContext(context);

  return (
    <table className="table-fixed">
      <thead>
        <tr className="text-gray-50">
          <th style={{ width: '10%' }}>Rank</th>
          <th style={{ width: '30%' }}></th>
          <th style={{ width: '30%' }}>Perk</th>
          <th style={{ width: '30%' }}></th>
        </tr>
      </thead>
      <tbody id="perkTable">
        {Psi.psiRanks.map((psiRank: PsiRankInterface, psiRankIndex: number) => {
          return <PsiRankRow key={psiRank.name} psiRank={psiRank} psiRankIndex={psiRankIndex} />;
        })}
      </tbody>
    </table>
  );
};

export default PsiGrid;
