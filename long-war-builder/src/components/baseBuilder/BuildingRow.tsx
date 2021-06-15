import BuildingCell from './BuildingCell';

interface BuildingRowProps {
  buildings: Array<string>;
}

const BuildingRow = ({ buildings }: BuildingRowProps): JSX.Element => {
  return (
    <tr>
      {buildings.map((building, buildingIndex) => {
        return <BuildingCell key={buildingIndex} building={building} />;
      })}
    </tr>
  );
};

export default BuildingRow;
