let counter = document.querySelector('.counter');
const addcount = document.querySelector('#addcountbtn');
const lowercount = document.querySelector('#lowercountbtn');

let count = 0

addcount.addEventListener('click', incrementcounter);
lowercount.addEventListener('click', decreamentcounter);

function incrementcounter() {
    count++;
    counter.innerHTML = count;
    if (counter.innerHTML>'0') {
        counter.style.color = 'green';
    }
    else if (counter.innerHTML=== '0') {
        counter.style.color = 'white';
    }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],
    {duration:1000, fill:'forwards'});
}


function decreamentcounter() {
    count--;
    counter.innerHTML = count;
    if (counter.innerHTML<'0') {
        counter.style.color = 'red'
    }
    else if (counter.innerHTML=== '0') {
        counter.style.color = 'white';
    }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],
    {duration:  1000, fill:'forwards'});
}