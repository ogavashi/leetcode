function findRelativeRanks(score: number[]): string[] {
  const dummy = score.slice();

  const sorted = dummy.sort((a, b) => b - a);

  return score.map((score) => {
    const place = sorted.indexOf(score) + 1;

    switch (place) {
      case 1:
        return "Gold Medal";
      case 2:
        return "Silver Medal";
      case 3:
        return "Bronze Medal";
      default:
        return String(place);
    }
  });
}
