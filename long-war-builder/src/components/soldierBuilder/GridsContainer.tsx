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

  const buttonTabClass = 'flex-grow border rounded-lg rounded-t-none border-black focus:outline-none -mt-2';
  const tabSelected = buttonTabClass + ' bg-gray-500 hover:bg-gray-400';
  const tabUnselected = buttonTabClass + ' bg-gray-700 hover:bg-gray-600';

  return (
    <div className="m-4 p-2 bg-darkGray rounded flex-auto flex-wrap flex-grow justify-center overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-scrollbarGray shadow-lg select-none">
      {!selectedClass && <h3 className="text-gray-50 text-xl text-center">Select a Class</h3>}
      {classList.includes(selectedClass) && (
        <Fragment>
          <div className="text-gray-50 flex flex-row flex-nowrap content-center">
            <button
              className={showPerks ? tabSelected : tabUnselected}
              onClick={() => {
                setShowPerks(true);
              }}
            >
              Perks
            </button>
            <button
              className={showPerks ? tabUnselected : tabSelected}
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
