import { useState } from 'react';
import { ClassImage } from '../types/enums/ClassEnums';

interface ClassSelectorProps {
  setClassName(value: string): void;
}

const ClassSelector = (props: ClassSelectorProps): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<HTMLElement>();
  const imageClasses = 'transform scale-75 object-none mx-0.5 -my-2 opacity-40';

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
      <img
        src={`${process.env.PUBLIC_URL}/${ClassImage.assault}`}
        alt="assault"
        className={imageClasses}
        onClick={(event) => {
          props.setClassName('assault');
          styleSelectedImage(event);
        }}
      ></img>
      <img
        src={`${process.env.PUBLIC_URL}/${ClassImage.infantry}`}
        alt="infantry"
        className={imageClasses}
        onClick={(event) => {
          props.setClassName('infantry');
          styleSelectedImage(event);
        }}
      ></img>
      <img
        src={`${process.env.PUBLIC_URL}/${ClassImage.rocketeer}`}
        alt="rocketeer"
        className={imageClasses}
        onClick={(event) => {
          props.setClassName('rocketeer');
          styleSelectedImage(event);
        }}
      ></img>
      <img
        src={`${process.env.PUBLIC_URL}/${ClassImage.gunner}`}
        alt="gunner"
        className={imageClasses}
        onClick={(event) => {
          props.setClassName('gunner');
          styleSelectedImage(event);
        }}
      ></img>
      <img
        src={`${process.env.PUBLIC_URL}/${ClassImage.sniper}`}
        alt="sniper"
        className={imageClasses}
        onClick={(event) => {
          props.setClassName('sniper');
          styleSelectedImage(event);
        }}
      ></img>
      <img
        src={`${process.env.PUBLIC_URL}/${ClassImage.scout}`}
        alt="scout"
        className={imageClasses}
        onClick={(event) => {
          props.setClassName('scout');
          styleSelectedImage(event);
        }}
      ></img>
      <img
        src={`${process.env.PUBLIC_URL}/${ClassImage.medic}`}
        alt="medic"
        className={imageClasses}
        onClick={(event) => {
          props.setClassName('medic');
          styleSelectedImage(event);
        }}
      ></img>
      <img
        src={`${process.env.PUBLIC_URL}/${ClassImage.engineer}`}
        alt="engineer"
        className={imageClasses}
        onClick={(event) => {
          props.setClassName('engineer');
          styleSelectedImage(event);
        }}
      ></img>
    </div>
  );
};

export default ClassSelector;
