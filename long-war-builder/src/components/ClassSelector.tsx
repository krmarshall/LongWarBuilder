interface ClassSelectorProps {
  setClassName(value: string): void;
}

const ClassSelector = (props: ClassSelectorProps): JSX.Element => {
  return (
    <div className="flex flex-row flex-nowrap content-center justify-center text-gray-50">
      <div
        className="m-2"
        onClick={() => {
          props.setClassName('assault');
        }}
      >
        Assault
      </div>
      <div
        className="m-2"
        onClick={() => {
          props.setClassName('infantry');
        }}
      >
        Infantry
      </div>
      <div
        className="m-2"
        onClick={() => {
          props.setClassName('rocketeer');
        }}
      >
        Rocketeer
      </div>
      <div
        className="m-2"
        onClick={() => {
          props.setClassName('gunner');
        }}
      >
        Gunner
      </div>
      <div
        className="m-2"
        onClick={() => {
          props.setClassName('sniper');
        }}
      >
        Sniper
      </div>
      <div
        className="m-2"
        onClick={() => {
          props.setClassName('scout');
        }}
      >
        Scout
      </div>
      <div
        className="m-2"
        onClick={() => {
          props.setClassName('medic');
        }}
      >
        Medic
      </div>
      <div
        className="m-2"
        onClick={() => {
          props.setClassName('engineer');
        }}
      >
        Engineer
      </div>
    </div>
  );
};

export default ClassSelector;
