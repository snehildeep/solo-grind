export function getLevelData(xp: number) {
  let level = 1;
  let xpForLevel = 0;
  let requiredXP = 100;

  while (xp >= requiredXP) {
    level++;
    xpForLevel = requiredXP;
    requiredXP += level * 100; // level-based XP requirement
  }

  return {
    level,
    currentXP: xp,
    xpForLevel,
    requiredXP,
  };
}
