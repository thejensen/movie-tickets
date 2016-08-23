function Ticket(movie, age, time) {
this.movieChoice = movie;
this.customerAge = age;
this.movieTime = time;
}


// User interface logic
//
// function resetFields() {
//   $("input[name=movie]").attr('checked', false);
//   $("input[name=age]").attr('checked', false);
//   $("input[name=time]").attr('checked', false);
// };


$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();

    var inputtedMovieChoice = $("input:radio[name=movie]:checked").val();
    var inputtedcustomerAge = $("input:radio[name=age]:checked").val();
    var inputtedmovieTime = $("input:radio[name=time]:checked").val();

    var newTicket = new Ticket(inputtedMovieChoice, inputtedcustomerAge, inputtedmovieTime);

    var basePrice = 10;

    if (newTicket.movieChoice === "captain" || "dexter" || "screamening") {
      basePrice += 2
    } else {
      basePrice += 0
    }

    if (newTicket.customerAge === "child") {
      basePrice -= 3
    } else if (Ticket.customerAge === "senior") {
      basePrice -= 2
    } else {
      basePrice -= 0
    }

    if (newTicket.movieTime === "primetime") {
      basePrice += 2
    } else {
      basePrice += 0
    }

    Ticket.prototype.ticketMaker = function() {
      return basePrice;
    }

    $("#ticketprice").text(basePrice);
  });
});
