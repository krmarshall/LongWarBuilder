import { Fragment } from 'react';
import SoldierStats from '../components/soldierBuilder/SoldierStats';
import BuildStorage from '../components/soldierBuilder/BuildStorage';
import Notification from '../components/Notification';
import GridsContainer from '../components/soldierBuilder/GridsContainer';
import NavHeader from '../components/NavHeader';
import SoldierStateProvider from '../context/soldierContext';

const SoldierBuilder = (): JSX.Element => {
  return (
    <Fragment>
      <SoldierStateProvider>
        <NavHeader classSelector={true} location={'build'} />

        <div className="flex flex-row flex-nowrap" style={{ maxHeight: '86%' }}>
          <GridsContainer />
          <div className="flex flex-col flex-nowrap" style={{ maxHeight: '60%' }}>
            <SoldierStats />
            <BuildStorage />
            <Notification />
          </div>
        </div>
      </SoldierStateProvider>
    </Fragment>
  );
};

export default SoldierBuilder;
