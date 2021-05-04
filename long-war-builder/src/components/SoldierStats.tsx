import { useContext, useEffect } from 'react';
import { context, TypeEnums } from '../context';
import rookie from '../data/rookie';

const SoldierStats = (): JSX.Element => {
  //@ts-expect-error 2461
  const [state, dispatch] = useContext(context);
  const { health, mobility, will, aim } = state.stats;
  const { className } = state;

  useEffect(() => {
    const statUpdate = {
      health: rookie.health,
      mobility: rookie.mobility,
      will: rookie.will,
      aim: rookie.aim,
    };

    dispatch({ type: TypeEnums.changeStats, payload: statUpdate });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [className]);

  return (
    <div className="m-4 p-4 bg-darkGray rounded h-auto min-w-max justify-center text-gray-50 shadow-lg">
      <h3 className="text-xl text-center">Soldier Stats</h3>
      <div className="space-x-2">
        <img
          src={`${process.env.PUBLIC_URL}/img/stats/health.png`}
          alt="health"
          className="transform scale-100 object-none mx-auto inline-block"
        ></img>
        <p className="inline-block">Health: {health}</p>
      </div>

      <div className="space-x-2">
        <img
          src={`${process.env.PUBLIC_URL}/img/stats/mobility.png`}
          alt="mobility"
          className="transform scale-100 object-none mx-auto inline-block"
        ></img>
        <p className="inline-block">Mobility: {mobility}</p>
      </div>

      <div className="space-x-2">
        <img
          src={`${process.env.PUBLIC_URL}/img/stats/will.png`}
          alt="will"
          className="transform scale-100 object-none mx-auto inline-block"
        ></img>
        <p className="inline-block">Will: {will}</p>
      </div>

      <div className="space-x-2">
        <img
          src={`${process.env.PUBLIC_URL}/img/stats/aim.png`}
          alt="aim"
          className="transform scale-100 object-none mx-auto inline-block"
        ></img>
        <p className="inline-block">Aim: {aim}</p>
      </div>
    </div>
  );
};

export default SoldierStats;
