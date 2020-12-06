const pyramid = (n) => {
  for (var i = 1; i <= n; i++) {
    var space = " ".repeat(n - i);
    var star = "*".repeat(i * 2 - 1);
    console.log(`${space}${star}${space}`);
  }
};

pyramid(5);
