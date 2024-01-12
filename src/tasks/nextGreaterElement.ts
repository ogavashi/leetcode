function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  return nums1.reduce((acc, cur) => {
    const foundIndex = nums2.findIndex((el) => el === cur);

    let nextGreater = -1;

    for (let i = foundIndex + 1; i < nums2.length; i++) {
      if (nums2[i] > cur) {
        nextGreater = nums2[i];
        break;
      }
    }

    return [...acc, nextGreater];
  }, [] as number[]);
}
