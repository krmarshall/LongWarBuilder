import { Fragment, useState, useEffect } from 'react';

interface CalculateResourceProps {
  resourceLevel: number;
  setResourceLevel(value: number): void;
  threatLevel: number;
  setThreatLevel(value: number): void;
}

const CalculateResources = ({
  resourceLevel,
  setResourceLevel,
  threatLevel,
  setThreatLevel,
}: CalculateResourceProps): JSX.Element => {
  const [alienResources, setAlienResources] = useState(0);

  const [previousThreat, setPreviousThreat] = useState(0);
  const [splashedSmalls, setSplashedSmalls] = useState(0);
  const [splashedLarges, setSplashedLarges] = useState(0);

  useEffect(() => {
    let newResourceLevel = Math.floor(alienResources / 50);
    newResourceLevel = Math.min(newResourceLevel, 4);
    newResourceLevel = Math.max(newResourceLevel, 0);
    setResourceLevel(newResourceLevel);
  }, [alienResources]);

  useEffect(() => {
    let newThreatCategory = Math.max(previousThreat - 2, 0) + splashedSmalls + splashedLarges * 2;
    newThreatCategory = Math.floor(newThreatCategory / 2);
    newThreatCategory = Math.min(newThreatCategory, 4);
    newThreatCategory = Math.max(newThreatCategory, 0);
    setThreatLevel(newThreatCategory);
  }, [previousThreat, splashedSmalls, splashedLarges]);

  return (
    <Fragment>
      <div className="flex flex-row flex-nowrap justify-left content-center">
        <p>Resource Level:&nbsp;</p>
        <p className="font-bold">{resourceLevel}</p>
      </div>

      <div className="flex flex-row flex-nowrap justify-left content-center ml-6 mb-4">
        <p>Alien Resources:&nbsp;</p>
        <input
          type="number"
          value={alienResources}
          className="text-gray-700 rounded bg-gray-300 placeholder-gray-500 pl-1 w-12 focus:outline-none"
          onChange={(event) => {
            setAlienResources(Number(event.target.value));
          }}
        ></input>
      </div>

      <div className="flex flex-row flex-nowrap justify-left content-center">
        <p>Threat Category Level:&nbsp;</p>
        <p className="font-bold">{threatLevel}</p>
      </div>

      <div className="flex flex-row flex-nowrap justify-left content-center ml-6">
        <p>Previous Months Threat Category Level:&nbsp;</p>
        <input
          type="number"
          value={previousThreat}
          className="text-gray-700 rounded bg-gray-300 placeholder-gray-500 pl-1 w-8 focus:outline-none"
          onChange={(event) => {
            let value = Number(event.target.value);
            value = Math.min(value, 4);
            value = Math.max(value, 0);
            setPreviousThreat(value);
          }}
        ></input>
      </div>

      <div className="flex flex-row flex-nowrap justify-left content-center ml-6">
        <p>Splashed Small/Mediums:&nbsp;</p>
        <input
          type="number"
          value={splashedSmalls}
          className="text-gray-700 rounded bg-gray-300 placeholder-gray-500 pl-1 w-10 focus:outline-none"
          onChange={(event) => {
            let value = Number(event.target.value);
            value = Math.max(value, 0);
            setSplashedSmalls(value);
          }}
        ></input>
      </div>

      <div className="flex flex-row flex-nowrap justify-left content-center ml-6">
        <p>Splashed Larges:&nbsp;</p>
        <input
          type="number"
          value={splashedLarges}
          className="text-gray-700 rounded bg-gray-300 placeholder-gray-500 pl-1 w-10 focus:outline-none"
          onChange={(event) => {
            let value = Number(event.target.value);
            value = Math.max(value, 0);
            setSplashedLarges(value);
          }}
        ></input>
      </div>
    </Fragment>
  );
};

export default CalculateResources;
