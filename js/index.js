const movie1 = document.getElementById("movie1");
const movie2 = document.getElementById("movie2");
const movie3 = document.getElementById("movie3");

const registrationButton = document.getElementById("registration");
const resetButton = document.getElementById("reset");

registrationButton.addEventListener("click", registrate);
resetButton.addEventListener("click", reset);

function registrate() {
    if (movie1.checked && movie2.checked && movie3.checked) {
        alert("뭘 좀 아시는 군요~");
    }
    else if (movie1.checked && movie2.checked) {
        alert("저와 2개나 같네요~");
    }
    else if (movie1.checked && movie3.checked) {
        alert("저와 2개나 같네요~");
    }
    else if (movie2.checked && movie3.checked) {
        alert("저와 2개나 같네요~");
    }
    else if (movie1.checked || movie2.checked || movie3.checked ){
        alert("저와 1개 밖에 안 같네요 ㅠ");
    }
    else {
        alert("상처 받았어요 나가주세요");
    }
}

function reset() {
    movie1.checked = false;
    movie2.checked = false;
    movie3.checked = false;
}