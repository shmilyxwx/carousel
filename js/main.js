var index = 0;
var imgWidth = 400;
isGo = false;
$(".next").on('click',function(){
	if(isGo){
		return
	}
	isGo = true

	var nowLeft =  parseInt($(".imgbox").css('margin-left'))-400
	$(".imgbox").animate({"margin-left":nowLeft},function(){
		index ++;
		if(parseInt($(".imgbox").css('margin-left'))<=-1600){
			index = 0
			$(".imgbox").css("margin-left","-400px")
		}
		$(".dot > span").eq(index).addClass('active').siblings().removeClass('active')
		isGo = false
	})
})
$(".prev").on('click',function(){
	if(isGo){
		return
	}
	isGo = true

	var nowLeft =  parseInt($(".imgbox").css('margin-left'))+400
	$(".imgbox").animate({"margin-left":nowLeft},function(){
		index --;
		if(parseInt($(".imgbox").css('margin-left'))>-400){
			index = 2
			$(".imgbox").css("margin-left","-1200px")
		}
		$(".dot > span").eq(index).addClass('active').siblings().removeClass('active')
		isGo = false
	})
})


//原点事件
$(".dot > span").on('click',function(){
	var nowIndex = $(this).index();
	var offsetIndex = (nowIndex - index)
	if(!offsetIndex){
		return;
	}
	oldOffset = parseInt($(".imgbox").css('margin-left')) - offsetIndex*400
	$(this).addClass('active').siblings().removeClass('active')
	$(".imgbox").animate({'margin-left':oldOffset})
	index = nowIndex
})

var timeId = setInterval(()=>{
	$(".next").trigger('click')
},1000)

$(".imgbox,.next,.prev").on('mouseenter',function(){
	clearInterval(timeId)
})
$(".imgbox,.next,.prev").on('mouseleave',function(){
	timeId = setInterval(()=>{
		$(".next").trigger('click')
	},1000)
})

