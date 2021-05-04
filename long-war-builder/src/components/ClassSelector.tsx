import { useContext, useLayoutEffect, useState } from 'react';
import { ClassImage, ClassName } from '../types/enums/ClassEnums';
import { context, TypeEnums } from '../context';
import { bioClasses } from '../data/classes';

const ClassSelector = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<HTMLElement>();

  //@ts-expect-error 2461
  const [state, dispatch] = useContext(context);

  const { selectedClass } = state;

  const classList = ['Assault', 'Infantry', 'Rocketeer', 'Gunner', 'Sniper', 'Scout', 'Medic', 'Engineer'];

  useLayoutEffect(() => {
    const element = document.getElementById(selectedClass);
    styleSelectedImage(element as HTMLElement);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedClass]);

  const styleSelectedImage = (element: HTMLElement) => {
    if (selectedImage == element) {
      return;
    }

    element.classList.remove('opacity-40');
    element.classList.add('opacity-100');

    selectedImage?.classList.remove('opacity-100');
    selectedImage?.classList.add('opacity-40');

    setSelectedImage(element);
  };

  const classSelectHandler = (classLw: ClassName) => {
    dispatch({
      type: TypeEnums.changeClass,
      payload: {
        selectedClass: classLw,
        classData: bioClasses[classLw],
        currentBuild: [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
      },
    });
  };

  return (
    <div className="flex flex-row flex-nowrap content-center justify-center text-gray-50">
      {classList.map((classLw) => {
        return (
          <img
            key={classLw}
            id={classLw}
            src={`${process.env.PUBLIC_URL}/${ClassImage[classLw as ClassName]}`}
            alt={classLw}
            className="transform scale-75 object-none mx-0.5 -my-2 opacity-40 shadow"
            draggable="false"
            onClick={(event) => {
              classSelectHandler(classLw as ClassName);
              styleSelectedImage(event.target as HTMLElement);
            }}
          ></img>
        );
      })}
    </div>
  );
};

export default ClassSelector;
