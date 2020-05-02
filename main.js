let btnAdd = document.querySelector('#add');
let btnSubtract = document.querySelector('#subtract');
let input = document.querySelector('#input');

btnAdd.addEventListener('click', () => {
input.value = parseInt(input.value) + 1;

if(parseInt(input.value) >= 0) {
    document.getElementById('input').style.color = 'green';
}
});

btnSubtract.addEventListener('click',  () => {
    input.value = parseInt(input.value) - 1; 
   
    if(parseInt(input.value) <= 0) {
        document.getElementById('input').style.color = 'red'
    }
});

  