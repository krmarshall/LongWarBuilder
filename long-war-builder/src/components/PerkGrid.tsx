import { useEffect, useState } from 'react';
import { ClassName, ClassImage } from '../types/enums/ClassEnums';
import assault from '../data/assault';
import { ClassInterface } from '../types/Interfaces';
import RankRow from './RankRow';

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

  useEffect(() => {
    switch (className) {
      case 'assault': {
        setClassData(assault);
        break;
      }
      case 'infantry': {
        setClassData(assault);
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

  return (
    <div className="m-4 p-2 bg-darkGray flex-grow flex flex-wrap justify-center">
      <h3 className="text-gray-50 text-xl">{className ? classData?.class : 'Select A Class'}</h3>
      <table className="">
        <tr className="text-gray-50">
          <th>Rank</th>
          <th>Perk</th>
        </tr>
        {classData?.ranks.map((rank) => {
          return <RankRow key={rank.name} rank={rank} />;
        })}
      </table>
    </div>
  );
};

export default PerkGrid;
