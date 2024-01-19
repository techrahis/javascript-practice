// for loop iteration

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}

/* output:
 *
 **
 ***
 ****
 *****
 */

// break and continue

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

/* output:
0
1
2
3
4
*/

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

/* output:
0
1
2
3
4
6
7
8
9
*/
