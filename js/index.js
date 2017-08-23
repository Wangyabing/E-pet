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
		var i = 0;
		move()
		function move(){
			$(".img-list img").eq(i).fadeIn("slow",function(){
				$(this).css("transform","scale(0.98)")
			}).end().siblings().fadeOut();
			
		}
		setInterval(function(){
			i++;
			move()
		},2000)
	})
}
