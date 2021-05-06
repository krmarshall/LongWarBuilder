import { useContext, useEffect, useState } from 'react';
import { context, StateInterface } from '../../context';
import { RankInterface } from '../../types/interfaces/ClassInterfaces';
import RankRow from './RankRow';
import { selectGridTreeFromArray, clearGridTree } from '../../commonFunctions/gridFunctions';

const PerkGrid = (): JSX.Element => {
  const [perkTable, setPerkTable] = useState(document.getElementById('perkTable'));

  //@ts-expect-error 2461
  const [state, dispatch] = useContext(context);
  const { classData, currentBuild } = state as StateInterface;

  useEffect(() => {
    setPerkTable(document.getElementById('perkTable'));
  }, [classData]);

  useEffect(() => {
    if (perkTable != null) {
      clearGridTree(perkTable, 7);
      selectGridTreeFromArray(perkTable, state, dispatch);
    }
  }, [currentBuild, perkTable]);

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
