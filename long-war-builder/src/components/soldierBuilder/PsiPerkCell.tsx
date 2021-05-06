import { useContext } from 'react';
import { context, StateInterface, TypeEnums } from '../../context';
import { PsiPerkInterface } from '../../types/interfaces/PsiInterfaces';

interface PsiPerkCellProps {
  psiPerk: PsiPerkInterface;
  psiRankIndex: number;
  psiPerkIndex: number;
}

const PsiPerkCell = ({ psiPerk, psiRankIndex, psiPerkIndex }: PsiPerkCellProps): JSX.Element => {
  //@ts-expect-error 2461
  const [state, dispatch] = useContext(context);
  const { currentPsi } = state as StateInterface;

  const selectPsiPerkHandler = () => {
    let updatedPsiBuild;
    if (typeof currentPsi == 'undefined') {
      updatedPsiBuild = [undefined, undefined, undefined, undefined, undefined, undefined];
    } else {
      updatedPsiBuild = [...(currentPsi as Array<number | undefined>)];
    }
    updatedPsiBuild[psiRankIndex] = updatedPsiBuild[psiRankIndex] == psiPerkIndex ? undefined : psiPerkIndex;
    dispatch({ type: TypeEnums.changeCurrentPsi, payload: updatedPsiBuild });
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
        className="transform scale-56 object-none mx-auto -mb-2"
      ></img>
      <h5 className="text-sm">{psiPerk.perk}</h5>
      <p className="text-xs">{psiPerk.description}</p>
    </td>
  );
};

export default PsiPerkCell;
