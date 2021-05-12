import { Fragment } from 'react';
import NavHeader from '../components/NavHeader';

const About = (): JSX.Element => {
  return (
    <Fragment>
      <NavHeader classSelector={false} location={'missionAbout'} />

      <div
        className="flex-auto flex-col justify-center content-center text-gray-50 m-4 p-4 mt-1 pt-2 bg-darkGray opacity-100 h-auto rounded shadow-lg
        overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-scrollbarGray"
        style={{ maxHeight: '80%' }}
      >
        <div className="flex flex-col">
          <h3 className="text-xl text-center underline"></h3>
          <p className="mt-2"></p>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
