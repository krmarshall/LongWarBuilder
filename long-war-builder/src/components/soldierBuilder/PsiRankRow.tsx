import { Fragment } from 'react';
import { PsiRankInterface } from '../../types/interfaces/PsiInterfaces';
import PsiPerkCell from './PsiPerkCell';

interface PsiRankRowProps {
  psiRank: PsiRankInterface;
  psiRankIndex: number;
}

const PsiRankRow = ({ psiRank, psiRankIndex }: PsiRankRowProps): JSX.Element => {
  return (
    <tr className="text-gray-50 divide-y divide-gray-600">
      <td className="text-center select-none">
        <img
          src={`${process.env.PUBLIC_URL}/img/ranks/psi.png`}
          alt="psiIcon"
          className="transform scale-75 object-none mx-auto -mb-1.5"
          draggable="false"
        ></img>
        <p className="text-sm">{psiRank.name}</p>
      </td>
      {psiRank.perkProgression.length == 3 &&
        psiRank.perkProgression.map((psiPerk, psiPerkIndex) => {
          return (
            <PsiPerkCell key={psiPerk.perk} psiPerk={psiPerk} psiRankIndex={psiRankIndex} psiPerkIndex={psiPerkIndex} />
          );
        })}
      {psiRank.perkProgression.length == 2 && (
        <Fragment>
          <PsiPerkCell psiPerk={psiRank.perkProgression[0]} psiRankIndex={psiRankIndex} psiPerkIndex={0} />
          <td></td>
          <PsiPerkCell psiPerk={psiRank.perkProgression[1]} psiRankIndex={psiRankIndex} psiPerkIndex={1} />
        </Fragment>
      )}
      {psiRank.perkProgression.length == 1 && (
        <Fragment>
          <td></td>
          <PsiPerkCell psiPerk={psiRank.perkProgression[0]} psiRankIndex={psiRankIndex} psiPerkIndex={0} />
          <td></td>
        </Fragment>
      )}
    </tr>
  );
};

export default PsiRankRow;
