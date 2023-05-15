let add = document.getElementById('increment');
let remove = document.getElementById('decrement');

let int = document.getElementById('number');
let integar = 0;

add.addEventListener('click', function(){
    integar += 1; 
    int.innerHTML = integar;
})

remove.addEventListener('click', function(){
    integar -= 1;
    int.innerHTML = integar;
})