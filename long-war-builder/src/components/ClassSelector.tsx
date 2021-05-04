import { useContext, useState } from 'react';
import { ClassImage, ClassName } from '../types/enums/ClassEnums';
import { context, TypeEnums } from '../context';
import { bioClasses } from '../data/classes';

const ClassSelector = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<HTMLElement>();

  //@ts-expect-error 2461
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, dispatch] = useContext(context);

  const classList = ['Assault', 'Infantry', 'Rocketeer', 'Gunner', 'Sniper', 'Scout', 'Medic', 'Engineer'];

  const styleSelectedImage = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const element = event.target as HTMLElement;
    if (selectedImage == element) {
      return;
    }

    element.classList.remove('opacity-40');
    element.classList.add('opacity-100');

    selectedImage?.classList.remove('opacity-100');
    selectedImage?.classList.add('opacity-40');

    setSelectedImage(element);
  };

  return (
    <div className="flex flex-row flex-nowrap content-center justify-center text-gray-50">
      {classList.map((classLw) => {
        return (
          <img
            key={classLw}
            src={`${process.env.PUBLIC_URL}/${ClassImage[classLw as ClassName]}`}
            alt={classLw}
            className="transform scale-75 object-none mx-0.5 -my-2 opacity-40 shadow"
            draggable="false"
            onClick={(event) => {
              dispatch({
                type: TypeEnums.changeClass,
                payload: { selectedClass: classLw, classData: bioClasses[classLw as ClassName] },
              });
              styleSelectedImage(event);
            }}
          ></img>
        );
      })}
    </div>
  );
};

export default ClassSelector;
