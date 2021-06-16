import { BaseContextTypeEnums, BaseStateInterface } from '../context/baseContext';
import { SoldierStateInterface, SoldierContextTypeEnums } from '../context/soldierContext';
import { bulkClassData } from '../data/classes';
import { ClassName, MecName } from '../types/enums/ClassEnums';
import { EncodeClassEnum, DecodeClassEnum, EncodeBaseEnum, DecodeBaseEnum } from '../types/enums/EncodingEnums';
import { FacilitiesEnum } from '../types/enums/FacilityEnums';

// Encoded string format [a-Z letter = Class][0-2 = Perk Index | 9 = undefined]*7[x = no psi | y = has psi][if psi 0-2 = Perk Index | 9 = undefined]*6
// See EncodingEnums for classes
// eg. a0129120y010299 = Assault with perks [0, 1, 2, undefined, 1, 2, 0] and psi [0, 1, 0, 2, undefined, undefined]
//     E2901201x = Shogun with perks [2, undefined, 0, 1, 2, 0, 1] no psi

const encodeBuildToString = (state: SoldierStateInterface): string => {
  const { selectedClass, currentBuild, currentPsi } = state;
  let encodedString = '';

  // Encode Class
  encodedString += EncodeClassEnum[selectedClass as ClassName | MecName];

  // Encode Perks
  for (let i = 0; i < currentBuild.length; i++) {
    encodedString += currentBuild[i] == undefined ? '9' : currentBuild[i];
  }

  // Encode Psi
  if (currentPsi == undefined) {
    encodedString += 'x';
  } else {
    // Check if the psi array is all undefined
    let emptyArray = true;
    for (let i = 0; i < currentPsi.length; i++) {
      if (currentPsi[i] != undefined) {
        emptyArray = false;
        break;
      }
    }
    if (emptyArray) {
      encodedString += 'x';
    } else {
      // If it isnt all undefined encode the psi perks
      encodedString += 'y';
      for (let i = 0; i < currentPsi.length; i++) {
        if (currentPsi[i] != undefined) {
          encodedString += currentPsi[i];
        } else {
          encodedString += '9';
        }
      }
    }
  }

  return encodedString;
};

const decodeBuildFromString = (encodedString: string, dispatch: CallableFunction): void => {
  // Decode Class
  //@ts-expect-error 7053
  const updateClass: ClassName | MecName = DecodeClassEnum[encodedString.slice(0, 1)];

  // Decode Perks
  const updatePerksString: Array<string> = Array.from(encodedString.slice(1, 8));
  const updatePerks: Array<number | undefined> = updatePerksString.map((perkNumber) => {
    return Number(perkNumber) == 9 ? undefined : Number(perkNumber);
  });

  // Decode Psi
  let updatePsi: Array<number | undefined> | undefined = undefined;
  const hasPsi = encodedString.slice(8, 9) == 'y' ? true : false;
  if (hasPsi) {
    const updatePsiString: Array<string> = Array.from(encodedString.slice(9, 15));
    updatePsi = updatePsiString.map((psiNumber) => {
      return Number(psiNumber) == 9 ? undefined : Number(psiNumber);
    });
  }

  dispatch({
    type: SoldierContextTypeEnums.loadUrlBuild,
    payload: {
      selectedClass: updateClass,
      classData: bulkClassData[updateClass],
      currentBuild: updatePerks,
      currentPsi: updatePsi,
    },
  });
};

const encodeBaseToString = (baseState: BaseStateInterface): string => {
  const { buildings } = baseState;
  let encodedString = '';

  for (let y = 0; y < buildings.length; y++) {
    for (let x = 0; x < buildings[y].length; x++) {
      encodedString += EncodeBaseEnum[buildings[y][x] as FacilitiesEnum];
    }
  }
  return encodedString;
};

const decodeBaseFromString = (encodedString: string, baseDispatch: CallableFunction): void => {
  const y0 = Array.from(encodedString.slice(0, 7));
  const y0Decoded = y0.map((buildingCode) => {
    // @ts-expect-error 7053
    return DecodeBaseEnum[buildingCode];
  });

  const y1 = Array.from(encodedString.slice(7, 14));
  const y1Decoded = y1.map((buildingCode) => {
    // @ts-expect-error 7053
    return DecodeBaseEnum[buildingCode];
  });

  const y2 = Array.from(encodedString.slice(14, 21));
  const y2Decoded = y2.map((buildingCode) => {
    // @ts-expect-error 7053
    return DecodeBaseEnum[buildingCode];
  });

  const y3 = Array.from(encodedString.slice(21, 28));
  const y3Decoded = y3.map((buildingCode) => {
    // @ts-expect-error 7053
    return DecodeBaseEnum[buildingCode];
  });

  const buildings = [y0Decoded, y1Decoded, y2Decoded, y3Decoded];

  baseDispatch({ type: BaseContextTypeEnums.changeBuildings, payload: buildings });
};

export { encodeBuildToString, decodeBuildFromString, encodeBaseToString, decodeBaseFromString };
