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
  const inputChangeHandler = (value: string, setter: (input: number) => void) => {
    let number = Number(value);
    number = Math.min(number, 4);
    number = Math.max(number, 0);
    setter(number);
  };

  return (
    <Fragment>
      <div className="flex-grow">
        <div className="flex flex-row flex-nowrap justify-left content-center mb-4">
          <p>Resource Level:&nbsp;</p>
          <input
            type="number"
            value={resourceLevel}
            className="text-gray-700 rounded bg-gray-300 placeholder-gray-500 pl-1 w-12 focus:outline-none"
            onChange={(event) => {
              inputChangeHandler(event.target.value, setResourceLevel);
            }}
          ></input>
        </div>
      </div>

      <div className="flex-grow">
        <div className="flex flex-row flex-nowrap justify-left content-center mb-4">
          <p>Threat Category Level:&nbsp;</p>
          <input
            type="number"
            value={threatLevel}
            className="text-gray-700 rounded bg-gray-300 placeholder-gray-500 pl-1 w-12 focus:outline-none"
            onChange={(event) => {
              inputChangeHandler(event.target.value, setThreatLevel);
            }}
          ></input>
        </div>
      </div>
    </Fragment>
  );
};

export default SetResources;
