import { Fragment, useState } from 'react';
import MissionCalculator from '../components/missionTracker/MissionCalculator';
import MissionReference from '../components/missionTracker/MissionReference';
import NavHeader from '../components/NavHeader';

const MissionTracker = (): JSX.Element => {
  const [resourceLevel, setResourceLevel] = useState(0);
  const [threatLevel, setThreatLevel] = useState(0);
  return (
    <Fragment>
      <NavHeader classSelector={false} location={'missions'} />

      <div className="flex flex-row flex-nowrap" style={{ maxHeight: '86%' }}>
        <div className="flex flex-col flex-nowrap flex-grow">
          <MissionCalculator
            resourceLevel={resourceLevel}
            setResourceLevel={setResourceLevel}
            threatLevel={threatLevel}
            setThreatLevel={setThreatLevel}
          />
        </div>
        <div className="flex flex-col flex-nowrap">
          <MissionReference />
        </div>
      </div>
    </Fragment>
  );
};

export default MissionTracker;
