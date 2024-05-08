let btn = document.querySelectorAll(".btn");//getting acess of button
let resetbtn = document.querySelector(".resetbutton");// getting acess of reset button
let msg = document.querySelector(".message");// getting the acess of paragraph
let newbutton = document.querySelector(".newbutton");
/* add blur and unblur in msg*/

let turnO = true;// setting the first player as O
const winningPaterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];// defining the winning conditions  

const buttonEnable = () => {
    for (let button of btn) {
        button.disabled = false;
        button.innerText = "";
    };
};

const resetgame = () => {
    turn0 = false;
    buttonEnable();
};

const newbtn = () => {                                                                                                                    
    buttonEnable();
}


msg.innerText = "Turn of O";
btn.forEach((btn) => {
    btn.addEventListener("click" , () => {
        if (turnO) {
            msg.innerText = "Turn of X";
            btn.innerText = "O";
            turnO = false;
        }
        else  {
            msg.innerText = "Turn of O";
            btn.innerText = "X";
            turnO = true;
        }
        btn.disabled = true;

        checkWinner();
        
    });
});

const buttonDisable = () => {
    for (let button of btn) {
        button.disabled = true;
    }
};

/*const showWinner = () => {
    buttonDisable();
} not working. why?
*/
const checkWinner = () => {
    for (patterns of winningPaterns) {
        let pos1 = btn[patterns[0]].innerText;
        let pos2 = btn[patterns[1]].innerText;
        let pos3 = btn[patterns[2]].innerText;

        if (pos1 != '' && pos2 != '' && pos3 != '') {
            if (pos1 === pos2 && pos2 === pos3) {
                msg.innerText = `Winner is ${pos1}`;
                buttonDisable();
                return;
            }
        }
        checkDraw();
    };
};

const checkDraw = () => {
    // Check if all buttons are filled
    let allFilled = true;
    for (let button of btn) {
        if (button.innerText === '') {
            allFilled = false;
            break;
        }
    }
    // If all buttons are filled and no winner is determined, it's a draw
    if (allFilled) {
        msg.innerText = "It's a draw!";
        buttonDisable(); // Disable buttons when it's a draw
    }
};

resetbtn.addEventListener("click", resetgame);
newbutton.addEventListener("click", newbtn);