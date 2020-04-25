$(document).ready(function() {

	var numb ="";
	var box ="";
	var fund ="";
	var miss = 0;
	$("#on").val("Off");

	//Done//Pencil
	$("#on").click(function() {
		console.log("On: "+$(this).html());
		console.log("On: "+$(this).val());
		var oldText = $(this).html();
		if("Pencil On" === oldText){
			$(this).removeClass("ac");
			$(this).text("Pencil Off");
			$(this).val("Off");
		}else{
			$(this).addClass("ac");
			$(this).text("Pencil On");
			$(this).val("On");
		}
		return false;

	});

	//Done//Create New data
	/*$("#new").click(function() {
		var url="http://localhost:8080/Sudo/sudoku/Controller/test";

		$.post("http://localhost:8080/Sudo/sudoku/Controller/info",
			function(data, status) {
				console.log(" Data: " + data + "\nStatus: " + status);
				if(status === "success"){
					$(".divTable").load(url+" .divTableBody");
					$(".links2 span").text("New:: "+data+"	\nStatus:"+status);
				}
		});
	});*/
	//Done//Create New data
	$( this ).on( "click", "#new", function( event ) {
	//$("#new").click(function() {
		var url="http://localhost:8080/SudoOne/Sudoku/Controller/test";// request url

		$.ajax("http://localhost:8080/SudoOne/Sudoku/Controller/info",
		{
			type: "POST",
		 	//dataType: "json", // type of response data
		    timeout: 500,     // timeout milliseconds
		    success: function (data,status,xhr) {   // success callback function
		    	$(".divTable").load(url+" .divTableBody");
				$(".links2 span").text("Success:: "+data+"	\nStatus:"+status);
				console.log('DELETE:' + data);
		    },
		    error: function (jqXhr, textStatus, errorMessage) { // error callback
		    	$(".divTable").load(url+" .divTableBody");
				$(".links2 span").text("Error:: "+errorMessage);
		    }
		});
		return false;
	});

	//Done//Delete
	//Attach a delegated event handler
	$( this ).on( "click", "#quit", function( event ) {

	//$("#quit").click(function() {
		var url="http://localhost:8080/SudoOne/Sudoku/Controller/test";// request url

		$.ajax("http://localhost:8080/SudoOne/Sudoku/Controller/info",
		{
			type: "DELETE",
		 	//dataType: "json", // type of response data
		    timeout: 500,     // timeout milliseconds
		    success: function (data,status,xhr) {   // success callback function
		    	$(".divTable").load(url+" .divTableBody");
				$(".links2 span").text("Success:: "+data+"	\nStatus:"+status);
				console.log('DELETE:' + data);
		    },
		    error: function (jqXhr, textStatus, errorMessage) { // error callback
		    	$(".divTable").load(url+" .divTableBody");
				$(".links2 span").text("Error:: "+errorMessage);
		    }
		});
		return false;
	});

	//Done//Select a Number
	$(".links a").click(function() {
		// If this isn't already active
		if (!$(this).hasClass("active")) {
			// Remove the class from anything that is active
			$("a.active").removeClass("active");
			// And make this active
			$(this).addClass("active");
			var value = $(this).html();
			numb = value;
			console.log('Active: ' + value);
		}
		return false;
	});

	//D//Select a box
	/*$(".divTableBody .divTableCell").click(function() {

		// If this isn't already active
		if (!$(this).hasClass("act")) {
			// Remove the class from anything that is active
			$(".divTableCell.act").removeClass("act");
			// And make this active
			$(this).addClass("act");
			//box = $(this).html();
			box = $(this).attr("value")
		}
		//numb = $(".links a").hasClass("active").html();
		console.log("Box: " + box + "	\nValue:"+numb);
		//http://localhost:8080/Sudo/sudoku/Controller/info/1/8?status=false
		var url="http://localhost:8080/Sudo/sudoku/Controller/test";// request url
		if(numb!="" && box!=""){
			$.ajax("http://localhost:8080/Sudo/sudoku/Controller/info/"+box+"/"+numb+"?status=false",
					{
						type: "POST",
					 	//dataType: "json", // type of response data
					    timeout: 500,     // timeout milliseconds
					    success: function (data,status,xhr) {   // success callback function
					    	$(".divTable").load(url+" .divTableBody");
							$(".links2 span").text("Compare:: "+data+"	\nStatus:"+status);
					    },
					    error: function (jqXhr, textStatus, errorMessage) { // error callback
					    	$(".divTable").load(url+" .divTableBody");
							$(".links2 span").text("Error:: "+errorMessage);
					    }
					}
			);
		}


	});*/


	//Attach a delegated event handler
	$( ".divTable" ).on( "click", ".red", function( event ) {
		//event.preventDefault();
		box = $(this).attr("value");
		fund = $(this).attr("value");

		//numb = $(".links a").hasClass("active").html();

		//http://localhost:8080/Sudo/sudoku/Controller/info/1/8?status=false
		var url="http://localhost:8080/SudoOne/Sudoku/Controller/test";// request url

		console.log("COMPATIBLE: NEED TO BE CHECKED.");
		if(numb!="" && box!="" && fund!=""){
			if($("#on").val() == "Off"){

				$.ajax("http://localhost:8080/SudoOne/Sudoku/Controller/info/"+box+"/"+numb+"?status=false",
						{
							type: "POST",
						 	//dataType: "json", // type of response data
						    timeout: 500,     // timeout milliseconds
						    success: function (data,status,xhr) {   // success callback function

						    	$(".divTable").load(url+" .divTableBody");
								$(".links2 span").text("Compare:: "+data+"	\nStatus:"+status);
								if(data == "false"){
									//var mistake = $("#mistakes").attr("value");
									if(miss >=0){
										miss += 1;
									}else{
										miss = 1;
									}
									//$("#mistakes").val(miss);
									$("#mistakes").text("mistake(s):"+parseInt(miss)+"	\n/5");

								}

						    },
						    error: function (jqXhr, textStatus, errorMessage) { // error callback
						    	$(".divTable").load(url+" .divTableBody");
								$(".links2 span").text("Error:: "+errorMessage);
						    }

						}
				);

			}else{
	    		//POSSIBILITY CHECK
	    	}
		}
		return false;
	});
});
