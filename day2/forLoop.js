for (let n = 1; n <= 15; n++) {
  if (n % 3==0 && n % 5 == 0) {
    console.log(n + " ", "3 or 5 dono se divide ho rha hai");
  } else if (n % 3 == 0) {
    console.log(n + "", "3 se complete divide ho ha hai");
  } else if (n % 5 == 0) {
    console.log(n + " ", "5 se complete divide hai");
  } else {
    console.log(n);
  }
}

//   for (let j = 0; ;j+=2) {
//       console.log(j);
//       if(j>10){
//           break;
//       }

//   };
// }
