// 學習使用 Jest 來幫程式做測試
// 這個檔案會用來測試 flatten.js 的回傳值是否符合預期

const { test, expect } = require('@jest/globals');
const flatten = require('./flatten');

console.log(flatten([1,2,[3,[4]]]))

test('壓平巢狀陣列', () => {
    expect(flatten([1,2,[3,[4]]])).toEqual([1,2,3,4])
})