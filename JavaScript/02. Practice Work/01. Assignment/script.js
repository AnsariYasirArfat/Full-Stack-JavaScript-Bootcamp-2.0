const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");

const randomColor = () => {
    let code = '0123456789ABCDEF';
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        hex = hex + code[Math.floor(Math.random() * 16)];
    }
    return hex;
};
console.log(randomColor());
function box1RandomColor() {
    document.getElementById('box1').style.backgroundColor = randomColor();
    const hexcode = document.getElementById('hexcode1')
    hexcode.innerHTML = randomColor();
}
function box2RandomColor() {
    document.getElementById('box2').style.backgroundColor = randomColor();
    const hexcode = document.getElementById('hexcode2')
    hexcode.innerHTML = randomColor();
}
button1.addEventListener('click', box1RandomColor);
button2.addEventListener('click', box2RandomColor);

