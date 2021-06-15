import { Fragment } from 'react';
import BaseGrid from '../components/baseBuilder/BaseGrid';
import BaseStats from '../components/baseBuilder/BaseStats';
import BaseStorage from '../components/baseBuilder/BaseStorage';
import StructureSelector from '../components/baseBuilder/StructureSelector';
import NavHeader from '../components/NavHeader';
import BaseStateProvider from '../context/baseContext';

const BaseBuilder = (): JSX.Element => {
  return (
    <Fragment>
      <BaseStateProvider>
        <NavHeader classSelector={false} location={'base'} />

        <div className="flex flex-row flex-nowrap" style={{ maxHeight: '86%' }}>
          <div className="flex flex-col flex-nowrap flex-grow">
            <StructureSelector />
            <BaseGrid />
          </div>
          <div className="flex flex-col flex-nowrap">
            <BaseStats />
            <BaseStorage />
          </div>
        </div>
      </BaseStateProvider>
    </Fragment>
  );
};

export default BaseBuilder;
