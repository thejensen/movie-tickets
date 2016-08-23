var basePrice = 10;

if (inputtedMovieChoice === "new") {
  basePrice + 2
} else {
  basePrice + 0
}

if (customerAge === "child") {
  basePrice - 3
} else if (customerAge === "senior") {
  basePrice - 2
} else {
  basePrice + 0
}

if (inputtedmovieTime === "primetime") {
  basePrice + 2
} else {
  basePrice + 0
}

function Ticket(movie, age, time) {
this.movieChoice = movie;
this.customerAge = age;
this.movieTime = time;
}

Ticket.prototype.ticket = function() {
  this.movieChoice + this.customerAge + this.movieTime;
}

basePrice.ticket();

// User interface logic



$(document).ready(function() {

  function resetFields() {
    $("input:radio[name=neworold]:checked").val("");
    $("input:radio[name=age]:checked").val("");
    $("input:radio[name=time]:checked").val("");
  }

  $("form").submit(function(event) {
    event.preventDefault();

    var inputtedMovieChoice = $("input:radio[name=neworold]:checked").val();
    var inputtedcustomerAge = $("input:radio[name=age]:checked").val();
    var inputtedmovieTime = $("input:radio[name=time]:checked").val();

    var newTicket = new Ticket(inputtedMovieChoice, inputtedcustomerAge, inputtedmovieTime);

    console.log(basePrice)
  });
});
