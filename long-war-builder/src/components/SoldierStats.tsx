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
      <p>Health: {health}</p>
      <p>Mobility: {mobility}</p>
      <p>Will: {will}</p>
      <p>Aim: {aim}</p>
    </div>
  );
};

export default SoldierStats;
