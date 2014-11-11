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
	});
// alerts
//	$('#enter').click(function() {
//	alert("The button was clicked");
//	});
//	$(':text').keyup(function() {
//		alert("text was entered");
//	});
// add to list with enter
	$('#textenter').submit(function(e) {
		e.preventDefault();
		additem();
	});

	var additem = function(){
		var add = $('#textenter').val();
		var newitem = $('<li class="get"><button class="check"></button><span>'+add+'</span><img class="remove" src="images/Button-Delete-icon.png"></li>');
		$('#list').append(newitem);
		$('textenter').val('');
	}

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
	$('.check').on('click', function () {
	$(this).closest('li').toggleClass('done');
	})
// remove items
	$('.remove').on('click', function() {
		$(this).closest('li').remove();
	})
// hover makes delete button appear
	$('#list').on('mousenter', 'li', function() {
		$(this).children('.remove').toggleClass('show');
	});
	$('#list').on('mouseleave', 'li', function() {
		$(this).children('.remove').toggleClass('show');
	});

// sort items
//	$('#list').sortable({axis: "y"});
});