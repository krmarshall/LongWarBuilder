import { StateInterface, TypeEnums } from '../context';
import Psi from '../data/psi';
import rookie from '../data/rookie';

const selectGridTreeFromArray = (
  table: HTMLElement | null,
  state: StateInterface,
  dispatch: CallableFunction
): void => {
  const { currentBuild } = state;
  currentBuild.map((perkI, rankI) => {
    let element: HTMLElement;
    if (typeof perkI != undefined && perkI != null) {
      if (rankI == 0) {
        element = table?.childNodes[rankI].childNodes[(perkI as number) + 2] as HTMLElement;
      } else {
        element = table?.childNodes[rankI].childNodes[(perkI as number) + 1] as HTMLElement;
      }
      setElementAsSelected(element);
    }
  });

  calculateStats(state, dispatch);
};

const selectPsiGridTreeFromArray = (
  table: HTMLElement | null,
  state: StateInterface,
  dispatch: CallableFunction
): void => {
  const { currentPsi } = state;
  if (currentPsi == undefined) {
    return;
  }
  currentPsi.map((perkI, rankI) => {
    let element: HTMLElement | null;
    if (typeof perkI != undefined && perkI != null) {
      if (rankI in [0, 3]) {
        element = table?.childNodes[rankI].childNodes[(perkI as number) + 1] as HTMLElement;
      } else if (rankI in [1, 2]) {
        if (perkI == 0) {
          element = table?.childNodes[rankI].childNodes[(perkI as number) + 1] as HTMLElement;
        } else {
          element = table?.childNodes[rankI].childNodes[(perkI as number) + 2] as HTMLElement;
        }
      } else if (rankI in [4, 5]) {
        element = table?.childNodes[rankI].childNodes[(perkI as number) + 2] as HTMLElement;
      } else {
        element = null;
      }
      setElementAsSelected(element);
    }
  });
  calculateStats(state, dispatch);
};

const calculateStats = (state: StateInterface, dispatch: CallableFunction): void => {
  const { currentBuild, currentPsi, classData } = state;
  const updateStats = {
    health: rookie.health,
    mobility: rookie.mobility,
    will: rookie.will,
    aim: rookie.aim,
  };
  currentBuild.map((perkI, rankI) => {
    if (perkI != undefined && perkI != null) {
      if (classData == undefined) {
        return;
      }
      // Stats from rank up
      const rankStats = classData?.ranks[rankI].statProgression;
      // Stats from perk
      const perkStats = classData?.ranks[rankI].perkProgression[perkI as number];
      // Add all the relevant stats to the update stats object
      updateStats.health += rankStats.health;
      updateStats.mobility += perkStats.mobility;
      updateStats.will += rankStats.will + perkStats.will;
      updateStats.aim += rankStats.aim + perkStats.aim;
    }
  });

  currentPsi?.map((psiPerkI, psiRankI) => {
    if (psiPerkI != undefined && psiPerkI != null) {
      const psiRankStats = Psi.psiRanks[psiRankI];
      updateStats.will += psiRankStats.willProgression;
    }
  });

  dispatch({ type: TypeEnums.changeStats, payload: updateStats });
};

const clearGridTree = (table: HTMLElement | null, rankLength: number): void => {
  for (let rank = 0; rank < rankLength; rank++) {
    let element: HTMLElement;
    if (rank == 0) {
      element = table?.childNodes[rank].childNodes[2] as HTMLElement;
      setElementAsDeselected(element);
    } else {
      for (let perk = 0; perk < 3; perk++) {
        element = table?.childNodes[rank].childNodes[perk + 1] as HTMLElement;
        setElementAsDeselected(element);
      }
    }
  }
};

const setElementAsSelected = (element: HTMLElement | null): void => {
  if (!element) {
    return;
  }
  element.dataset.selected = 'selected';
  element.classList.add('bg-blueGray');
  element.classList.remove('hover:bg-lightGray');
};

const setElementAsDeselected = (element: HTMLElement | null): void => {
  if (!element) {
    return;
  }
  element.dataset.selected = '';
  element.classList.remove('bg-blueGray');
  element.classList.add('hover:bg-lightGray');
};

export {
  selectGridTreeFromArray,
  selectPsiGridTreeFromArray,
  calculateStats,
  clearGridTree,
  setElementAsSelected,
  setElementAsDeselected,
};
