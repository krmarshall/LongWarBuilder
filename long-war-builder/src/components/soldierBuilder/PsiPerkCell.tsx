import { useContext } from 'react';
import { soldierContext, SoldierStateInterface, SoldierContextTypeEnums } from '../../context/soldierContext';
import { PsiPerkInterface } from '../../types/interfaces/PsiInterfaces';

interface PsiPerkCellProps {
  psiPerk: PsiPerkInterface;
  psiRankIndex: number;
  psiPerkIndex: number;
}

const PsiPerkCell = ({ psiPerk, psiRankIndex, psiPerkIndex }: PsiPerkCellProps): JSX.Element => {
  //@ts-expect-error 2461
  const [state, dispatch] = useContext(soldierContext);
  const { currentPsi } = state as SoldierStateInterface;

  const selectPsiPerkHandler = () => {
    let updatedPsiBuild;
    if (typeof currentPsi == 'undefined') {
      updatedPsiBuild = [undefined, undefined, undefined, undefined, undefined, undefined];
    } else {
      updatedPsiBuild = [...(currentPsi as Array<number | undefined>)];
    }
    updatedPsiBuild[psiRankIndex] = updatedPsiBuild[psiRankIndex] == psiPerkIndex ? undefined : psiPerkIndex;
    dispatch({ type: SoldierContextTypeEnums.changeCurrentPsi, payload: updatedPsiBuild });
  };
  return (
    <td
      data-selected=""
      className="text-center hover:bg-lightGray select-none cursor-pointer"
      onClick={selectPsiPerkHandler}
    >
      <img
        src={`${process.env.PUBLIC_URL}/${psiPerk.imgPath}`}
        alt={psiPerk.perk}
        className="transform scale-56 object-none mx-auto -mb-4 -mt-2"
        draggable="false"
      ></img>
      <h5 className="text-base">{psiPerk.perk}</h5>
      <p className="text-sm text-gray-300">{psiPerk.description}</p>
    </td>
  );
};

export default PsiPerkCell;
