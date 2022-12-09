var n1 = Number(prompt('Enter  number 1'));
var n2 = Number(prompt('Enter  number 2'));
//Max Condition
if(n1 > n2){
    alert('The max number of ' + n1 + ' and ' + n2 + ' is ' + n1 + '\nThe min number of ' + n1 + ' and ' + n2 + ' is ' + n2);
}
else if(n2 > n1){
    alert('The max number of ' + n1 + ' and ' + n2 + ' is ' + n2 + '\nThe min number of ' + n1 + ' and ' + n2 + ' is ' + n1);
}
else{
    alert(n1 + ' and ' + n1 + ' are same');
}

