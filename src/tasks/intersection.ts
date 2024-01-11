function intersection(nums1: number[], nums2: number[]): number[] {
  return nums1.filter((num) => nums2.includes(num));
}
