export function getLevelData(xp: number) {
  let level = 1;
  let xpForLevel = 0;
  let nextLevelXP = 100;

  while (xp >= nextLevelXP) {
    level++;
    xpForLevel = nextLevelXP;
    nextLevelXP += level * 100; // level-based XP requirement
  }

  return {
    level,
    currentXP: xp,
    xpForLevel,
    nextLevelXP,
  };
}
