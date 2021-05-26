import { useContext, useEffect, useState } from 'react';
import { soldierContext, SoldierStateInterface } from '../../context/soldierContext';
import { RankInterface } from '../../types/interfaces/ClassInterfaces';
import RankRow from './RankRow';
import { setElementAsSelected, calculateStats, setElementAsDeselected } from '../../commonFunctions/gridFunctions';

const PerkGrid = (): JSX.Element => {
  const [perkTable, setPerkTable] = useState(document.getElementById('perkTable'));

  //@ts-expect-error 2461
  const [state, dispatch] = useContext(soldierContext);
  const { classData, currentBuild } = state as SoldierStateInterface;

  useEffect(() => {
    setPerkTable(document.getElementById('perkTable'));
  }, [classData]);

  useEffect(() => {
    if (perkTable != null) {
      clearGridTree();
      selectGridTreeFromArray();
    }
  }, [currentBuild, perkTable]);

  const selectGridTreeFromArray = () => {
    currentBuild.map((perkI, rankI) => {
      let element: HTMLElement;
      if (typeof perkI != undefined && perkI != null) {
        if (rankI == 0) {
          element = perkTable?.childNodes[rankI].childNodes[(perkI as number) + 2] as HTMLElement;
        } else {
          element = perkTable?.childNodes[rankI].childNodes[(perkI as number) + 1] as HTMLElement;
        }
        setElementAsSelected(element);
      }
    });

    calculateStats(state, dispatch);
  };

  const clearGridTree = () => {
    for (let rank = 0; rank < 7; rank++) {
      let element: HTMLElement;
      if (rank == 0) {
        element = perkTable?.childNodes[rank].childNodes[2] as HTMLElement;
        setElementAsDeselected(element);
      } else {
        for (let perk = 0; perk < 3; perk++) {
          element = perkTable?.childNodes[rank].childNodes[perk + 1] as HTMLElement;
          setElementAsDeselected(element);
        }
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
      <tbody id="perkTable">
        {classData?.ranks.map((rank: RankInterface, rankIndex: number) => {
          return <RankRow key={rank.name} rank={rank} rankIndex={rankIndex} />;
        })}
      </tbody>
    </table>
  );
};

export default PerkGrid;
