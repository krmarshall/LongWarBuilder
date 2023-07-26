import { useContext, useEffect, useState } from 'react';
import { ClassImage, ClassName, MecImage, MecName } from '../../types/enums/ClassEnums';
import { soldierContext, SoldierStateInterface, SoldierContextTypeEnums } from '../../context/soldierContext';
import { bulkClassData } from '../../data/classes';

const ClassSelector = (): JSX.Element => {
  //@ts-expect-error 2461
  const [state, dispatch] = useContext(soldierContext);

  const { selectedClass } = state as SoldierStateInterface;

  const classList = ['Assault', 'Infantry', 'Rocketeer', 'Gunner', 'Sniper', 'Scout', 'Medic', 'Engineer'];
  const mecList = ['Marauder', 'Valkyrie', 'Archer', 'Goliath', 'Jaeger', 'Pathfinder', 'Guardian', 'Shogun'];

  const classSelectHandler = (className: ClassName | MecName) => {
    dispatch({
      type: SoldierContextTypeEnums.changeClass,
      payload: {
        selectedClass: className,
        classData: bulkClassData[className],
        currentBuild: [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        currentPsi: undefined,
      },
    });
  };

  return (
    <div className="mt-0.5" style={{ width: '60%' }}>
      <div className="flex flex-row flex-nowrap content-center justify-center text-gray-50 select-none">
        {classList.map((className) => {
          let selectedOpacity = ' opacity-40 hover:opacity-70';
          if (className === selectedClass) {
            selectedOpacity = ' opacity-90 hover:opacity-100';
          }
          return (
            <div
              key={className}
              className={'flex flex-col flex-nowrap mx-2 w-16 cursor-pointer' + selectedOpacity}
              onClick={() => {
                classSelectHandler(className as ClassName);
              }}
            >
              <img
                id={className}
                src={`${process.env.PUBLIC_URL}/${ClassImage[className as ClassName]}`}
                alt={className}
                className="w-12 mx-auto -my-1.5 -mt-0 rounded-2xl"
                draggable="false"
              />
              <h5 className="mt-0.5 text-center text-sm">{className}</h5>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row flex-nowrap mt-1 content-center justify-center text-gray-50 select-none">
        {mecList.map((mecName) => {
          let selectedOpacity = ' opacity-40 hover:opacity-70';
          if (mecName === selectedClass) {
            selectedOpacity = ' opacity-90 hover:opacity-100';
          }
          return (
            <div
              key={mecName}
              className={'flex flex-col flex-nowrap mx-2 w-16 cursor-pointer' + selectedOpacity}
              onClick={() => {
                classSelectHandler(mecName as MecName);
              }}
            >
              <img
                key={mecName}
                id={mecName}
                src={`${process.env.PUBLIC_URL}/${MecImage[mecName as MecName]}`}
                alt={mecName}
                className="w-12 mx-auto -my-1.5 -mt-0 rounded-2xl"
                draggable="false"
              />
              <h5 className="mt-0.5 text-center text-sm">{mecName}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClassSelector;
