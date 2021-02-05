// 123422 从前面到后面 进行比较前面的大 ，后面就变成9， 前面小，则继续
const  montoneIncreasingDigits =  function (num) {
    let arr =  `${num}`.split('');

    let pre = 0;
    let next = 1;
    while(next < arr.length) {

        // 三种情况
        // 1.当前面小后面的，两个指针继续
        if(arr[pre] < arr[next]) {
            // 相差一位
            pre = next;
            next ++;
            continue;
        }
        // 2.当前面的比较后面大，后面所以的数字变9999，前面的数减一

        if(arr[pre] > arr[next]) {
            arr[pre++]--;
            for(let i = pre; i < arr.length; i++) {
                arr[pre] = 9;
            }
            break;
        }
// 3.当两个数相等时候，前面的不动，后面自己++；相等的数，前面必定会减一
        if(arr[pre] === arr[next]) {
            next ++;
        }
    }

    return +arr.join('');
}

// 指针移动
