let num = 8;

// 変数numの値が3と5の倍数の場合
  if (num % 15 == 0) {
  console.log('3と5の倍数です');
  }
// 変数numの値が5の倍数の場合
  else if (num % 5 == 0) {
  console.log('5の倍数です');
}
// 変数numの値が3の倍数の場合
  else if (num % 3 == 0) {
    console.log('3の倍数です');
  }  else { // それ以外の場合
    console.log(num);
}