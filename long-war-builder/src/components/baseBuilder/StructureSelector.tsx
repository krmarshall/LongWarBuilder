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
  const { selectedFacility } = baseState as BaseStateInterface;

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
    baseDispatch({ type: BaseContextTypeEnums.selectFacility, payload: key });
  };

  return (
    <div className="m-4 mt-1.5 p-2 bg-darkGray opacity-100 rounded flex flex-col">
      <h3 className="text-xl text-gray-50 text-center m-auto">Facility Selector</h3>
      <div className="justify-center content-center m-auto mt-2">
        <input
          type="text"
          value={filterFacilities}
          onChange={(event) => {
            setFilterFacilities(event.target.value);
          }}
          className="mb-2 p-1 text-gray-200 bg-lighterGray rounded placeholder-gray-400 pl-1 focus:outline-none"
          placeholder="Filter"
        />
        <p
          className="inline-block text-gray-300 cursor-pointer"
          onClick={() => {
            setFilterFacilities('');
          }}
        >
          &nbsp;X
        </p>
      </div>

      <ul
        className="flex flex-row flex-nowrap overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-scrollbarGray rounded-lg"
        onWheel={(event) => {
          horizontalScroll(event);
        }}
        id="horScrollContainer"
      >
        {facilityKeysFiltered.map((key) => {
          const facility = facilities[key];
          let className = '';
          if (key === selectedFacility) {
            className = 'h-20 opacity-100 cursor-pointer rounded-lg border border-gray-100';
          } else {
            className = 'h-20 opacity-60 hover:opacity-80 cursor-pointer rounded-lg';
          }
          return (
            <li
              key={key}
              className="flex-none mb-2 mx-0.5 py-1"
              onClick={() => {
                onBuildingClick(key);
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/${facility.img}`}
                alt={key}
                className={className}
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
