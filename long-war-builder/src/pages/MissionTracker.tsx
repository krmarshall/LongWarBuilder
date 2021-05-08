import { Fragment } from 'react';
import NavHeader from '../components/NavHeader';

const MissionTracker = (): JSX.Element => {
  return (
    <Fragment>
      <NavHeader classSelector={false} location={'missions'} />
    </Fragment>
  );
};

export default MissionTracker;
