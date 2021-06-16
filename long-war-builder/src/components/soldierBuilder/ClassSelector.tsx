import { useContext, useEffect, useState } from 'react';
import { ClassImage, ClassName, MecImage, MecName } from '../../types/enums/ClassEnums';
import { soldierContext, SoldierStateInterface, SoldierContextTypeEnums } from '../../context/soldierContext';
import { bulkClassData } from '../../data/classes';

const ClassSelector = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<HTMLElement>();

  //@ts-expect-error 2461
  const [state, dispatch] = useContext(soldierContext);

  const { selectedClass } = state as SoldierStateInterface;

  const classList = ['Assault', 'Infantry', 'Rocketeer', 'Gunner', 'Sniper', 'Scout', 'Medic', 'Engineer'];
  const mecList = ['Marauder', 'Valkyrie', 'Archer', 'Goliath', 'Jaeger', 'Pathfinder', 'Guardian', 'Shogun'];

  useEffect(() => {
    const element = document.getElementById(selectedClass);
    styleSelectedImage(element as HTMLElement);
  }, [selectedClass]);

  const styleSelectedImage = (element: HTMLElement) => {
    if (selectedImage == element) {
      return;
    }

    element.classList.remove('opacity-40');
    element.classList.remove('hover:opacity-70');
    element.classList.add('opacity-100');

    selectedImage?.classList.remove('opacity-100');
    selectedImage?.classList.add('opacity-40');
    selectedImage?.classList.add('hover:opacity-70');

    setSelectedImage(element);
  };

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
          return (
            <img
              key={className}
              id={className}
              src={`${process.env.PUBLIC_URL}/${ClassImage[className as ClassName]}`}
              alt={className}
              className="transform scale-70 object-none -my-1.5 -mt-0 opacity-40 hover:opacity-70 cursor-pointer rounded-2xl"
              draggable="false"
              onClick={(event) => {
                classSelectHandler(className as ClassName);
                styleSelectedImage(event.target as HTMLElement);
              }}
            ></img>
          );
        })}
      </div>
      <div className="flex flex-row flex-nowrap content-center justify-center text-gray-50 select-none">
        {mecList.map((mecName) => {
          return (
            <img
              key={mecName}
              id={mecName}
              src={`${process.env.PUBLIC_URL}/${MecImage[mecName as MecName]}`}
              alt={mecName}
              className="transform scale-70 object-none -my-1.5 -mb-4 opacity-40 hover:opacity-70 cursor-pointer rounded-2xl"
              draggable="false"
              onClick={(event) => {
                classSelectHandler(mecName as MecName);
                styleSelectedImage(event.target as HTMLElement);
              }}
            ></img>
          );
        })}
      </div>
    </div>
  );
};

export default ClassSelector;
