// 数组arr是[0, 1, ..., arr.length - 1]的一种排列，我们将这个数组分割成几个“块”，并将这些块分别进行排序。之后再连接起来，使得连接的结果和按升序排序后的原数组相同。

// 我们最多能将数组分成多少块？

// 示例 1:

// 输入: arr = [4,3,2,1,0]
// 输出: 1
// 解释:
// 将数组分成2块或者更多块，都无法得到所需的结果。
// 例如，分成 [4, 3], [2, 1, 0] 的结果是 [3, 4, 0, 1, 2]，这不是有序的数组。

// if (arr.length == 0) return 0
// let counter = 0, max = arr[0]
// for (let i = 0; i < arr.length ; ++i){
//     if (arr[i] > max) max = arr[i]
//     if (max == i) counter++
// }
// return counter

// 思路
// 选择从头开始某个区域的最大值，与不断递增的左边相等
// 由于数组元素的特殊性，他的范围在 0~ arr.length -1的一种排列
// 可以推导出分隔后的块中最大值 === 当前块的最右边元素下标
// 能够分隔成的块的个数 == 满足上述关系的最大值得个数

var maxChunksToSorted = function (arr) {
	if (arr.length === 0) return 0;
	let count = 0;
	let max = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) max = arr[i];
		if (max === i) count++;
	}

	return count;
};
