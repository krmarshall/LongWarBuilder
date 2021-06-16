import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { baseContext, BaseContextTypeEnums, BaseStateInterface } from '../../context/baseContext';
import facilities from '../../data/facilities';

const StructureSelector = (): JSX.Element => {
  const [filterFacilities, setFilterFacilities] = useState('');
  const facilityKeys = Object.keys(facilities);
  // Remove the access lift from the list
  facilityKeys.splice(0, 1);
  const [facilityKeysFiltered, setFacilityKeysFiltered] = useState(Object.keys(facilities));

  // @ts-expect-error 2461
  const [baseState, baseDispatch] = useContext(baseContext);
  const { buildings, selectedCellY, selectedCellX } = baseState as BaseStateInterface;

  useEffect(() => {
    if (filterFacilities.trim() === '') {
      setFacilityKeysFiltered(facilityKeys);
    } else {
      const filteredKeys = facilityKeys.filter((key) => {
        if (key.toLowerCase().includes(filterFacilities.toLowerCase())) {
          return key;
        }
      });
      setFacilityKeysFiltered(filteredKeys);
    }
  }, [filterFacilities]);

  const horizontalScroll = (event: React.WheelEvent) => {
    const container = document.getElementById('horScrollContainer');
    let containerScrollPosition = container?.scrollLeft;
    if (!containerScrollPosition) {
      containerScrollPosition = 0;
    }
    container?.scrollTo({
      top: 0,
      left: containerScrollPosition + event.deltaY,
    });
  };

  const onBuildingClick = (key: string) => {
    const updatedBuildingGrid = JSON.parse(JSON.stringify(buildings));
    updatedBuildingGrid[selectedCellY][selectedCellX] = key;
    baseDispatch({ type: BaseContextTypeEnums.changeBuildings, payload: updatedBuildingGrid });
  };

  return (
    <div className="m-4 mt-1.5 p-2 bg-darkGray opacity-100 rounded">
      <input
        type="text"
        value={filterFacilities}
        onChange={(event) => {
          setFilterFacilities(event.target.value);
        }}
        className="mb-2 p-1 text-gray-200 bg-lighterGray rounded placeholder-gray-400 pl-1 focus:outline-none"
        placeholder="Filter"
      />
      <ul
        className="flex flex-row flex-nowrap overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-scrollbarGray rounded-lg"
        onWheel={(event) => {
          horizontalScroll(event);
        }}
        id="horScrollContainer"
      >
        {facilityKeysFiltered.map((key) => {
          const facility = facilities[key];
          return (
            <li
              key={key}
              className="flex-none mb-2 mx-0.5"
              onClick={() => {
                onBuildingClick(key);
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/${facility.img}`}
                alt={key}
                className="h-20 opacity-80 hover:opacity-100 cursor-pointer rounded-lg"
                draggable="false"
              ></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StructureSelector;
