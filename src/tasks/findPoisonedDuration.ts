export function findPoisonedDuration(timeSeries: number[], duration: number): number {
  if (timeSeries.length === 0) {
    return 0;
  }

  let totalPoisonTime = 0;

  for (let i = 1; i < timeSeries.length; i++) {
    const timeDiff = timeSeries[i] - timeSeries[i - 1];
    totalPoisonTime += Math.min(timeDiff, duration);
  }

  totalPoisonTime += duration;

  return totalPoisonTime;
}
