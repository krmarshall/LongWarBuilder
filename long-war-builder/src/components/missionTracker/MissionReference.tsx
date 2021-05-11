import { useEffect, useState } from 'react';
import missionTypes from '../../data/missionTypes';
import { UfoInterface } from '../../types/interfaces/MissionInterfaces';

const MissionReference = (): JSX.Element => {
  const [missionKeys, setMissionKeys] = useState<Array<string>>([]);

  useEffect(() => {
    const keys = Object.keys(missionTypes);
    setMissionKeys(keys);
  }, []);
  return (
    <div className="flex flex-auto flex-nowrap justify-center content-center w-max text-gray-50 m-4 p-4 mt-1 pt-2 bg-darkGray opacity-100 rounded shadow-lg overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-scrollbarGray">
      <table className="table-fixed">
        <thead>
          <tr className="text-gray-50 text-lg text-center">
            <th>Mission Reference</th>
          </tr>
        </thead>
        <tbody id="missionTable">
          {missionKeys.map((key) => {
            const mission = missionTypes[key];
            return (
              <tr key={key} className="border-t border-b border-gray-400 border-opacity-80">
                <td className="py-4">
                  <h5 className="text-center font-bold">{key}</h5>
                  <p>Altitude: {mission.altitude}</p>
                  {mission.followUp && <p>Follow Up: {mission.followUp}</p>}
                  <ul>
                    {mission.ufoPool.map((ufo: UfoInterface) => {
                      if (ufo.resource2) {
                        return (
                          <li key={ufo.name}>
                            <p>
                              {ufo.name}: Resources {'>'} <span className="text-green-400">{ufo.resource0}</span>
                              {' / '}
                              <span className="text-yellow-300">{ufo.resource1}</span>
                              {' / '}
                              <span className="text-red-500">{ufo.resource2}</span>
                            </p>
                          </li>
                        );
                      } else if (ufo.resource0) {
                        return (
                          <li key={ufo.name}>
                            <p>
                              {ufo.name}: Resources {'>'} <span className="text-green-400">{ufo.resource0}</span>
                            </p>
                          </li>
                        );
                      } else {
                        return (
                          <li key={ufo.name}>
                            <p>{ufo.name}: Always in pool</p>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MissionReference;
