window.onload = function(){
	$(function(){
		$("#list1 #move").mouseover(function(){
			$("#list1 #place-list").show();
		})
		$("#list1 #move").mouseleave(function(){
			$("#list1 #place-list").hide();
		})
		$("#E-lists").mouseover(function(){
			$("#E-list").show();
		})
		$("#E-lists").mouseleave(function(){
			$("#E-list").hide();
		})
		$("#collections").mouseover(function(){
			$("#collection").show();
		})
		$("#collections").mouseleave(function(){
			$("#collection").hide();
		})
	})
}
