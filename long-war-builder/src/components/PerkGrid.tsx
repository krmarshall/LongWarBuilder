import { useEffect, useState } from 'react';
import { ClassName, ClassImage } from '../types/enums/ClassEnums';
import assault from '../data/assault';
import { ClassInterface, StatProgressionInterface } from '../types/Interfaces';
import RankRow from './RankRow';
import { PerkName } from '../types/enums/PerkEnums';

interface PerkGridProps {
  className: string;
  health: number;
  mobility: number;
  will: number;
  aim: number;
  defense: number;
  setHealth(value: number): void;
  setMobility(value: number): void;
  setWill(value: number): void;
  setAim(value: number): void;
  setDefense(value: number): void;
}

const PerkGrid = (props: PerkGridProps): JSX.Element => {
  const { className, health, mobility, will, aim, defense } = props;
  const [classData, setClassData] = useState<undefined | ClassInterface>();
  // eslint-disable-next-line no-sparse-arrays
  const [currentBuild, setCurrentBuild] = useState<Array<undefined | number>>([, , , , , ,]);

  useEffect(() => {
    switch (className) {
      case 'assault': {
        setClassData(assault);
        break;
      }
      case 'infantry': {
        setClassData(undefined);
        break;
      }
      case 'rocketeer': {
        setClassData(undefined);
        break;
      }
      case 'gunner': {
        setClassData(undefined);
        break;
      }
      case 'sniper': {
        setClassData(undefined);
        break;
      }
      case 'scout': {
        setClassData(undefined);
        break;
      }
      case 'medic': {
        setClassData(undefined);
        break;
      }
      case 'engineer': {
        setClassData(undefined);
        break;
      }
      default: {
        setClassData(undefined);
      }
    }
  }, [className]);

  const perkSelectHandler = (rankSelected: number, perkSelected: number) => {
    // If the selected rank already has a perk dont allow a second perk selection, do allow if we are selecting the same perk (deselect)
    if (currentBuild[rankSelected] != undefined && currentBuild[rankSelected] != perkSelected) {
      return;
    }

    const perkTable = document.getElementById('perkTable');
    let element: HTMLElement;
    if (rankSelected == 0) {
      // Specialist rank has blank filler cells so has a different index
      element = perkTable?.childNodes[rankSelected + 1].childNodes[perkSelected + 2] as HTMLElement;
    } else {
      element = perkTable?.childNodes[rankSelected + 1].childNodes[perkSelected + 1] as HTMLElement;
    }
    if (element.dataset.selected) {
      // Deselect Perk
      setElementAsDeselected(element);
      const updateArray = currentBuild.slice();
      updateArray[rankSelected] = undefined;
      setCurrentBuild(updateArray);
      removeStatsFromPerk(rankSelected, perkSelected);
    } else {
      // Select Perk
      setElementAsSelected(element);
      const updateArray = currentBuild.slice();
      updateArray[rankSelected] = perkSelected;
      setCurrentBuild(updateArray);
      addStatsFromPerk(rankSelected, perkSelected);
    }
  };

  const selectPerkTreeFromArray = () => {
    const perkTable = document.getElementById('perkTable');
    const perkArray = [0, 1, 2, 0, 0, 2, 0];
    perkArray.map((perkI, rankI) => {
      let element: HTMLElement;
      if (rankI == 0) {
        element = perkTable?.childNodes[rankI + 1].childNodes[perkI + 2] as HTMLElement;
      } else {
        element = perkTable?.childNodes[rankI + 1].childNodes[perkI + 1] as HTMLElement;
      }
      setElementAsSelected(element);
    });
  };

  const setElementAsSelected = (element: HTMLElement) => {
    element.dataset.selected = 'selected';
    element.classList.add('bg-blueGray');
    element.classList.remove('hover:bg-lightGray');
  };

  const setElementAsDeselected = (element: HTMLElement) => {
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
    props.setHealth(health + rankStats.health);

    // Stats from perk
    const perkStats = classData?.ranks[rankSelected].perkProgression[perkSelected];
    props.setMobility(mobility + perkStats.mobility);

    // Stats from both
    props.setAim(aim + rankStats.aim + perkStats.aim);
    props.setWill(will + rankStats.will + perkStats.will);
  };

  const removeStatsFromPerk = (rankSelected: number, perkSelected: number) => {
    // Would prefer to destructure objects but gets messy with variable naming
    if (!classData) {
      return;
    }
    // Stats from rank up
    const rankStats = classData?.ranks[rankSelected].statProgression;
    props.setHealth(health - rankStats.health);

    // Stats from perk
    const perkStats = classData?.ranks[rankSelected].perkProgression[perkSelected];
    props.setMobility(mobility - perkStats.mobility);

    // Stats from both
    props.setAim(aim - rankStats.aim - perkStats.aim);
    props.setWill(will - rankStats.will - perkStats.will);
  };

  return (
    <div
      className="m-4 p-2 bg-darkGray flex flex-wrap justify-center overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-400"
      style={{ maxHeight: '80vh' }}
    >
      <h3 className="text-gray-50 text-xl">{className ? classData?.class : 'Select A Class'}</h3>
      <table className="table-fixed" id="perkTable">
        <tr className="text-gray-50 select-none">
          <th style={{ width: '10%' }}>Rank</th>
          <th style={{ width: '30%' }}></th>
          <th style={{ width: '30%' }}>Perk</th>
          <th style={{ width: '30%' }}></th>
        </tr>
        {classData?.ranks.map((rank, rankIndex) => {
          return <RankRow key={rank.name} rank={rank} rankIndex={rankIndex} perkSelectHandler={perkSelectHandler} />;
        })}
      </table>
    </div>
  );
};

export default PerkGrid;
