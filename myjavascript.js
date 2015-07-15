$( document ).ready(function() {

	$(".input").click( function () {
		var num = $(this).val();
		$("#displaybox").val( $("#displaybox").val() + num);
		}
	);
   
	$("#submit").click( function () {
			var values = $("#displaybox").val();
			var ans = eval(values);
			$("#displaybox").val(ans);
		}
	);

		
});
