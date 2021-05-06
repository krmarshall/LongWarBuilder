import { Fragment, useContext } from 'react';
import { context, StateInterface } from '../../context';
import PerkGrid from './PerkGrid';

const GridsContainer = (): JSX.Element => {
  //@ts-expect-error 2461
  const [state, dispatch] = useContext(context);
  const { selectedClass, classData } = state as StateInterface;

  const classList = ['Assault', 'Infantry', 'Rocketeer', 'Gunner', 'Sniper', 'Scout', 'Medic', 'Engineer'];
  const mecList = ['Marauder', 'Valkyrie', 'Archer', 'Goliath', 'Jaeger', 'Pathfinder', 'Guardian', 'Shogun'];

  return (
    <div className="m-4 p-2 bg-darkGray rounded flex flex-wrap flex-grow justify-center overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-scrollbarGray shadow-lg select-none">
      {!selectedClass && <h3 className="text-gray-50 text-xl">Select a Class</h3>}
      {classList.includes(selectedClass) && (
        <div className="text-gray-50">
          <button>Perks</button>
          <button>Psi</button>
        </div>
      )}
      {mecList.includes(selectedClass) && (
        // <div className="text-gray-50">
        //   <button>Perks</button>
        // </div>
        <Fragment></Fragment>
      )}
      {!classData ? <Fragment></Fragment> : <PerkGrid />}
    </div>
  );
};

export default GridsContainer;
