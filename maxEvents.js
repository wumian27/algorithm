// 给你一个数组 events，其中 events[i] = [startDayi, endDayi] ，表示会议 i 开始于 startDayi ，结束于 endDayi 。

// 你可以在满足 startDayi <= d <= endDayi 中的任意一天 d 参加会议 i 。注意，一天只能参加一个会议。

// 请你返回你可以参加的 最大 会议数目。

//  

// 会议参加一天即可，不需要参加完 ？？？？？？？？？

// 输入：events = [[1,2],[2,3],[3,4]]
// 输出：3
// 解释：你可以参加所有的三个会议。
// 安排会议的一种方案如上图。
// 第 1 天参加第一个会议。
// 第 2 天参加第二个会议。
// 第 3 天参加第三个会议。

// 输入：events= [[1,2],[2,3],[3,4],[1,2]]
// [1,2][1,2][2,3][3,4]
// 输出：4
// 输入：events = [[1,4],[4,4],[2,2],[3,4],[1,1]]
// 输出：4
// 输入：events = [[1,100000]]
// 输出：1

// 贪心算法
// 1.把所有会议按照结束时间排序，我们优先参加早结束的会议
// 2.由于一天只能参加一个会议， 所以使用一个哈希记录我们使用过的天数
// 3.参加每个会议是，优先使用比较早的天数来参加

const maxEvents = (events) => {
    events.sort((a,b) => a[1] - b[1]);
    const hash = [];
    let count = 0;
    for(let i = 0; i < events.length; i ++) {
        const [start, end] = events[i];
        for(let j = start; j <= end; j ++) {
            if(hash[j] === undefined) {
                hash[j] = 1;
                count ++;
                break;
            }
        }
    }

    return count;
}
