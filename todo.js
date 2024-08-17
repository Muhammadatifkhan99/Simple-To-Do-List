let input = prompt("What would you like to do....");

const toDos = ["Collect Eggs", "Clean Cat Litter Box"];

while(input !== "quit" && input !== "q"){
    if(input === "list"){
        console.log("********************");
        for(let i=0;i<toDos.length;i++){
            console.log(`${i} : ${toDos[i]}`);
        }
        console.log("********************");
    } else if (input === "new"){
        const newTodo = prompt("Ok, what is the new todo?");
        toDos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    } else if (input === "delete"){
        const index = parseInt(prompt("OK! enter an index to delete: "));
        if(!Number.isNaN(index)){
        const deleted =  toDos.splice(index, 1);     // this will return an array 
        console.log(`${deleted[0]} Removed`)
        }else {
            console.log("Unknown Index");
        }
    }
    input = prompt("What would you like to do....");
}