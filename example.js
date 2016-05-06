$(function () {
	$("#search_input").on({
		/* 进入焦点时触发 */
		focus:function(){
                    //searchBar
                    var $weuiSearchBar = $('#search_bar');
                    $weuiSearchBar.addClass('weui_search_focusing');
                },
		/* 失去焦点时触发 */
                blur:function(){
                    var $weuiSearchBar = $('#search_bar');
                    $weuiSearchBar.removeClass('weui_search_focusing');
                    if($(this).val()){
                        $('#search_text').hide();
                    }else{
                        $('#search_text').show();
                    }
                },
                input:function(){
                    var $searchShow = $("#search_show");
                    if($(this).val()){
                        $searchShow.show();
                    }else{
                        $searchShow.hide();
                    }
                }
	});
	
	$("#search_cancel").on({
		/* 手指从DOM元素上移开 
			touchstart:手指放在一个DOM元素上
			touchmove:手指拖拽一个DOM元素
			touchend:手指从一个DOM元素移开
			touches:当前位于屏幕上的所有手指的一个列表
			targetTouches:位于当前DOM元素上的手指的一个列表
			changedTouches:涉及当前事件的手指的一个列表
			在一个touchend事件中,这就会是移开的手指.这些列表由包含了触摸信息的对象组成:
			identifier:一个数值,唯一标识触摸会话中的当前手指
			target: DOM元素,是动作所针对的目标
			客户/页面/屏幕坐标:动作子啊屏幕上发生的位置
			半径坐标和rotationAngle:画出大约相当于手指形状的椭圆形
			
		*/
		touchend:function(){
			$("#search_show").hide();
			$("#search_input").val('');
		}
		
	});
	
	$(".weui_cell").click(function(){
		$("#search_input").val($.trim($(this).text()));
		$(".weui_search_outer").submit();
	});
});