// 题目 能被2,3,5 整除的是 丑数 1也是丑数

// 思路：
// 如果这个数不能被2,3,5任意一个整除，就不是丑数，返回时false；
// 如果这个能被2,3,5其中一个整除，那么就需要继续检查，看这个数能否被除后的结果能否再次被2,3,5整除
// 如果当前的数字恰好等于1，这个数就是丑数，返回true

const isUgly = (num) => {
    if (num === 0) return false;
    if (num === 1) {
        return true;
    }
    if (num % 2 === 0) {
        return isUgly(num / 2);
    } else if (num % 3 === 0) {
        return isUgly(num / 3);
    } else if (num % 5 === 0) {
        return isUgly(num / 5);
    } else {
        return false;
    }
};

// 重复除，重复做
