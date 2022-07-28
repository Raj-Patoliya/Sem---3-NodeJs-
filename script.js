function tilear()
{
     document.getElementById("name").value = "";
     document.getElementById("age").value = "";
     document.getElementById("course").value = "";
     document.getElementById("grade").value = "";
     document.getElementById("phone").value = "";
     document.getElementById("email").value = "";
    
}
function myfun()
{
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;
    let grade = document.getElementById("grade").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    
    document.getElementById("tbl").getElementsByTagName("tbody")[0].innerHTML+="<tr><td>"+name+"</td>5<td>"+age+"</td><td>"+course+"</td><td>"+grade+"</td><td>"+phone+"</td><td>"+email+"</td></tr>";
    tilear();
}

