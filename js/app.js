$(document).ready(function() {

// button push instead of enter
//	$('#textenter').keyup(function(event) {
//		if(event.keyCode == 13){
//			event.preventDefault();
//			$('#enter').click();
//	};
//	})
	$('#enter').click(function (e) {
		e.preventDefault();
		$('#textenter').submit();
	})
// alerts
//	$('#enter').click(function() {
//	alert("The button was clicked");
//	});
//	$(':text').keyup(function() {
//		alert("text was entered");
//	});
// add to list with enter
	var additem = function(){
		var add = $('#textenter').val();
		var newitem = $('<li><button class="check"></button><span>'+add+'</span><img class="remove" src="images/Button-Delete-icon.png"></li>');
		$('#list').append(newitem);
		$('textenter').val('');
	}
	$('#textenter').submit(function() {
//		e.preventDefault();
		var add = $('#textenter').val();
		if (add) {
			additem();
		}
		else {
			alert ('Please enter an item');
		}
	})



//		var add = document.getElementById('textenter');
//		if(newitem.length < 1)
//			!$.trim($('#textenter').val())) {
//			{alert('Add item');
//		} else {
		
//		document.getElementById('textenter').value('');
//		};
//	})
//
// check off and uncheck items
	$('#list').on('click', '.check', function () {
	$(this).closest('li').toggleClass('done');
	})
// remove items
	$('#list').on('click', '.remove', function() {
		$(this).closest('li').remove();
	})
// hover makes delete button appear
	$('#list').on('mousenter', 'li', function() {
		$(this).children('.remove').toggleClass('show');
	})
	$('#list').on('mouseleave', 'li', function() {
		$(this).children('.remove').toggleClass('show');
	})

// sort items
//	$('#list').sortable({axis: "y"});
})