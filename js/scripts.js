$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();
    var newTask = { task: inputtedTask, done: false };

    $("ul#tasks").append("<li><span class='task'>" + newTask.task + "</span></li>");

    $("input#new-task").val("");

    $(".task").last().click(function() {
      $(this).done = true;
      $(this).addClass("completed");
    });
  });
});
