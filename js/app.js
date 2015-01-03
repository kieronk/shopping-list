// why ref to jquery first in head of html, and where title? 

var shopitem //where should I, if I should declare these?  
var textval
var itemprice

$(document).ready(function() {

// enter adds an item 

	$('#shopitem').keydown(function(event) {
				if(event.which == 13) {
				console.log("you pressed enter");
				event.preventDefault();
				$(".add-item").click(); 
			};
	});


// adding items to the list 


	$(".add-item").click(function(){
		var shopitem = $("#shopitem").val();
		var itemprice = $("#shopprice").val();
		console.log(shopitem);
		console.log(shopprice);
		//value = $("#shop-item").val();
		$('<li class="list-item"></li>').appendTo(".list")
		.html('<input type="checkbox" name="got" value="" class="checklist"><span class="addeditem">' +   shopitem +
		 '</span><span class="addedcost">' +   '  £' + itemprice + '</span><button class="kill">Got</button>');
		$("#shopitem").val("");
		$("#shopprice").val("");
		event.preventDefault();
		event.stopPropagation(); 
	});

// adding costs to the list 


// deleteing items 

	$(".list").mousedown(function(event){
		console.log(event.target);
		var target = event.target;
		var test = $(target).hasClass("kill");
		if(test == true){
			$(target).parent().remove();
		}
	});

	
	$(".title").mouseenter(function(){
		console.log("you entered");
		$(this).toggleClass("anothertitle");
		$(this).append("<h2>Woo! SHOPPING!</h2>")
	});

	$(".title").mouseleave(function(){
		console.log("you left");
		$(this).toggleClass("anothertitle");
		$("h2").remove();
	});

// delete all items 

	$(".abort").on("click", function(){
		console.log("trying to abort");
		$(".list").html("");
		//$(".list_item").find().remove();
	});


});



/*


// their code // 
//delete list items
	$('#list').on('click', '.delete', function(e){e.preventDefault(); $(this).parent().remove()});

//add list items
	$('#add').click(function(){
		var txtbox = document.getElementById('item');
		var txtval = txtbox.value;
		event.preventDefault();

		if(!$.trim($('#item').val())) {
			alert('Please enter text to add to the list');
		} else {
			$('<li class="items"></li>').appendTo('#list').html('<div class="box"></div><span>' + txtval + '</span><img class="delete" src="images/delete.png"/>');

		document.getElementById('item').value = '';
		};
	});

//delete list items
	$('#list').on('click', '.delete', function(e){e.preventDefault(); $(this).parent().remove()});

//cross off list items
	$('#list').on('click', 'li', function(){$(this).toggleClass('strike'); $(this).children('.box').toggleClass('Checked');});

//sortable list items
	$('#list').sortable({ axis: "y" });
	
//show delete button on mouse hover
	$('#list').on('mouseenter', 'li', function(){$(this).children('.delete').toggleClass('show');});
	$('#list').on('mouseleave', 'li', function(){$(this).children('.delete').toggleClass('show');});

});


*/