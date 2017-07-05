
	
	$(function(){
	     $(".ad").click(function(){
	     	$("#background-wall").css("display","none");
	     });
	   });
	     //加载商标图片
	  	$(function(){
	  	  //加载商标图片
	  	    $.get("json/logo.json",function(data){
                  for(var i =0; i<data.length;i++){
	  	   	   var $li = $("<li><a><img src="+data[i].img+" /></a></li>");
	  	   	    $("#wrapper-brand ul").append($li);
	  	     }
				});
		 //鞋子图片	
		   $.get("json/sport.json",function(data2){
                  for(var i =0; i<data2.length;i++){
	  	   	   var $li = $("<li><a href=detail.html?id=" +data2[i].id+" ><img src="+data2[i].img+" /></a></li>");
	  	   	    $("#wrrapper-sport ul").append($li);
	  	     }
				});
		 //男士专区
		   $.get("json/men.json",function(data2){
                  for(var i =0; i<data2.length-2;i++){
	  	   	   var $li = $("<li><a href=detail.html?id="+data2[i].id+" ><img src="+data2[i].img+" /></a></li>");
	  	   	    $("#wrrapper-men ul").append($li);
	  	     }
				});
		 //女士专区
		  $.get("json/women.json",function(data2){
                  for(var i =0; i<data2.length;i++){
	  	   	   var $li = $("<li><a href=detail.html?id="+data2[i].id+" ><img src="+data2[i].img+" /></a></li>");
	  	   	    $("#wrrapper-women ul").append($li);
	  	     }
				});
		
		 
		
		
		//乐淘精品
		$.get("json/boutique.json",function(data2){
			 
                  for(var i =0; i<data2.length;i++){
	  	   	   var $li = $("<li><a><img src="+data2[i].img+" /></a></li>");
	  	   	    $("#wrrapper-boutique ul").append($li);
	  	     }
				});
	  	})
	  	$(function(){
	  		$(".consult").mouseenter(function(){
	  			
	  	       $(this).find("span").fadeIn();
	  			 
	  			
	  		});
	  		
	  		$(".consult").mouseleave(function(){
	  			 $(this).find("span").fadeOut();
	  			
	  		});
	  		
	  		 
	      $(".menu2 .top").click(function(){
	      	     var scrollTop = $(window).scrollTop();
	      	     if(scrollTop>0){
	      	      $("html,body").animate({scrollTop:0},800);	
	      	     }
	      	 
	      });
	       //吸顶效果
	        var  top =360;
	      $(window).scroll(function(){
	      	  var scrollTop =$(window).scrollTop();
	      	 if(scrollTop>top){
	      	 	$(".Ceiling").slideDown();
	      	 }else{
	      	 	$(".Ceiling").slideUp();
	      	 }
	      })
	      
	      //显示购物车列表
	     
	      
	      $(".categorys").mouseenter(function(){
	      	 $(".all-sort-list").css("display","block");
	      	
	      });
	      $(".categorys").mouseleave(function(){
	      	
	      	$(".all-sort-list").css("display","none");
	      	
	      });
	      $(".all-sort-list .item").mouseenter(function(){
	      	  
	      	 $(this).find(".itemlist").css("display","block");
	      });
	       $(".all-sort-list .item").mouseleave(function(){
	       	 
	       	 
	      	 $(this).find(".itemlist").css("display","none");
	      });
	      
	  		
	  	});
	  	//banner图轮播
	  	$(function(){
	  		 var  Ul1= $(".list1");
	  	 	 var  Ul2=$(".list2");
	  	 	 
	  	  $.get("json/banner.json",function(data,status){
	  	 	       
	  	 	      
	  	 	       var  content = data.data
	  	 	    for(var i in content){
	  	 	      
	  	 	  var  $li1 ="<li><a href=''><img class='images' src="+content[i].img +" /></a></li>";
	  	 	  var  $li2 = "<li><a href=''></a></li>"
	  	 	      Ul1.append($li1);
	  	 	      Ul2.append($li2);
	  	 	    }
	  	 	   
	  	 	    lunbo();
	  	 	 
	  	 });
	  		
	  	    function lunbo(){
	  	    	
	  	        $(".list2 li").eq(0).addClass("active");
	  		    $(".list1 li").eq(0).clone(true).appendTo(Ul1); 
	  	       var li1 =$(".list1 li");
	  	       var li2 =$(".list2 li");
	  	       var width = $("body").width();//获取窗口的宽度
	  	       var  size =li1.length;
	  	       
	  	       li1.width(width);
	  	       $(".images").width(width);
	  	       Ul1.width(width*size);
	  	      
	  		  
	  	    	
	  	    	 var  i =0;
	  	    	 
	  	    	 var timer= setInterval(function(){
	  	    	 	 
	  	    	 	  i++;
	  	    	 	
	  	    	 	  move();
	  	    	 	
	  	    	 },2000);
	  	          
	  	    	  function  move(){
	  	    	  	 
	  	    	  	  if (i < 0) {
					       Ul1.css("left", -width*(size-1));
							i = size-2;
						}
	  	    	  	
	  	    	      if(i>=size){
	  	    	      	
	  	    	      	Ul1.css("left",0);
	  	    	       
	  	    	       	i=1;
	  	    	       
	  	    	       }
	  	    	  
	  	    	  	
	  	    	    li2.eq(i).addClass("active").siblings().removeClass("active");
	  	    	  	Ul1.animate({"left":-width*i})
	  	    	  	if(i==size-1){
	  	    	  	   li2.eq(0).addClass("active").siblings().removeClass("active");	
	  	    	  	}
	  	    	  }
	  	    	  $("#prev").click(function(){
	  	    	  	
	  	    	  	  i--;
	  	    	  	  move();
	  	    	  	
	  	    	  	
	  	    	  });
	  	    	  $("#next").click(function(){
	  	    	  	   i++;
	  	    	  	   move();
	  	    	  	
	  	    	  });
	  	    	  
	  	    	  li2.mouseenter(function(){
	  	    	  	  i=$(this).index();
	  	    	  	  move();
	  	    	  });
	  	    	  
	  	       $("#wrapper-banner").hover(function(){
	  	       	
	  	       	   clearInterval(timer);
	  	       	   $("#prev,#next").css("display","block");
	  	       	   
	  	       },function(){
	  	       	
	  	       	    $("#prev,#next").css("display","none");
	  	       	  timer =setInterval(function(){
	  	       	  	    i++;
	  	       	  	    move();
	  	       	  	
	  	       	  },2000);
	  	       	
	  	       });
	  	    	  
	  	    	  
	  	    	  
	  	    	
	  	    }
	  		
	  	})
	  	
	  	$(function(){
	  		    var  arr=[];
	  		$.get("json/sale.json",function(data){
	  			   
	  			    arr = data;
	  			   var  Ul = $("#wrrapper-seckill ul");
	  			   
	  	
	            var  strLi="";
	  	       for(var i =0 ;i<arr.length;i++){
	  	       	
	  	       	    strLi="<li><img src="+arr[i].img +" />"
	                             +"<h2>秒杀价￥"+arr[i].price+"</h2>"
	                             + "<span>原价：￥"+arr[i].oldprice+"</span>"
	                             + "<a class='a1'>"+arr[i].describe+"</a>"
	                             +"<a class='a2'><span>距离结束：</span><span></span><span></span>:<span></span>:<span></span> </a>"
	                             +"<a  class='a3'>秒杀</a>"
	                             +" </li>";
	       
	  	       	Ul.append($(strLi));
	  	       	//添加日期时间
	  	       	//结束日期 
				var offsetTime = new Date(arr[i].finishDate) - new Date();
				var second = parseInt(offsetTime/1000); 
	  	       	(function(index, second){
							
							//开启定时器， 倒计时
							var timer = setInterval(function(){
								second--; 
								if (second <= 0) {
									//活动已经结束
									 clearInterval(timer);
									 $(".a2").eq(index).empty().html("活动已经结束了");
									 $(".a3").eq(index).addClass("a33");
								}
								
								var day  = parseInt((second/3600)/24);
								var hour = parseInt((second/3600)%24); //时
								var min = parseInt(second/60)%60; //分
								var sec = second%60; //秒
								 
								 
								hour = hour<10 ? "0"+hour : hour;
								min = min<10 ? "0"+min : min;
								sec = sec<10 ? "0"+sec : sec;
								 
								 $(".a2").eq(index).find("span").eq(1).html(day+"天");
								$(".a2").eq(index).find("span").eq(2).html(hour); //显示时
								$(".a2").eq(index).find("span").eq(3).html(min); //显示分
								$(".a2").eq(index).find("span").eq(4).html(sec); //显示秒
								
							}, 1000);
							
						})(i, second)
	  	       	
	  	       	
	  	       }
	  	       
	  	       
	  		});
	  		$("#wrrapper-seckill ul").on("click","li",function(){
	  			    var  index = $(this).index();
	  			    console.log(index);
	  			    var href="detail.html?id="+arr[index].id;
	  			window.open(href,"_blank");
	  			
	  		});
	  		
	  		
	  		
	  	})
	  	