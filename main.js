let btnAdd = document.querySelector('#add');
let btnSubtract = document.querySelector('#subtract');
let input = document.querySelector('input');

btnAdd.addEventListener('click', () => {
input.value = parseInt(input.value) + 1;
document.getElementById('add').style.color = 'green';
if(parseInt(input.value) >=0) {
    document.getElementById('add').style.color = 'green';
}
});

btnSubtract.addEventListener('click',  () => {
    input.value = parseInt(input.value) - 1; 
    document.getElementById('subtract').style.color = 'red';
    if(parseInt(input.value) <=0) {
        document.getElementById('subtract').style.color = 'red'
    }
});

  