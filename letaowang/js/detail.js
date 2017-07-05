  
	  	  $(function(){
	  	  	  //获取传过来的id
	  	  	   var uid  = location.search;
	  	  	  uid =uid.substring(uid.indexOf("=")+1);
	  	  	  var  jsonData=[];
	  	  	  var   index;
	  	  	   var  obj={};
	  	  	  $.get("json/all.json",function(data){
	  	  	  	      jsonData = data;
	  	  	  	   for(var i in data){
	  	  	  	   	  
	  	  	  	   	if(uid==data[i].id){
	  	  	  	   		  index=i;
	  	  	  	   	      obj = data[i];
	  	  	  	   	   $("#smallImg img").attr("src",obj.imgs[0]);
	  	  	  	   	   $("#bigImg").attr("src",obj.imgs[0]);
	  	  	  	   	    var  images = obj.imgs;
	  	  	  	   	     	
	  	  	  	   	    for(var i =0;i<images.length;i++){
	  	  	  	   	    	
	  	  	  	   	    	var src= images[i];
	  	  	  	   	    	
	  	  	  	   	        $ ("<li> <img  src="+ src+"></li>").appendTo($(".listitems")); 
	  	  	  	   	    	
	  	  	  	   	    }
	  	  	  	   	    
	  	  	  	   	    $(".product-detail-price  h2").html(obj.title); //产品的标题
	  	  	  	   	    $ ("#product_price").html(obj.price);//产品售价
	  	  	  	   	    $(".pro_original_price").html("市场价：￥"+obj.oldprice);//产品市场价
	  	  	  	   	    $(".hl_red").html(obj.promotions);//促销信息
	  	  	  	   	    //码数
	  	  	  	   	     var  code  = obj.code;
	  	  	  	   	     var  codeItem ="";
	  	  	  	   	     for(var j=0;j<code.length;j++){
	  	  	  	   	        $("<a>"+code[j]+"<i></i></a>").appendTo($(".code"));
	  	  	  	   	       
	  	  	  	   	     }
	  	  	  	   	    
	  	  	  	  
	  	  	  	   	  }
	  	  	  	   }
	  	  	  	     var amount =$(".amount").val();
				
				  $(".add").click(function(){
				  	
				  	   
				  	   $(".amount").val(++amount);
				  	 
				  })
				  $(".sub").click(function(){
				  	
				  	  
				  	   if(amount<2){
				  	   	  $(".amount").val("1");
				  	   }
				  	   else{
				  	   	 $(".amount").val(--amount);
				  	   	
				  	   }
				  	  
				  	 
				  })
				  
				  var code ="";
				 //选择码数
				 $(".code").on("click","a",function(){
				 	
				 	  $(this).addClass("active").siblings().removeClass("active");
				 	  $(this).find("i").css("display","block").parent().siblings().find("i").css("display","none");
				 	
				 	code=$(this).text();
				 })
				  
				  
	  	  	  	   $(".con-cart").click(function(){
	  	  	  	   	  
	  	  	  	   	
	  	  	  	   	  if(code==0){
	  	  	  	   	  $("#wrapper-shade").show(500).delay(2000).hide(500);
	  	  	  	   	  $("#wrapper-shade p i").click(function(){
	  	  	  	   	  $("#wrapper-shade").hide();
	  	  	  	   	  	
	  	  	  	   	  });
	  	  	  	   	  }else{
	  	  	  	   	  	   var arr = $.cookie("cart") ? JSON.parse($.cookie("cart")) : [];
					   var isExist = false; //表示是否存在相同商品
					for (var i=0; i<arr.length; i++) {
						if (arr[i].id ==jsonData[index].id&&code==arr[i].code) {
								  	
								  	arr[i].num +=$(".amount").val()-0; //数量+1
							        isExist = true; //表示存在相同商品
							
						}
					}
					//如果不存在相同商品， 则添加该商品
					if (isExist == false) {
						obj.num =$(".amount").val()-0;
						obj.code = code;
						arr.push(obj);
					}
					
					//使用$.cookie保存数据
					$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
					/* console.log( $.cookie("cart") );*/
					 $("#wrapper-shade2").show(1000);
	  	  	  	   	 $("#continue").click(function(){
	  	  	  	   	 $("#wrapper-shade2").hide(1000);
	  	  	  	   	  	
	  	  	  	   	  });
	  	  	  	   	  }
	  	  	  	   	  
	  	  	  	   	  
	  	  	  	   	
					
					
	  	  	  	   });
	  	  	  	   
	  	  	  });
	  	  });
	  	
	  	
	  	   $(function(){
	  	   	//等比公式
				//小图width/大图width == 小区域width/大区域width
				$("#smallArea").width( $("#smallImg").width() * $("#bigArea").width() / $("#bigImg").width() );
				$("#smallArea").height( $("#smallImg").height() * $("#bigArea").height() / $("#bigImg").height() );
				
				//放大系数
				var scale = $("#bigImg").width() / $("#smallImg").width();
				
				//在小图中移动
				$("#smallImg").mousemove(function(e){
					$("#smallArea").show(); //显示小区域
					$("#bigArea").show(); //显示大区域
					
					
					var x = e.pageX - $("#smallImg").offset().left - $("#smallArea").width()/2;
					var y = e.pageY - $("#smallImg").offset().top - $("#smallArea").height()/2;
					
					//控制不超出左右边界
					if (x < 0){
						x = 0;
					}
					else if (x > $("#smallImg").width()-$("#smallArea").width()){
						x = $("#smallImg").width()-$("#smallArea").width();
					}
					//控制不超出上下边界
					if (y < 0){
						y = 0
					}
					else if (y > $("#smallImg").height()-$("#smallArea").height()) {
						y = $("#smallImg").height()-$("#smallArea").height();
					}
					
					//小区域移动
					$("#smallArea").css({left:x, top:y});
					
					//大图移动
					$("#bigImg").css({left: -scale*x,top: -scale*y});
				})
				
				//移除小图
				$("#smallImg").mouseleave(function(){
					$("#smallArea").hide(); //隐藏小区域
					$("#bigArea").hide(); //隐藏大区域*/
				})
	  	   	
	  	   	      //图片点击事件
	  	   	         $(".listitems").on("mouseenter","li",function(){
	  	   	         	
	  	   	        var src = $(this).find("img").attr("src");
                   	$(this).css("border","2px solid red").siblings().css("border","2px solid #FFF");
                  $("#smallImg img").attr("src",src);
                  $("#bigImg").attr("src",src);
	  	   	         	
	  	   	         	
	  	   	         })
                 
	  	   	      $("#next").click(function(){
	  	   	      	  
	  	   	      	  var  left=$(".listitems").position().left;
	  	   	      	  var   width = $(".listitems li").width();
	  	   	      	  $(".listitems").animate({left:-20})
	  	   	      	
	  	   	      });
	  	   	    $("#prev").click(function(){
	  	   	      	  
	  	   	      	  var  left=$(".listitems").position().left;
	  	   	      	    var   width = $(".listitems li").width();
	  	   	      	    
	  	   	      	  $(".listitems").animate({left:20});
	  	   	      	
	  	   	      });
	  	   	      
	  	   	        
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
	  	   })
	  	   
	  	   $(function(){
	  	   	
	  	   $(".discuss .title li").click(function(){
	  	   	 
	  	   	
	  	   	     $(this).addClass("active").siblings("li").removeClass("active");
	  	   	
	  	   	       var  index = $(this).index();
	  	   	       
	  	   	         if(index==0){
	  	   	         	$(".discuss-view1").css("display","block").siblings(".discuss-view2").css("display","none");
	  	   	         }
	  	   	         else{
	  	   	         	
	  	   	        $(".discuss-view2").css("display","block").siblings(".discuss-view1").css("display","none");
	  	   	         }
	  	   	
	  	   })
	  	   	
	  	   })
$(function(){
	  	 	setInterval(function(){
	  	   var arr = $.cookie("cart"); 	
	     	 if(arr!=undefined&&arr!="null"){
	     	 	
	     	 $(".cart span").html( JSON.parse(arr).length);
	     	}else{
	     		
	     	 $(".cart span").html("0");	
	     	}
	  	 	},100);
	  	 });	  	   