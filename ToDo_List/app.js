const toDo = [];
let newToDo = "";
let inp = prompt("Action");


while (inp !== "quit" && inp !== "q") {
  if (inp === "new" || inp === "n") {
    newToDo = prompt("Add a To Do");
    toDo.push(newToDo);
    console.log(`added "${newToDo}" to the list`)

  } else if (inp === "list" || inp === "l") {
    for (const task of toDo) {
      console.log(`${toDo.indexOf(task)}. ${task}`);
    };

  } else if (inp === "delete" || inp === "delete") {
    let delInput = prompt("what task would you like to delete? Enter index");
    toDo.splice(delInput, 1);
    console.log(`${delInput} was deleted`)
  }   

  inp = prompt("Action")
}

console.log("You quit the app");
