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
    let delInput = parseInt(prompt("what task would you like to delete? Enter index"));
    if (!Number.isNaN(delInput)) {
      console.log(`${toDo[delInput]} will be deleted`)
      toDo.splice(delInput, 1);
    } else {
      console.log("That is an unknown index.")
    }
  }   

  inp = prompt("Action")
}

console.log("You quit the app");
