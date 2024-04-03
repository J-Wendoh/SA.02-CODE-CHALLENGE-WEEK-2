let string = "jOANNE wENDOH IS CHAMPION.";

// Joanne Wendoh Is champion.
function swapCase(string){
  split = string.split(' ');
    return  split.map( i =>  {
    return  i[0].toUpperCase() + (i.slice(1)).toLowerCase()
    }).join(" ");
}
console.log(swapCase(string))