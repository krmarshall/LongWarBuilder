enum PsiPerkName {
  'regenBiofield' = 'Regen Biofield',
  'neuralFeedback' = 'Neural Feedback',
  'mindfray' = 'Mindfray',
  'distortionField' = 'Distortion Field',
  'psiInspiration' = 'Psi Inspiration',
  'psiPanic' = 'Psi Panic',
  'mindMerge' = 'Mind Merge',
  'psychokineticStrike' = 'Psychokinetic Strike',
  'pyrokinesis' = 'Pyrokinesis',
  'telekineticField' = 'Telekinetic Field',
  'mindControl' = 'Mind Control',
  'rift' = 'Rift',
}

enum PsiPerkImage {
  'regenBiofield' = 'img/perks/psi/regenBiofield.png',
  'neuralFeedback' = 'img/perks/psi/neuralFeedback.png',
  'mindfray' = 'img/perks/psi/mindfray.png',
  'distortionField' = 'img/perks/psi/distortionField.png',
  'psiInspiration' = 'img/perks/psi/psiInspiration.png',
  'psiPanic' = 'img/perks/psi/psiPanic.png',
  'mindMerge' = 'img/perks/psi/mindMerge.png',
  'psychokineticStrike' = 'img/perks/psi/psychokineticStrike.png',
  'pyrokinesis' = 'img/perks/psi/pyrokinesis.png',
  'telekineticField' = 'img/perks/psi/telekineticField.png',
  'mindControl' = 'img/perks/psi/mindControl.png',
  'rift' = 'img/perks/psi/rift.png',
}

enum PsiPerkDescription {
  'regenBiofield' = 'Nearby allies are healed for 1 health each turn, and has a 100% chance to remove acid effects (after b15f2). This does not repair damage to body armor or other hp-granting items. Imposes +24 hours postmission fatigue for psi soldiers. (Passive ability)',
  'neuralFeedback' = `Causes damage to psi attackers and puts all of their psi attacks on cooldown. Does not reduce the attacks' chance of success. Protects the psion and nearby allies who pass a will check. Imposes +24 hours fatigue after missions.`,
  'mindfray' = 'Causes the target to lose grip on reality, causing -25 aim/stack, -25 will/stack, a reduced area-of-effect attack range, reduced mobility, and doing one base damage. Robotic units are immune. Lasts 3 turns. 2 turn cooldown. Imposes +24 hours fatigue after missions.',
  'distortionField' = 'Nearby allies in cover receive +10 Defense. Imposes +6 hours postmission fatigue for psi soldiers. (Passive ability)',
  'psiInspiration' = 'Removes Mindfray and panic from all allies within 3 tiles, and strengthen their Will by +30 for 3 turns, 4 turn cooldown. Imposes +6 hours fatigue after missions.',
  'psiPanic' = `Cause target to panic on its following turn, if the target's Will is overcome. The duration is (caster Will / 50) turns; fractional results have a chance to be rounded up, the chance is proportional to the distance to the next integer. Robotic enemies are immune, 2 turn cooldown. Imposes +6 hours fatigue after missions.`,
  'mindMerge' = 'Merge minds with the target, granting the target +25% critical chance, bonus will, and temporary health (for aliens) or damage reduction (for humans: DR=caster_will/60). Imposes +6 hours postmission fatigue for psi soldiers.',
  'psychokineticStrike' = 'Project a bolt of pure psi force that destroys cover but does not harm units. 4 turn cooldown. Imposes 12 hours additional post-mission fatigue.',
  'pyrokinesis' = 'Ignite fires at the target location. Does not cause injuries. Imposes +12 hours postmission fatigue for psi soldiers.',
  'telekineticField' = 'Create an immobile telekinetic field that lasts through the enemy turn. The field distorts and deflects incoming attacks, granting +40 Defense to allies within the field, 4 turn cooldown. Imposes +12 hours fatigue after missions.',
  'mindControl' = 'Difficult psi technique that, if successful, grants control of the target for 3 turns. Does not work on robotic enemies. 5 turn cooldown. Imposes +12 hours fatigue after missions.',
  'rift' = 'Devastate an area with a storm of psi energy. The rift does more damage against targets with low Will, and reduced damage against targets with high Will. 4 turn cooldown. Requires special armor designed for psionic beings. Imposes +12 hours fatigue after missions.',
}

enum PsiRankName {
  'awakened' = 'Awakened',
  'sensitive' = 'Sensitive',
  'talent' = 'Talent',
  'adept' = 'Adept',
  'psion' = 'Psion',
  'master' = 'Master',
}

export { PsiPerkName, PsiPerkImage, PsiPerkDescription, PsiRankName };
