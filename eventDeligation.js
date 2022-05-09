document.querySelector("#form").addEventListener("keyup", (e)=>{
    console.log(e);
    if(e.target.dataset.uppercase != undefined){
        e.target.value = e.target.value.toUpperCase();
    }
})

// document.querySelector('#categary ').addEventListener('click', (e)=>{
//     console.log("me krishna hu")
//     console.log(e.target.id);
//     window.location.href ="/"+e.target.id
// })


// ****PROS OF EVENT DELIGATION*********

// 1) it save lots of memory
// 2) writing less code
// 3) dom manipulation insteed of attech lot individual eventlistener, here we attench only in parent evevnt listener

// ****PROS OF EVENT DELIGATION*********
// all the event are not bubble up  in herarckey some buble like blur focus resizingof window scrolling and there r lost of 
//