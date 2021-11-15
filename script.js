var lastnumber = '';
var operation = ''
var mainnumber = ''

function addAnimation(){
    document.getElementById('calculator').classList.add('animate')
}

function removeAnimation(){
    document.getElementById('calculator').classList.remove('animate')
}

function display(){
    document.getElementById('lastnumber').innerHTML = lastnumber;
    document.getElementById('operation').innerHTML = operation;
    document.getElementById('mainnumber').innerHTML = mainnumber;
}

function addNumber(num){
    mainnumber = mainnumber + num
    display()
}

function addOperator(operator){
    lastnumber = mainnumber
    mainnumber = ''
    operation = operator
    display()
}

function solve(){
    lastnumberint = parseInt(lastnumber)
    mainnumberint = parseInt(mainnumber)
    if (operation == '/'){
        if (mainnumberint == 0){
            result = "What do you think you're doing"
        }else{
            result = lastnumberint / mainnumberint
        }
    }else if(operation == 'x'){
        result = lastnumberint * mainnumberint
    }else if(operation == '+'){
        result = lastnumberint + mainnumberint
    }else{
        result = lastnumberint - mainnumberint
    }
    mainnumber = result
    display()
}

function clearDisplay(){
    console.log('Clearing')
    lastnumber = ''
    operation = ''
    mainnumber = ''
    display()
}