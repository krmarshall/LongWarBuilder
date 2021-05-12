import ClassSelector from './soldierBuilder/ClassSelector';
import { useHistory } from 'react-router';
import headerWide from '../headerWide.jpg';

interface NavHeaderProps {
  classSelector: boolean;
  location: string;
}

const NavHeader = ({ classSelector, location }: NavHeaderProps): JSX.Element => {
  const buttonClass = 'self-center justify-center focus:outline-none rounded w-max m-0.5 py-0.5 px-2';
  const buttonClassDeselected = buttonClass + ' bg-gray-700 hover:bg-gray-600';
  const buttonClassSelected = buttonClass + ' bg-gray-500 hover:bg-gray-400';
  const buttonClassNotAllowed = buttonClassDeselected + ' cursor-not-allowed';
  const history = useHistory();
  return (
    <div className="flex flex-row flex-nowrap">
      <img
        src={`${process.env.PUBLIC_URL}/img/perks/repair.png`}
        alt="SoldierBuilderLogo"
        className="transform scale-100 object-none mx-auto"
        style={{ width: '8%' }}
      ></img>
      <h3
        className="text-gray-50 text-2xl text-center self-center justify-self-center whitespace-nowrap"
        style={{ width: '12%' }}
      >
        Long War <br />
        Assistant
        {/* <a
          onClick={() => {
            history.push('/about');
          }}
          className="text-xs text-blue-500 cursor-pointer"
        >
          ?
        </a> */}
      </h3>

      {classSelector ? (
        <ClassSelector />
      ) : (
        <div className="mt-0.5 flex flex-row flex-nowrap content-center justify-center" style={{ width: '60%' }}>
          <img
            src={headerWide}
            alt="headerFiller"
            className="transform scale-90 opacity-60 rounded-xl shadow-2xl max-h-24"
            style={{ maxHeight: '6.5rem' }}
          ></img>
        </div>
      )}

      <div className="flex flex-col text-gray-50 text-sm mt-2.5" style={{ width: '20%' }}>
        <button
          className={location == 'build' ? buttonClassSelected : buttonClassDeselected}
          onClick={() => {
            history.push('/build');
          }}
        >
          Soldier Builder
        </button>
        <button
          className={location == 'missions' ? buttonClassSelected : buttonClassDeselected}
          onClick={() => {
            history.push('/missions');
          }}
        >
          Mission Tracker
        </button>
        <button
          className={buttonClassNotAllowed}
          onClick={() => {
            //history.push('/');
          }}
        >
          Events Tracker
        </button>
      </div>
    </div>
  );
};

export default NavHeader;
