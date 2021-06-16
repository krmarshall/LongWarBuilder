import { SoldierStateInterface, SoldierContextTypeEnums } from '../context/soldierContext';
import { bulkClassData } from '../data/classes';
import { ClassName, MecName } from '../types/enums/ClassEnums';
import { EncodeClassEnum, DecodeClassEnum } from '../types/enums/EncodingEnums';

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

  console.log(encodedString);
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

export { encodeBuildToString, decodeBuildFromString };
