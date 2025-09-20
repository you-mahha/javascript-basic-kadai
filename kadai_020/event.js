// ボタンとテキストを取得
const button = document.getElementById('btn');
const message = document.getElementById('text');

// 「ボタン」をクリックされたときの処理内容
button.addEventListener("click", () => {
  message.textContent = "ボタンをクリックしました";
});