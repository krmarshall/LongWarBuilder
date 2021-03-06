import { Fragment, useContext, useEffect } from 'react';
import { missionContext, MissionContextTypeEnums } from '../../context/missionContext';

const CalculateResources = (): JSX.Element => {
  //@ts-expect-error 2461
  const [missionState, missionDispatch] = useContext(missionContext);

  const { prevMonthThreatLevel, splashedSmalls, splashedLarges, threatLevel } = missionState.calculatedInputs;
  const { alienResources, resourceLevel } = missionState.calculatedInputs;

  useEffect(() => {
    let newResourceLevel = Math.floor(alienResources / 50);
    newResourceLevel = Math.min(newResourceLevel, 4);
    newResourceLevel = Math.max(newResourceLevel, 0);
    missionDispatch({
      type: MissionContextTypeEnums.changeCalculatedInput,
      payload: { resourceLevel: newResourceLevel },
    });
  }, [missionState.calculatedInputs.alienResources]);

  useEffect(() => {
    let newThreatCategory = Math.max(prevMonthThreatLevel - 2, 0) + splashedSmalls + splashedLarges * 2;
    newThreatCategory = Math.floor(newThreatCategory / 2);
    newThreatCategory = Math.min(newThreatCategory, 4);
    newThreatCategory = Math.max(newThreatCategory, 0);
    missionDispatch({
      type: MissionContextTypeEnums.changeCalculatedInput,
      payload: { threatLevel: newThreatCategory },
    });
  }, [prevMonthThreatLevel, splashedSmalls, splashedLarges]);

  return (
    <Fragment>
      <div className="flex-grow">
        <div className="flex flex-row flex-nowrap justify-left content-center">
          <p>Resource Level:&nbsp;</p>
          <p className="font-bold">{resourceLevel}</p>
        </div>

        <div className="flex flex-row flex-nowrap justify-left content-center ml-6 mb-4">
          <p>Alien Resources:&nbsp;</p>
          <input
            type="number"
            value={alienResources}
            className="text-gray-300 bg-lightGray rounded placeholder-gray-500 pl-1 w-12 focus:outline-none"
            onChange={(event) => {
              missionDispatch({
                type: MissionContextTypeEnums.changeCalculatedInput,
                payload: { alienResources: Number(event.target.value) },
              });
            }}
          ></input>
        </div>
      </div>

      <div className="flex-grow">
        <div className="flex flex-row flex-nowrap justify-left content-center">
          <p>Threat Category Level:&nbsp;</p>
          <p className="font-bold">{threatLevel}</p>
        </div>

        <div className="flex flex-row flex-nowrap justify-left content-center ml-6">
          <p>Previous Months Threat Category Level:&nbsp;</p>
          <input
            type="number"
            value={prevMonthThreatLevel}
            className="text-gray-300 bg-lightGray rounded placeholder-gray-500 pl-1 w-8 focus:outline-none"
            onChange={(event) => {
              let value = Number(event.target.value);
              value = Math.min(value, 4);
              value = Math.max(value, 0);
              missionDispatch({
                type: MissionContextTypeEnums.changeCalculatedInput,
                payload: { prevMonthThreatLevel: value },
              });
            }}
          ></input>
        </div>

        <div className="flex flex-row flex-nowrap justify-left content-center ml-6">
          <p>Splashed Small/Mediums:&nbsp;</p>
          <input
            type="number"
            value={splashedSmalls}
            className="text-gray-300 bg-lightGray rounded placeholder-gray-500 pl-1 w-10 focus:outline-none"
            onChange={(event) => {
              let value = Number(event.target.value);
              value = Math.max(value, 0);
              missionDispatch({
                type: MissionContextTypeEnums.changeCalculatedInput,
                payload: { splashedSmalls: value },
              });
            }}
          ></input>
        </div>

        <div className="flex flex-row flex-nowrap justify-left content-center ml-6">
          <p>Splashed Larges:&nbsp;</p>
          <input
            type="number"
            value={splashedLarges}
            className="text-gray-300 bg-lightGray rounded placeholder-gray-500 pl-1 w-10 focus:outline-none"
            onChange={(event) => {
              let value = Number(event.target.value);
              value = Math.max(value, 0);
              missionDispatch({
                type: MissionContextTypeEnums.changeCalculatedInput,
                payload: { splashedLarges: value },
              });
            }}
          ></input>
        </div>
      </div>
    </Fragment>
  );
};

export default CalculateResources;
