const today = new Date();

const fullyear = today.getFullYear();

// 月は() + 1と入力
const month = today.getMonth() + 1;

const day = today.getDate();

// 年月日の表示のため、`${要素}単位`を追加入力
console.log(`${fullyear}年${month}月${day}日`);