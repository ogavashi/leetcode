function distributeCandies(candyType: number[]): number {
  const typesNumber = new Set(candyType).size;
  const canEat = candyType.length / 2;

  return Math.min(canEat, typesNumber);
}
