// 在老式手机上，用户通过数字键盘输入，手机将提供与这些数字相匹配的单词列表。每个数字映射到0至4个字母。给定一个数字序列，实现一个算法来返回匹配单词的列表。你会得到一张含有有效单词的列表。映射如下图所示：

// 输入: num = "8733", words = ["tree", "used"]
// 输出: ["tree", "used"]

// 顺序一一对应

const getValidT9Words = (num, words) => {
    const map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    };
    let res = words.filter(word => {
        for(let i = 0; i < num.length; i ++) {
            if(!map[num[i]].includes(word[i])) return false;
        }
        return true;
    })

    return res;
};
