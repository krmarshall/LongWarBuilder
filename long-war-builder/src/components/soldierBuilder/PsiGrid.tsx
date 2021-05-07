import { useContext, useEffect, useState } from 'react';
import { context, StateInterface } from '../../context';
import Psi from '../../data/psi';
import { PsiRankInterface } from '../../types/interfaces/PsiInterfaces';
import PsiRankRow from './PsiRankRow';
import { setElementAsSelected, calculateStats, setElementAsDeselected } from '../../commonFunctions/gridFunctions';

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
      clearPsiGridTree();
      selectPsiGridTreeFromArray();
    }
  }, [currentPsi, psiTable]);

  const selectPsiGridTreeFromArray = (): void => {
    if (currentPsi == undefined) {
      return;
    }
    currentPsi.map((perkI, rankI) => {
      let element: HTMLElement | null;
      if (typeof perkI != undefined && perkI != null) {
        if ([0, 3].includes(rankI)) {
          element = psiTable?.childNodes[rankI].childNodes[(perkI as number) + 1] as HTMLElement;
        } else if ([1, 2].includes(rankI)) {
          if (perkI == 0) {
            element = psiTable?.childNodes[rankI].childNodes[(perkI as number) + 1] as HTMLElement;
          } else {
            element = psiTable?.childNodes[rankI].childNodes[(perkI as number) + 2] as HTMLElement;
          }
        } else if ([4, 5].includes(rankI)) {
          element = psiTable?.childNodes[rankI].childNodes[(perkI as number) + 2] as HTMLElement;
        } else {
          element = null;
        }
        setElementAsSelected(element);
      }
    });
    calculateStats(state, dispatch);
  };

  const clearPsiGridTree = (): void => {
    for (let rank = 0; rank < 6; rank++) {
      let element: HTMLElement;
      if ([0, 3].includes(rank)) {
        for (let perk = 0; perk < 3; perk++) {
          element = psiTable?.childNodes[rank].childNodes[perk + 1] as HTMLElement;
          setElementAsDeselected(element);
        }
      } else if ([1, 2].includes(rank)) {
        element = psiTable?.childNodes[rank].childNodes[1] as HTMLElement;
        setElementAsDeselected(element);
        element = psiTable?.childNodes[rank].childNodes[3] as HTMLElement;
        setElementAsDeselected(element);
      } else if ([4, 5].includes(rank)) {
        element = psiTable?.childNodes[rank].childNodes[2] as HTMLElement;
        setElementAsDeselected(element);
      }
    }
  };

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
