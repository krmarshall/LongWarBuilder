const missionTypes = {
  Scout: {
    altitude: 'Low',
    followUp: 'Hunt / Preventable',
    ufoPool: [
      {
        name: 'Scout',
        resource0: null,
        resource1: null,
        resource2: null,
      },
      {
        name: 'Raider',
        resource0: 50,
        resource1: 36,
        resource2: 20,
      },
      {
        name: 'Destroyer',
        resource0: 225,
        resource1: 162,
        resource2: 90,
      },
      {
        name: 'Battleship',
        resource0: 300,
        resource1: 216,
        resource2: 120,
      },
    ],
  },
  Hunt: {
    altitude: 'High',
    followUp: null,
    ufoPool: [
      {
        name: 'Fighter',
        resource0: null,
        resource1: null,
        resource2: null,
      },
      {
        name: 'Raider',
        resource0: 100,
        resource1: 72,
        resource2: 40,
      },
      {
        name: 'Destroyer',
        resource0: 100,
        resource1: 72,
        resource2: 40,
      },
      {
        name: 'Battleship',
        resource0: 225,
        resource1: 162,
        resource2: 90,
      },
    ],
  },
  Research: {
    altitude: 'NOE / Land',
    followUp: null,
    ufoPool: [
      {
        name: 'Scout',
        resource0: null,
        resource1: null,
        resource2: null,
      },
      {
        name: 'Raider',
        resource0: 75,
        resource1: 54,
        resource2: 30,
      },
      {
        name: 'Abductor',
        resource0: 125,
        resource1: 90,
        resource2: 50,
      },
      {
        name: 'Terror Ship',
        resource0: 250,
        resource1: 180,
        resource2: 100,
      },
      {
        name: 'Assault Carrier',
        resource0: 300,
        resource1: 216,
        resource2: 120,
      },
    ],
  },
  Harvest: {
    altitude: 'NOE / Land',
    followUp: null,
    ufoPool: [
      {
        name: 'Transport',
        resource0: null,
        resource1: null,
        resource2: null,
      },
      {
        name: 'Harvester',
        resource0: 75,
        resource1: null,
        resource2: null,
      },
      {
        name: 'Raider',
        resource0: 125,
        resource1: null,
        resource2: null,
      },
      {
        name: 'Scout',
        resource0: 225,
        resource1: null,
        resource2: null,
      },
    ],
  },
  Bomb: {
    altitude: 'NOE',
    followUp: null,
    ufoPool: [
      {
        name: 'Fighter',
        resource0: null,
        resource1: null,
        resource2: null,
      },
      {
        name: 'Destroyer',
        resource0: 75,
        resource1: 54,
        resource2: 30,
      },
      {
        name: 'Battleship',
        resource0: 175,
        resource1: 126,
        resource2: 70,
      },
    ],
  },
  Abduction: {
    altitude: 'NOE / Abduction Site',
    followUp: null,
    ufoPool: [
      {
        name: 'Abductor',
        resource0: null,
        resource1: null,
        resource2: null,
      },
    ],
  },
  Terrorize: {
    altitude: 'NOE',
    followUp: 'Terror Mission / Unpreventable',
    ufoPool: [
      {
        name: 'Terror Ship',
        resource0: null,
        resource1: null,
        resource2: null,
      },
    ],
  },
  Retaliation: {
    altitude: 'NOE?',
    followUp: 'Base Defense / Air Base Defense',
    ufoPool: [
      {
        name: 'Assault Carrier',
        resource0: null,
        resource1: null,
        resource2: null,
      },
      {
        name: 'Overseer',
        resource0: null,
        resource1: null,
        resource2: null,
      },
    ],
  },
  Command: {
    altitude: 'Low',
    followUp: null,
    ufoPool: [
      {
        name: 'Overseer',
        resource0: null,
        resource1: null,
        resource2: null,
      },
    ],
  },
};

export default missionTypes;
