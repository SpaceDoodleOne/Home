$(document).ready(function() {
console.log("COMP");
  var str = "";

  //Attach a delegated event handler
  $(".search").on("click",  function(event) {
    //event.preventDefault();
    console.log("COMPATIBLE: NEED TO BE CHECKED.");
    str = $(.searchWord).attr("value");

    //numb = $(".links a").hasClass("active").html();

    //http://localhost:8080/Sudo/sudoku/Controller/info/1/8?status=false
    var url = "http://localhost:8080/SudoOne/Sudoku/Controller/test"; // request url

    console.log("COMPATIBLE: NEED TO BE CHECKED.");
    if (str != "") {

        $.ajax("http://localhost:8080/SudoOne/Sudoku/Controller/compare/" + str , {
          type: "POST",
          //dataType: "json", // type of response data
          timeout: 500, // timeout milliseconds
          success: function(data, status, xhr) { // success callback function
            //Return Values

            console.log("Compare:: "+data+"	\nStatus:"+status);
          },
          error: function(jqXhr, textStatus, errorMessage) { // error callback
            console.log("Error "+textStatus);
          }

        });
    }
    return false;
  });

});
