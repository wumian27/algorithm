// 爱吃香蕉的珂珂
// 然后这一个小时之内不会再吃更多的香蕉 （用向上取整）

// 珂珂喜欢吃香蕉。这里有 N 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 H 小时后回来。

// 珂珂可以决定她吃香蕉的速度 K （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 K 根。如果这堆香蕉少于 K 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。

// 珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。

// 返回她可以在 H 小时内吃掉所有香蕉的最小速度 K（K 为整数）。

// 思路

// 题目要求我们找到珂珂在规定时间内，吃完香蕉的最小速度K。我们要如何确定K的取值范围呢？
// 显然，珂珂吃香蕉的最小速度应该是1，而最快则是最大堆香蕉的数量，再快也没有意义了，即K的取值范围是[1, maxPile]
// 那接下来，符合直觉的做法，在这个范围内，从1开始逐一尝试，看K取哪个值得时候珂珂正好能在规定时间内吃完香蕉。这样线性查找的时间复杂度是O(N) N等于maxPile
// 不过， 因为1~maxPile是连续递增的，要在一个有序的范围内查找一个值的话，很容易就想到了二分查找。

//  在范围[1~maxPile]中使用二分查找寻找最小速度K；
//  如果当前速度不够珂珂吃完香蕉，左指针友移，继续寻找
//  如果当前速度足够珂珂吃完香蕉，记录当前速度，然后右指针左移，继续寻找是否存在满足条件的更小速度

const minEatingSpeed = (piles, H) => {
    let min = 1;
    let max = Math.max(...piles);
    let res;
    const isPossible = (piles, H, speed) => {
        let time = 0;
        piles.forEach((item) => {
            time += Math.ceil(item / speed);
        });
        return time <= H;
    };
    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        if (isPossible(piles, H, mid)) {
            max = mid - 1;
            res = mid;
        } else {
            min = mid + 1;
        }
    }
    return res
};
