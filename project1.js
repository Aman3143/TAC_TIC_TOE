let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log(" box was click ");

        if (turn0) {
            box.innerText = " O ";
            turn0 = false;
        } else {
            box.innerText = " X ";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const checkWinner = () => {
    for (let pattern of winPattern) {
        console.log(pattern[0], pattern[1], pattern[2]);
        console.log(
            boxes[pattern[0]].innerText
            , boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText);

        let post1Val = boxes[pattern[0]].innerText;
        let post2Val = boxes[pattern[1]].innerText;
        let post3Val = boxes[pattern[2]].innerText;

        if (post1Val != "" && post2Val != "" && post3Val != "") {
            if (post1Val === post2Val && post2Val === post3Val) {
                console.log("player ", post1Val, " is winner ");
                showWinner(post1Val);

            }
        }
    }
};

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes = () => {
    for (let b of boxes) {
        b.disabled = true;
    }
}
const enableBoxes = () => {
    for (let b of boxes) {
        b.disabled = false;
        b.innerText = "";
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);