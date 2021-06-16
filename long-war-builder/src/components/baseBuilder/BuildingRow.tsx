import BuildingCell from './BuildingCell';

interface BuildingRowProps {
  buildings: Array<string>;
  yIndex: number;
}

const BuildingRow = ({ buildings, yIndex }: BuildingRowProps): JSX.Element => {
  return (
    <tr>
      {buildings.map((building, xIndex) => {
        return <BuildingCell key={xIndex} building={building} yIndex={yIndex} xIndex={xIndex} />;
      })}
    </tr>
  );
};

export default BuildingRow;
