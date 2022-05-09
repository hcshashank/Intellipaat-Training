document.querySelector(".grand-parent").addEventListener(
  "click",
  () => {
    console.log("grand parent click hua hai");
  },
  false
);
document.querySelector(".parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent click hua hai");
    e.stopPropagation()
    
    console.log(e.stopPropagation )
  },
  false
);

document.querySelector(".child").addEventListener(
  "click",
  () => {
    console.log("Child click hua hai");
  },
  true
  // hum child pr click kr rhe h but dekho only parent hi call hota 
//   hai or whi pr stop ho jata hai bcz e.stopPropagation method use hua hai
);
// BY DEFAULT EVENT BUBBLING HOTA HAI
// FALSE = EVENT BUBBLING
//TRUE = EVENT CAPTURING
//EVENT BUBBLING INSIDE TO OUTSIDE HOTA HAI
//EVENT CAPTURING OUTSIDE TO NSIDE HOTA HAI
//EVENT CAPTURING SBSE PHLE(PRIORITY BASE PR ) HOTA HAI 
// stopPropagation(), method in this is very use full
// stopPropagation() call krne ke liye event object pass krna hota hai
// and then e.stopPropagation(), ese hum call krke us bubbling ya capturing ko break krskte hai