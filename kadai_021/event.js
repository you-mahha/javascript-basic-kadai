// ボタンとテキストの取得
const button = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンをクリックしてからメッセージが変更になるまでの処理時間中
button.addEventListener("click", function() {
  text.textContent = "処理中です。少々お待ちください。";

// 2秒後に文字が変更する
setTimeout(function() {
  text.textContent = "ボタンをクリックしました"
}, 2000);
});
