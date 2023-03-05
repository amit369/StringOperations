let str="my name is amit chaman";
let arr = str.split(" ");
let output="";
arr.map((item) => {
    item = item[0].toUpperCase() + item.slice(1);
    output+= item+" ";
    
})
console.log(output);
