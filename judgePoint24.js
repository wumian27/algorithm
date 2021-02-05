// 思路
// 游戏第一步，肯定是挑出两个数，然后算出一个数，替代这两个数。
// 然后在三个数中玩24点，再挑出两个数，算出一个数，代替他们
// 然后在两个数中玩24点，算出一个数，看它是否等于24


// 这就是有了递归的思路，每次递归都会挑出两个数，我们尝试挑出不同的两个数组合
// 1 挑出1,2，基于它，继续递归
// 2 挑出1,3，基于它，继续递归
// 3 挑出。。。。

// 即通过for循环，枚举所有的两数组合（需要for循环），展开不同选择所对应的递归分支
// 挑出的每一对数，我们。。。
// 1枚举出所有可能的运算操作---（对应不同的递归调用）
// 2逐个尝试每一种运算 ---（选择进入一个递归分支）
// 3当递归到只剩下一个数 ---（到达递归树的底部），看他是否等于24
//  如果等于24，结束当前递归，并且控制它不进入别的递归分支，整个结束掉
//  如果不等于24，离开错误分支，进入别的递归分支，尝试别的运算

//  剪枝小技巧，代码美观
//  当递归变量返回true，代表游戏成功，此时不用继续探索了，剩下的搜索分支全部砍掉，做么做到
//  1标识变量isValid初始化为false,默认会执行 || 后面的递归，代码如下
//  2一旦某个递归返回真， isValid 就变为真，由于 || 的短路特性，后面的递归不会执行
//  3所有的递归都这么写， isValid 就像一个开关，避免写很多判断

const judgePoint24 = (nums) => {

    if(nums.length === 1) {
        console.log(nums[0]);
       return Math.abs(nums[0] - 24) < 1e-9;
    }
    let isValid =  false;

    for(let i = 0; i < nums.length; i ++) {
        for(let j = i + 1; j < nums.length; j ++) {
            let num1 = nums[i];
            let num2 = nums[j];
            let newNums = [];
           
            for(let k = 0; k < nums.length; k ++) {
                if(k !== i && k !== j) {
                    newNums.push(nums[k])
                }
            }

            
            // 想加
            isValid =  isValid || judgePoint24([...newNums, num1 + num2]);
            isValid =  isValid || judgePoint24([...newNums, num1 - num2]);
            isValid = isValid || judgePoint24([...newNums, num2 - num1]);

            isValid = isValid || judgePoint24([...newNums, num1 * num2]);

            if(num1 !== 0) {
                isValid =  isValid || judgePoint24([...newNums, num2/num1])
            }
            if(num2 !== 0) {
                isValid = isValid  || judgePoint24([...newNums, num1 / num2])
            }

            if(isValid) {
                return true;
            }
        }
    }
}

console.log(judgePoint24([2,1,4,3]));

console.log(333);

// 组合重复做
