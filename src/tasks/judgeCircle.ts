function judgeCircle(moves: string): boolean {
  let map = new Map<string, number>();

  for (let i = 0; i < moves.length; i++) {
    map.set(moves[i], (map.get(moves[i]) || 0) + 1);
  }

  return map.get("U") === map.get("D") && map.get("R") === map.get("L");
}
