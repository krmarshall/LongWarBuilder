import { StateInterface, TypeEnums } from '../context';
import Psi from '../data/psi';
import rookie from '../data/rookie';

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

export { calculateStats, setElementAsSelected, setElementAsDeselected };
