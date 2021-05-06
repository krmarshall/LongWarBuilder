import { useContext, useEffect, useState } from 'react';
import { context, StateInterface, TypeEnums } from '../../context';
import rookie from '../../data/rookie';
import { ClassInterface, RankInterface } from '../../types/interfaces/ClassInterfaces';
import RankRow from './RankRow';

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
      clearPerkTree();
      selectPerkTreeFromArray(currentBuild, classData as ClassInterface);
    }
  }, [currentBuild, perkTable]);

  const selectPerkTreeFromArray = (perkArray: Array<number | undefined>, classDataParam: ClassInterface) => {
    const updateStats = {
      health: rookie.health,
      mobility: rookie.mobility,
      will: rookie.will,
      aim: rookie.aim,
    };
    perkArray.map((perkI, rankI) => {
      let element: HTMLElement;
      if (typeof perkI != undefined && perkI != null) {
        if (rankI == 0) {
          element = perkTable?.childNodes[rankI].childNodes[(perkI as number) + 2] as HTMLElement;
        } else {
          element = perkTable?.childNodes[rankI].childNodes[(perkI as number) + 1] as HTMLElement;
        }
        setElementAsSelected(element);

        // Stats from rank up
        const rankStats = classDataParam?.ranks[rankI].statProgression;
        // Stats from perk
        const perkStats = classDataParam?.ranks[rankI].perkProgression[perkI as number];
        // Add all the relevant stats to the update stats object
        updateStats.health += rankStats.health;
        updateStats.mobility += perkStats.mobility;
        updateStats.will += rankStats.will + perkStats.will;
        updateStats.aim += rankStats.aim + perkStats.aim;
      }
    });
    dispatch({ type: TypeEnums.changeStats, payload: updateStats });
  };

  const clearPerkTree = () => {
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

  const setElementAsSelected = (element: HTMLElement) => {
    if (!element) {
      return;
    }
    element.dataset.selected = 'selected';
    element.classList.add('bg-blueGray');
    element.classList.remove('hover:bg-lightGray');
  };

  const setElementAsDeselected = (element: HTMLElement) => {
    if (!element) {
      return;
    }
    element.dataset.selected = '';
    element.classList.remove('bg-blueGray');
    element.classList.add('hover:bg-lightGray');
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
