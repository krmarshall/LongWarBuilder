import { Fragment, useContext, useEffect, useState } from 'react';
import { context, StateInterface } from '../../context';
import PerkGrid from './PerkGrid';
import PsiGrid from './PsiGrid';

const GridsContainer = (): JSX.Element => {
  const [showPerks, setShowPerks] = useState(true);
  //@ts-expect-error 2461
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, dispatch] = useContext(context);
  const { selectedClass, classData } = state as StateInterface;

  useEffect(() => {
    setShowPerks(true);
  }, [selectedClass]);

  const classList = ['Assault', 'Infantry', 'Rocketeer', 'Gunner', 'Sniper', 'Scout', 'Medic', 'Engineer'];
  const mecList = ['Marauder', 'Valkyrie', 'Archer', 'Goliath', 'Jaeger', 'Pathfinder', 'Guardian', 'Shogun'];

  return (
    <div className="m-4 p-2 bg-darkGray rounded flex flex-wrap flex-grow justify-center overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-scrollbarGray shadow-lg select-none">
      {!selectedClass && <h3 className="text-gray-50 text-xl">Select a Class</h3>}
      {classList.includes(selectedClass) && (
        <Fragment>
          <div className="text-gray-50">
            <button
              onClick={() => {
                setShowPerks(true);
              }}
            >
              Perks
            </button>
            <button
              onClick={() => {
                setShowPerks(false);
              }}
            >
              Psi
            </button>
          </div>
          {!classData && <Fragment></Fragment>}
          {showPerks ? <PerkGrid /> : <PsiGrid />}
        </Fragment>
      )}
      {mecList.includes(selectedClass) && <Fragment>{!classData ? <Fragment></Fragment> : <PerkGrid />}</Fragment>}
    </div>
  );
};

export default GridsContainer;
