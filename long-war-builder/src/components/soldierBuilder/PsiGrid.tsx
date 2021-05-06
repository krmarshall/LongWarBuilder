import { useContext, useEffect, useState } from 'react';
import { context, StateInterface } from '../../context';
import Psi from '../../data/psi';
import { PsiRankInterface } from '../../types/interfaces/PsiInterfaces';
import PsiRankRow from './PsiRankRow';
import { selectPsiGridTreeFromArray, clearGridTree } from '../../commonFunctions/gridFunctions';

const PsiGrid = (): JSX.Element => {
  const [psiTable, setPsiTable] = useState(document.getElementById('psiTable'));

  //@ts-expect-error 2461
  const [state, dispatch] = useContext(context);
  const { classData, currentPsi } = state as StateInterface;

  useEffect(() => {
    setPsiTable(document.getElementById('psiTable'));
  }, [classData]);

  useEffect(() => {
    if (psiTable != null) {
      clearGridTree(psiTable, 6);
      selectPsiGridTreeFromArray(psiTable, state, dispatch);
    }
  }, [currentPsi, psiTable]);

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
      <tbody id="psiTable">
        {Psi.psiRanks.map((psiRank: PsiRankInterface, psiRankIndex: number) => {
          return <PsiRankRow key={psiRank.name} psiRank={psiRank} psiRankIndex={psiRankIndex} />;
        })}
      </tbody>
    </table>
  );
};

export default PsiGrid;
