interface SoldierStatsProps {
  health: number;
  mobility: number;
  will: number;
  aim: number;
}

const SoldierStats = ({ health, mobility, will, aim }: SoldierStatsProps): JSX.Element => {
  return (
    <div className="m-4 p-4 bg-darkGray h-full min-w-max justify-center text-gray-50">
      <h3 className="text-xl">Soldier Stats</h3>
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
