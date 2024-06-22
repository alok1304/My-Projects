let string="";
let buttons=document.querySelectorAll(".button");

Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerText=="AC"){
            string="";
            document.querySelector(".input").value = string;
        }
        else if(e.target.innerText=='='){
            string=eval(string);
            document.querySelector(".input").value = string;
        }

        else{
        // console.log(e.target);
    
        if(e.target.innerText=='X'){
            string=string+'*';
        }
        else{
            string =string+e.target.innerText;
        }
        document.querySelector(".input").value = string;
        }
    })
})

