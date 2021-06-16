enum DecodeClassEnum {
  'a' = 'Assault',
  'A' = 'Marauder',

  'i' = 'Infantry',
  'I' = 'Valkyrie',

  'r' = 'Rocketeer',
  'R' = 'Archer',

  'g' = 'Gunner',
  'G' = 'Goliath',

  's' = 'Sniper',
  'S' = 'Jaeger',

  'p' = 'Scout',
  'P' = 'Pathfinder',

  'm' = 'Medic',
  'M' = 'Guardian',

  'e' = 'Engineer',
  'E' = 'Shogun',
}

enum EncodeClassEnum {
  'Assault' = 'a',
  'Marauder' = 'A',

  'Infantry' = 'i',
  'Valkyrie' = 'I',

  'Rocketeer' = 'r',
  'Archer' = 'R',

  'Gunner' = 'g',
  'Goliath' = 'G',

  'Sniper' = 's',
  'Jaeger' = 'S',

  'Scout' = 'p',
  'Pathfinder' = 'P',

  'Medic' = 'm',
  'Guardian' = 'M',

  'Engineer' = 'e',
  'Shogun' = 'E',
}

enum EncodeBaseEnum {
  'accessLift' = 'a',
  'alienContainment' = 'b',
  'eleriumGenerator' = 'c',
  'empty' = 'd',
  'fissionGenerator' = 'e',
  'foundry' = 'f',
  'geneticsLab' = 'g',
  'gollopChamber' = 'h',
  'hyperwaveRelay' = 'i',
  'laboratory' = 'j',
  'officerTrainingSchool' = 'k',
  'psionicLab' = 'l',
  'repairBay' = 'm',
  'satelliteNexus' = 'n',
  'satelliteUplink' = 'o',
  'thermoGenerator' = 'p',
  'workshop' = 'q',
}

enum DecodeBaseEnum {
  'a' = 'accessLift',
  'b' = 'alienContainment',
  'c' = 'eleriumGenerator',
  'd' = 'empty',
  'e' = 'fissionGenerator',
  'f' = 'foundry',
  'g' = 'geneticsLab',
  'h' = 'gollopChamber',
  'i' = 'hyperwaveRelay',
  'j' = 'laboratory',
  'k' = 'officerTrainingSchool',
  'l' = 'psionicLab',
  'm' = 'repairBay',
  'n' = 'satelliteNexus',
  'o' = 'satelliteUplink',
  'p' = 'thermoGenerator',
  'q' = 'workshop',
}

export { EncodeClassEnum, DecodeClassEnum, EncodeBaseEnum, DecodeBaseEnum };
