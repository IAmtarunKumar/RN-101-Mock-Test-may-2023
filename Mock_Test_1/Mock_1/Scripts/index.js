let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let obj = {
    name: form.name.value,
    start_data: form.start.value,
    end_data: form.end.value,
    priority: form.priority.value,
  };
  // console.log(obj)

  

  let store = localStorage.getItem("task-list");

  if (store) {
    let data = localStorage.getItem("task-list");
    let pasred = JSON.parse(data);
    pasred.push(obj);

    localStorage.setItem("task-list", JSON.stringify(pasred));
  } else {
    localStorage.setItem("task-list", JSON.stringify([obj]));
  }



});




