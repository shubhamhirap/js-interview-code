var i;
var j;
var k;
var num = 5;

for (i = 1; i <= num; i++) {
  for (j = 1; j <= i; j++) document.write(j);
  for (k = num - i; k >= 1; k--) document.write("*");
  document.write("<br/>");
}
