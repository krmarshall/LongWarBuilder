import { Fragment } from 'react';

interface SetResourceProps {
  resourceLevel: number;
  setResourceLevel(value: number): void;
  threatLevel: number;
  setThreatLevel(value: number): void;
}
const SetResources = ({
  resourceLevel,
  setResourceLevel,
  threatLevel,
  setThreatLevel,
}: SetResourceProps): JSX.Element => {
  return (
    <Fragment>
      <div className="flex flex-row flex-nowrap justify-left content-center mb-4">
        <p>Resource Level:&nbsp;</p>
        <input
          type="number"
          value={resourceLevel}
          className="text-gray-700 rounded bg-gray-300 placeholder-gray-500 pl-1 w-12 focus:outline-none"
          onChange={(event) => {
            let value = Number(event.target.value);
            value = Math.min(value, 4);
            value = Math.max(value, 0);
            setResourceLevel(value);
          }}
        ></input>
      </div>

      <div className="flex flex-row flex-nowrap justify-left content-center mb-4">
        <p>Threat Category Level:&nbsp;</p>
        <input
          type="number"
          value={threatLevel}
          className="text-gray-700 rounded bg-gray-300 placeholder-gray-500 pl-1 w-12 focus:outline-none"
          onChange={(event) => {
            let value = Number(event.target.value);
            value = Math.min(value, 4);
            value = Math.max(value, 0);
            setThreatLevel(value);
          }}
        ></input>
      </div>
    </Fragment>
  );
};

export default SetResources;
