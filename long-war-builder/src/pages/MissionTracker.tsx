import { Fragment } from 'react';
import MissionCalculator from '../components/missionTracker/MissionCalculator';
import MissionCounter from '../components/missionTracker/MissionCounter';
import MissionReference from '../components/missionTracker/MissionReference';
import NavHeader from '../components/NavHeader';
import MissionStateProvider from '../context/missionContext';

const MissionTracker = (): JSX.Element => {
  return (
    <Fragment>
      <MissionStateProvider>
        <NavHeader classSelector={false} location={'missions'} />

        <div className="flex flex-row flex-nowrap" style={{ maxHeight: '86%' }}>
          <div className="flex flex-col flex-nowrap flex-grow">
            <MissionCalculator />
            <MissionCounter />
          </div>
          <div className="flex flex-col flex-nowrap">
            <MissionReference />
          </div>
        </div>
      </MissionStateProvider>
    </Fragment>
  );
};

export default MissionTracker;
