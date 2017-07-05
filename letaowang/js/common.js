	$(function(){
		
		    check();
		    
	  	 	setInterval(function(){
	  	    $("#ul").empty();
	  	     check();
	  	 	},100);
	  	  function check(){
	  	  	var arr = $.cookie("cart"); 
	  	  	var  sum=0;//商品总价
	  	  	var  count=0;//商品数量
	     	 if(arr){
	     	    arr = JSON.parse(arr);
	     	  if(arr.length==0){
	     	  	
	     	   $(".cart span").html("0");
	     	   
	     	   $("#wrapper-bottom  .cart").unbind();
	     	   
	     	    $("#wrapper-bottom  .cart").mouseenter(function(){
	      	
	      	  $(".shopCart_detail ").css("display","block");
	      	
	      });
	      
	      $("#wrapper-bottom  .cart").mouseleave(function(){
	      	
	      		  $(".shopCart_detail").css("display","none");
	      });
	     	  	
	     	  }else{
	     	  	  $("#wrapper-bottom  .cart").unbind();
	     	   
	     	    $("#wrapper-bottom  .cart").mouseenter(function(){
	      	
	            $(".cs_list").css("display","block");
	      	
	             });
	      
	          $("#wrapper-bottom  .cart").mouseleave(function(){
	      		  $(".cs_list").css("display","none");
	        });
	     	  
	     	  
	     	  
	     	   for(var i=0;i<arr.length;i++){
	     	   	  
	     	   	 $("<li><a href=detail.html?id="+arr[i].id +">"
	     	   	 +"<img src="+arr[i].img+" />"
	     	   	 +"<h3>"+arr[i].title+"</h3></br>"
                 +"<strong>"+arr[i].code+"</strong></a>"
                 +"<p>¥"+arr[i].price+".00X"+arr[i].num+"</p></li>").appendTo($("#ul"));
                 sum +=arr[i].num*arr[i].price;
                 count +=arr[i].num;
                 
	     	   }
	     	   $("#count").html(count);
	     	   $("#total").html(sum+".00");
	     	   $(".cart span").html(arr.length);
	     	}
	     	  }
	     	  else{
	     		
	     	 $(".cart span").html("0");	
	     	   $("#wrapper-bottom  .cart").unbind();
	     	  $("#wrapper-bottom  .cart").mouseenter(function(){
	      	
	      	  $(".shopCart_detail ").css("display","block");
	      	
	        });
	      
	        $("#wrapper-bottom  .cart").mouseleave(function(){
	      	
	      		  $(".shopCart_detail").css("display","none");
	      });
	     	}
	  	  }
	  	  
	  	  var str = $.cookie("tel");
	  	  
	  	  if(str){
	  	  	$("#wrapper-top p span").html(str+"");
	  	  	
	  	  	 if(str==""){
	  	  	 $("#wrapper-top p span").html("匿名用户 ");	
	  	  	 $(".menu a").eq(0).html("登录");
	  	  	 }
	  	    $(".menu a").eq(0).html("注销");
	  	    
	  	    $(".menu a").eq(0).attr({"href":"javascript:;","target":"_self","value":"0"});
	  	    
	  	  }else{
	  	  	$("#wrapper-top p span").html("匿名用户 ");
	  	  	$(".menu a").eq(0).html("登录");
	  	  	$(".menu a").eq(0).attr({"href":"login.html","target":"_blank","value":"1"});
	  	  }
	  	  $(".menu a").eq(0).click(function(){
	  	  	      console.log($(this).text());
	  	  	      console.log($.cookie("tel"));
	  	  	      console.log($(this).attr("value"));
	  	  	  if($(this).attr("value")=="0"){
	  	  	  	 var  tel ="";
	  	  	    $.cookie("tel", tel, { expires:7});
	  	  	  	location.href="home.html";
	  	  	   $.cookie("name",tel,{ expires:7}); 
	  	  	   $.cookie("pwd",tel,{ expires:7}); 	
	  	  	  	
	  	  	  }
	  	  });
	  	  
	  	  
	  	  
	  	 });
	
