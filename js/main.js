var index = 0;
var imgWidth = 400;
var isGo = false;
var imgWidth = 400;
var imgLength = $(".imgbox img").length
$(".next").on('click',function(){
	if(isGo)
		return

	isGo = true

	var nowLeft =  offset(-imgWidth)
	$(".imgbox").animate({"margin-left":nowLeft},function(){
		index ++;
		if(margin()==-(imgLength-1)*imgWidth){
			index = 0
			reset(-imgWidth)
		}
		setDOt()
		isGo = false
	})
})
$(".prev").on('click',function(){
	if(isGo)
		return
	
	isGo = true

	var nowLeft =  offset(imgWidth)
	$(".imgbox").animate({"margin-left":nowLeft},function(){
		index --;
		if(margin()==-0){
			index = imgLength-3
			reset(-(imgLength-2)*imgWidth)
		}
		setDOt()
		isGo = false
	})
})
//临界条件重置位置
function reset(distance){
	$(".imgbox").css("margin-left",distance+"px")
}
	
//设置便宜距离
function offset(imgWidth){
	var nowLeft =  margin()+imgWidth;
	return nowLeft;
}
//获取当前距离margin-left距离
function margin(){
	return parseInt($(".imgbox").css('margin-left'))
}
//设置原点高亮
function setDOt(){
	$(".dot > span").eq(index).addClass('active').siblings().removeClass('active')
}

//原点事件
$(".dot > span").on('click',function(){
	clearInterval(timeId)
	var nowIndex = $(this).index();
	var offsetIndex = (nowIndex - index)
	if(!offsetIndex){
		return;
	}
	oldOffset = margin() - offsetIndex*imgWidth
	$(".imgbox").animate({'margin-left':oldOffset})
	index = nowIndex
	setDOt()
})

var timeId = timeSet()


function timeSet(){
	return	setInterval(()=>{
		$(".next").trigger('click')
	},1000)
}


$(".imgbox,.next,.prev,.dot").on('mouseenter',function(){
	clearInterval(timeId)
})
$(".imgbox,.next,.prev,.dot").on('mouseleave',function(){
	clearInterval(timeId)
	timeId = timeSet()
})

