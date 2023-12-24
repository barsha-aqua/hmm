const NO_BUTTON  = document.querySelector(".no");
const YES_BUTTON  = document.querySelector(".yes");
const IMG = document.querySelector("img")
const INPUTS_BOX = document.querySelector(".inputs")
const question_text = document.querySelector(".question-text")

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomCoordinates() {

    const top = getRandomNumber(10,100)
    const bottom = getRandomNumber(10,100)
    const left = getRandomNumber(10,100)
    const right = getRandomNumber(10,100)

    return { top, bottom, left, right }
}

function changePosition() {
    const coordinates = getRandomCoordinates();

    const style = `position: absolute; top: ${coordinates.top}%; bottom: ${coordinates.bottom}%;left: ${coordinates.left}%;right: ${coordinates.right}%;`;
    NO_BUTTON.setAttribute("style", style)

}

NO_BUTTON.addEventListener("mouseover", changePosition)

NO_BUTTON.addEventListener("click", changePosition)

YES_BUTTON.addEventListener("click", () => {
    IMG.setAttribute("src", "./yes.gif");
    INPUTS_BOX.setAttribute("style", "display:none;");
    question_text.textContent = "omg yay my pookie "
})