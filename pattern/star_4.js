var i;
var j;
var num = 5;

for (i = num; i >= 0; i--) {
  for (j = 1; j <= i; j++) document.write("*");
  document.write("<br/>");
}

for (i = 1; i <= num; i++) {
  for (j = 1; j <= i; j++) document.write("*");
  document.write("<br/>");
}
