class TwoSumSolver {

    public twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const complement = target - (nums[i] ?? 0);
            const index = map.get(complement);

            if (index !== undefined) {
                return [index, i]; // return indices
            }

            map.set(nums[i] ?? 0, i);
        }

        return [-1, -1]; // no solution
    }
}

// Example usage
const solver = new TwoSumSolver();
const result = solver.twoSum([2, 7, 11, 15], 9);
console.log(result); // [0, 1]