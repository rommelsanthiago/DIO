const CURRENT_NUMBER = document.getElementById('currentNumber');
let count = 0;

function increment() {
    if(count >= 5){
        let answer = confirm(`Limite maximo da contagem alcançado! \n Deseja resetar?`)
        if(answer === true){
            count = 0
            CURRENT_NUMBER.innerHTML = count
        }
    } else {
        count++;
    }
	CURRENT_NUMBER.innerHTML = count;

    if(count > 0){
        CURRENT_NUMBER.style.color = "darkgreen"
    } else if(count === 0){
        CURRENT_NUMBER.style.color = "black"
    }
}

function decrement() {
    if(count <= -5){
        let answer = confirm(`Limite maximo da contagem alcançado! \n Deseja resetar?`)
        if(answer === true){
            count = 0
            CURRENT_NUMBER.innerHTML = count
        }
    } else{
        count--;
    }
	CURRENT_NUMBER.innerHTML = count;

    if(count < 0){
        CURRENT_NUMBER.style.color = "red"
    } else if(count === 0){
        CURRENT_NUMBER.style.color = "black"
    }
}
