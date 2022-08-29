function lcm() {
    var a1 = document.getElementById("input-1").value.split(",");
  
    var arr = []
    for(x of a1)
    {
        arr.push(parseInt(x))
    }
    console.log();
    var min = Math.max(...arr);
    var mul = multiply(arr);
    while(min <=mul)
    {
        let temp = 0
        for(i=0;i<arr.length;i++)
        {
            if(min%arr[i] == 0)
            {
                temp++;
            }
        }
        if(temp==arr.length)
        {
            document.getElementById("display").value = min;
            break;
        }
        else{
            min++;
        }
    }
    
}
function hcf() {
    var a1 = document.getElementById("input-1").value.split(",");
  
    var arr = []
    for(x of a1)
    {
        arr.push(parseInt(x))
    }
    
    var min = Math.min(...arr);
    while(min >=0)
    {
        let temp = 0
        for(i=0;i<arr.length;i++)
        {
            if(arr[i]%min == 0)
            {
                temp++;
            }
        }
        if(temp==arr.length)
        {
            document.getElementById("display").value = min;
            break;
        }
        else{
            min--;
        }
    }
    
}


function multiply (array) {
    var sum=1;
    for (var i=0; i<array.length; i++) {
        sum = sum * array[i];
    } 
    return sum;
}
