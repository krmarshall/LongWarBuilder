import { Fragment, useContext, useEffect, useState } from 'react';
import { context, TypeEnums } from '../context';
import { assault, engineer, gunner, infantry, medic, rocketeer, scout, sniper } from '../data/classes';
import { ClassInterface, RankInterface } from '../types/Interfaces';
import RankRow from './RankRow';

const PerkGrid = (): JSX.Element => {
  //@ts-expect-error 2461
  const [state, dispatch] = useContext(context);
  const { health, mobility, will, aim } = state.stats;
  const { className, classData, currentBuild, loadBuildSignal } = state;

  useEffect(() => {
    clearPerkTree();
    switch (className) {
      case 'assault': {
        dispatch({ type: TypeEnums.changeClassData, payload: assault });
        break;
      }
      case 'infantry': {
        dispatch({ type: TypeEnums.changeClassData, payload: infantry });
        break;
      }
      case 'rocketeer': {
        dispatch({ type: TypeEnums.changeClassData, payload: rocketeer });
        break;
      }
      case 'gunner': {
        dispatch({ type: TypeEnums.changeClassData, payload: gunner });
        break;
      }
      case 'sniper': {
        dispatch({ type: TypeEnums.changeClassData, payload: sniper });
        break;
      }
      case 'scout': {
        dispatch({ type: TypeEnums.changeClassData, payload: scout });
        break;
      }
      case 'medic': {
        dispatch({ type: TypeEnums.changeClassData, payload: medic });
        break;
      }
      case 'engineer': {
        dispatch({ type: TypeEnums.changeClassData, payload: engineer });
        break;
      }
      default: {
        dispatch({ type: TypeEnums.changeClassData, payload: undefined });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [className]);

  useEffect(() => {
    clearPerkTree();
    selectPerkTreeFromArray(currentBuild);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadBuildSignal]);

  const perkSelectHandler = (rankSelected: number, perkSelected: number) => {
    // If the selected rank already has a perk dont allow a second perk selection, do allow if we are selecting the same perk (deselect)
    if (currentBuild[rankSelected] != undefined && currentBuild[rankSelected] != perkSelected) {
      return;
    }

    const perkTable = document.getElementById('perkTable');
    let element: HTMLElement;
    if (rankSelected == 0) {
      // Specialist rank has blank filler cells so has a different index
      element = perkTable?.childNodes[rankSelected].childNodes[perkSelected + 2] as HTMLElement;
    } else {
      element = perkTable?.childNodes[rankSelected].childNodes[perkSelected + 1] as HTMLElement;
    }
    if (element.dataset.selected) {
      // Deselect Perk
      setElementAsDeselected(element);
      const updateArray = currentBuild.slice();
      updateArray[rankSelected] = undefined;
      dispatch({ type: TypeEnums.changeCurrentBuild, payload: updateArray });
      removeStatsFromPerk(rankSelected, perkSelected);
    } else {
      // Select Perk
      setElementAsSelected(element);
      const updateArray = currentBuild.slice();
      updateArray[rankSelected] = perkSelected;
      dispatch({ type: TypeEnums.changeCurrentBuild, payload: updateArray });
      addStatsFromPerk(rankSelected, perkSelected);
    }
  };

  const selectPerkTreeFromArray = (perkArray: Array<number | undefined>) => {
    const perkTable = document.getElementById('perkTable');
    perkArray.map((perkI, rankI) => {
      let element: HTMLElement;
      if (typeof perkI != undefined) {
        if (rankI == 0) {
          element = perkTable?.childNodes[rankI].childNodes[(perkI as number) + 2] as HTMLElement;
        } else {
          element = perkTable?.childNodes[rankI].childNodes[(perkI as number) + 1] as HTMLElement;
        }
        setElementAsSelected(element);
      }
    });
  };

  const clearPerkTree = () => {
    const perkTable = document.getElementById('perkTable');
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

    dispatch({
      type: TypeEnums.changeCurrentBuild,
      payload: [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    });
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

  const addStatsFromPerk = (rankSelected: number, perkSelected: number) => {
    // Would prefer to destructure objects but gets messy with variable naming
    if (!classData) {
      return;
    }
    // Stats from rank up
    const rankStats = classData?.ranks[rankSelected].statProgression;

    // Stats from perk
    const perkStats = classData?.ranks[rankSelected].perkProgression[perkSelected];

    const updateStats = {
      health: health + rankStats.health,
      mobility: mobility + perkStats.mobility,
      will: will + rankStats.will + perkStats.will,
      aim: aim + rankStats.aim + perkStats.aim,
    };
    dispatch({ type: TypeEnums.changeStats, payload: updateStats });
  };

  const removeStatsFromPerk = (rankSelected: number, perkSelected: number) => {
    // Would prefer to destructure objects but gets messy with variable naming
    if (!classData) {
      return;
    }
    // Stats from rank up
    const rankStats = classData?.ranks[rankSelected].statProgression;

    // Stats from perk
    const perkStats = classData?.ranks[rankSelected].perkProgression[perkSelected];

    const updateStats = {
      health: health - rankStats.health,
      mobility: mobility - perkStats.mobility,
      will: will - rankStats.will - perkStats.will,
      aim: aim - rankStats.aim - perkStats.aim,
    };
    dispatch({ type: TypeEnums.changeStats, payload: updateStats });
  };

  return (
    <div
      className="m-4 p-2 bg-darkGray flex flex-wrap flex-grow justify-center overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-400"
      style={{ maxHeight: '78vh' }}
    >
      <h3 className="text-gray-50 text-xl">{className ? classData?.class : 'Select A Class'}</h3>
      {!classData ? (
        <Fragment></Fragment>
      ) : (
        <table className="table-fixed">
          <thead>
            <tr className="text-gray-50 select-none">
              <th style={{ width: '10%' }}>Rank</th>
              <th style={{ width: '30%' }}></th>
              <th style={{ width: '30%' }}>Perk</th>
              <th style={{ width: '30%' }}></th>
            </tr>
          </thead>
          <tbody id="perkTable">
            {classData?.ranks.map((rank: RankInterface, rankIndex: number) => {
              return (
                <RankRow key={rank.name} rank={rank} rankIndex={rankIndex} perkSelectHandler={perkSelectHandler} />
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PerkGrid;
