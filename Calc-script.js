
function operator(element)
{
 let operator = element.value;
 if(operator == "C")
 {
    document.getElementById("display").value = 0
 }
 else if(operator == "<-")
 {
    document.getElementById("display").value = document.getElementById("display").value.slice(0,-1)
    if(document.getElementById("display").value == '')
    {
        document.getElementById("display").value = 0
    }
 }
 else
 {
    document.getElementById("display").value  = document.getElementById("display").value .concat(operator);
 }
}
function operands(val)
{
    let operands = val.value;
    if(document.getElementById("display").value == "0")
    {
        document.getElementById("display").value  = operands;
    }
    else
    {
        document.getElementById("display").value  = document.getElementById("display").value .concat(operands);
    }
}
function equal()
{
     document.getElementById("display").value = eval(document.getElementById("display").value);
    
}