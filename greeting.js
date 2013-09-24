$(document).ready(function() {  // wait until the html document has loaded

  var name = prompt("Enter your name:");
  var times = prompt("How many times would you like to see the message?");

  for (var i = 0; i < times; i++) {
    alert("Good morning, " + name + "!");
  }

});
