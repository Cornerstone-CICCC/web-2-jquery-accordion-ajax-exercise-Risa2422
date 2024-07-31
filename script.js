$(function () {
  // your code here

  // exercise1
  const accordion = $(".accordion");
  accordion.find("h3").on("click", function () {
    $(this).next().slideToggle();
    accordion.find("h3").not($(this)).next().slideUp();
  });

  // exercise2
  const button = $(".todos");
  button.find("button").on("click", async function () {
    const data = await getData();
    console.log(data);

    const todoList = $("ul");
    let text = "";
    for (let i = 0; i < data.todos.length; i++) {
      todoList.append().HTML(`<li>${data.todos[i].todo}</li>`);
    }
  });

  function getData() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `https://dummyjson.com/todos`,
        type: `GET`,
        success: function (response) {
          resolve(response);
        },
        error: function (error) {
          reject(error);
        },
      });
    });
  }
});
