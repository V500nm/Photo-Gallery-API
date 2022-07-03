const finalImg = document.querySelector("#finalImg");
const textImg = document.querySelector("#text");
const para1 = document.querySelector("#textPic2");
const para2 = document.querySelector("#textPic5");
const para3 = document.querySelector("#textPic7");
const apiText = document.querySelector("#apiText");

function getRandom() {
    fetch("https://random.dog/woof.json")
        .then(res => res.json())
        .then(data => {
            finalImg.innerHTML = `<img id="apiPath" style="width:400px; height:500px; border:2px solid black" src="${data.url}"/>`
        })
    if (textImg == String) {
        return textAppear
    } else {
        textImg.innerText = null
    }
}
para1.addEventListener('click', textAppear => {
    textImg.innerText = 'this is long text for photo2'
})
para2.addEventListener('click', textAppear => {
    textImg.innerText = 'this is long text for photo5'
})
para3.addEventListener('click', textAppear => {
    textImg.innerText = 'this is long text for photo7'
})