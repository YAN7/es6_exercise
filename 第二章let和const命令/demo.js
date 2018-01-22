let arr = [];
for (let i = 0; i < 5; i++) {
  arr[i] = function () {
    console.log(i);
  }
}

arr[2](); // 2 如果换成2，则输出5