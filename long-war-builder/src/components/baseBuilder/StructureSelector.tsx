import { useEffect, useState } from 'react';
import facilities from '../../data/facilities';

const StructureSelector = (): JSX.Element => {
  const [filterFacilities, setFilterFacilities] = useState('');
  const facilityKeys = Object.keys(facilities);
  const [facilityKeysFiltered, setFacilityKeysFiltered] = useState(Object.keys(facilities));

  const horizontalScroll = (event: WheelEvent) => {
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
  return (
    <div
      className="m-4 mt-1.5 p-2 bg-darkGray opacity-100 rounded"
      // style={{ height: '20%' }}
    >
      <input
        value={filterFacilities}
        onChange={(event) => {
          setFilterFacilities(event.target.value);
        }}
        className="mb-2 text-gray-300 bg-lightGray rounded placeholder-gray-500 pl-1 focus:outline-none"
        placeholder="Filter"
      />
      <ul
        className="flex flex-row flex-nowrap overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-scrollbarGray rounded-lg"
        onWheel={(event) => {
          horizontalScroll((event as unknown) as WheelEvent);
        }}
        id="horScrollContainer"
      >
        {facilityKeysFiltered.map((key) => {
          const facility = facilities[key];
          return (
            <li key={key} className="flex-none mb-2">
              <img src={facility.img} alt={key} className="h-24 opacity-60 hover:opacity-80 cursor-pointer"></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StructureSelector;
