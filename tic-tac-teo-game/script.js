let newbotton = document.querySelector("#newbtn");
let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".winmsg");
let msgcontainer = document.querySelector(".msg-container");

let turnX = true;
const winslot =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];




const disableboxes=()=>{
    for(let boxe of boxes){
        boxe.disabled = true;
    }
};
 const Newgame =() =>{
    turnX=true;
    enableboxes();
    msgcontainer.classList.add("hide");
 };
const enableboxes=()=>{
    for(let boxe of boxes){
        boxe.disabled = false;
        boxe.innerText = "";
    }
};

const showwinner =(winner) =>{
      msg.innerText = `congratulation ,\n Winner is :-  ${winner}`;
     msgcontainer.classList.remove("hide");
    disableboxes();
};

boxes.forEach((element) => {
    element.addEventListener("click",() => {
        if(turnX === true){
            element.innerText = "X";
            turnX=false;
        }else{
            element.innerText = "O";
            turnX=true;
        }
        element.disabled = true;

        checkwinner();
    });
});

const checkwinner = () =>{
    for( let slot of winslot){
        let firstval=boxes[slot[0]].innerText;
        let secondval=boxes[slot[1]].innerText;
        let thirdval=boxes[slot[2]].innerText;

        if(firstval!="" && secondval!="" && thirdval!="" ){
            if(firstval===secondval && secondval===thirdval){
                console.log("winner",firstval);
               
                showwinner(firstval);
            }
        }
    }
};

newbotton.addEventListener("click",Newgame);