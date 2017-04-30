$(document).ready(function(){

	

	function checkIfIntegerAndAssign(split)
	{
		try {
			return Number.isInteger(parseInt(split[split.length - 1])) ? split[split.length - 1] : split[split.length - 2];
		}catch(err) {

		}

	}



	$("form").submit(function() {
		
		var url = $(".hotstar_url").val();
		var split = url.split('/');		
		
		videoId = checkIfIntegerAndAssign(split);

		$.ajax({
			url : 'http://getcdn.hotstar.com/AVS/besc?action=GetCDN&asJson=Y&channel=TABLET&id=' + videoId + '&type=VOD',
			dataType : 'jsonp',
			success : function(data) {
				var player = document.getElementById("player");
				player.pause();
				var returnJSON = data;
				var videoSrc = data.resultObj['src'];
				
				
				$("video").attr('src',videoSrc);
				player.play();

			}
		});

		return false;

	});


});