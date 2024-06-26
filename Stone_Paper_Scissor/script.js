let hands=document.querySelectorAll(".choice");

const genCompChoice=()=>{
    let arr=["stone","scissor","paper"]
    let ind=Math.floor(Math.random()*3)
    return arr[ind];
}

let list=document.querySelector(".b44")
let bb4=document.getElementById("bb4")

let cs=document.getElementById("cs")
let ys=document.getElementById("ys")



let YourScore=0;
let CompScore=0

Array.from(hands).forEach(c=>{
    c.addEventListener("click",(e)=>{
        let userchoice =c.getAttribute("id")
       // console.log("User choice",userchoice);
        let compchoice=genCompChoice();
       // console.log("computer choice",compchoice);

       if(userchoice===compchoice){
        console.log("Match Tie")
           list.innerHTML = "Match Tie"
           bb4.style.backgroundColor = "orange"
       }
       else{
       if(userchoice=="scissor"){
        if(compchoice=="paper"){
            console.log("user win")
            list.innerHTML = "You Win"
            bb4.style.backgroundColor = "green"
            YourScore++;
            ys.innerHTML=`${YourScore}`
        }
        if(compchoice=="stone"){
            console.log("computer win")
            list.innerHTML = "You Lose"
            bb4.style.backgroundColor = "red"
            CompScore++;
            cs.innerHTML=`${CompScore}`
        }

       }
       else if(userchoice=="paper"){
           if (compchoice == "stone") {
               console.log("user win")
               list.innerHTML = "You Win"
               bb4.style.backgroundColor = "green"
               YourScore++;
               ys.innerHTML = `${YourScore}`
           }
           if (compchoice == "scissor") {
               console.log("computer Win")
               list.innerHTML = "You Lose"
               bb4.style.backgroundColor = "red"
               CompScore++;
               cs.innerHTML = `${CompScore}`
           }
       }
       else{
           if (compchoice == "scissor") {
               console.log("user win")
               list.innerHTML = "You Win"
               bb4.style.backgroundColor = "green"
               YourScore++;
               ys.innerHTML = `${YourScore}`
           }
           if (compchoice == "paper") {
               console.log("computer Win")
               list.innerHTML = "You Lose"
               bb4.style.backgroundColor = "red"
               CompScore++;
               cs.innerHTML = `${CompScore}`
           }
       }
    }
    })
})