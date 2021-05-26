import { Fragment } from 'react';
import NavHeader from '../components/NavHeader';
import BaseStateProvider from '../context/baseContext';

const BaseBuilder = (): JSX.Element => {
  return (
    <Fragment>
      <BaseStateProvider>
        <NavHeader classSelector={false} location={'base'} />

        <div className="flex flex-row flex-nowrap" style={{ maxHeight: '86%' }}></div>
      </BaseStateProvider>
    </Fragment>
  );
};

export default BaseBuilder;
