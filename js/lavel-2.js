let num = 0;
const numberCount = () => {
    num += 1;
    document.getElementById('number-count').innerText = num;
    localStorage.setItem('number', num);
}