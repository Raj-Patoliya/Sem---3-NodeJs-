function addition(...params) {
    let total = 0;
    params.forEach(element => {
        total = total+element
    });
    return total;
}
function substarct(a,b) {
    let total = a-b;
    return total;
}

function multiplication(...params) {
    let total = 1;
    params.forEach(element => {
        total = total*element
    });
    return total;
}

function division(a,b) {
    let total = a/b;
    return total;
}
export { addition,substarct,division,multiplication};