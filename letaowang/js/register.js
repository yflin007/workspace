$(function(){
	  		 
	  		    var flag1 = false; //手机号码
				var flag2 = false; //密码
				var flag3 = false; //确认密码
				var flag4 = false; //推荐人手机号
				var flag5 = false; //图片验证码
				var flag6 = false; //短信验证码
				 var verifyCode = new GVerify("v_container");//验证码

		
	  	    $("input").eq(0).keyup(function(){
	  	    	
	  	    	var reg =/^((13[0-9])|(14[5|7])(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/;
					
					if(reg.test(this.value)){
							$(this).siblings(".toast").html("");    
							flag1 = true;
					}else{
					  	$(this).siblings(".toast").html("* 输入的手机号码格式错误");   
					  	    flag1 = false;
					}
	  	    })
	  	    $("input").eq(1).keyup(function(){
	  	    	var reg =/^.{6,20}$/
				 	var pwd =$(this).val();
				 	var reg1 =/\d/;
				 	var reg2 =/[a-zA-Z]/;
				 	var reg3 =/_/;
				 	 
				 	if(reg.test(pwd)==true){
				 	  	$(this).siblings(".toast").html("");   
				 	    flag2 = true;
				 	}else{
				 	 $(this).siblings(".toast").html("* 输入的密码不合法");   
				 	    flag2 =  false;
				 	}
				 
	  	    	
	  	    	
	  	    });
	  	    
	  	    $("input").eq(2).keyup(function(){
	  	    	
	  	    	 if($(this).val()== $("input").eq(1).val()){
					 $(this).siblings(".toast").html("");  
					  
					  flag3 = true;
					  
					 }
					 else{
					 	
					  $(this).siblings(".toast").html("* 两次输入的密码不一致"); 
					  
					  flag3 = false;
					 }
				 
	  	    	
	  	    	
	  	    });
	  	    $("input").eq(3).keyup(function(){
	  	    	
	  	    	var reg =/^((13[0-9])|(14[5|7])(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/;
					
					if(reg.test(this.value)){
							$(this).siblings(".toast").html("");   
						   flag4 = true;	
							
					}else{
					  	$(this).siblings(".toast").html("* 输入的手机号码格式错误");  
					  	
					  	 flag4 = false;
					}
	  	    });
	  	    
	  	    ////验证码
			
				
	  	    $("input").eq(4).blur(function(){
	  	    	
	  	    	    fn();
	  	    	
	  	    });
	  	    $("input").eq(4).focus(function(){
	  	    	
	  	    $("input").eq(4).siblings(".toast").html("");   
	  	    	
	  	    });
	  	    
	  	   
	  	   
			 
				function fn(){
					
					var res = verifyCode.validate($("input").eq(4).val());
					
						if(res){
						
						$("input").eq(4).siblings(".toast").html("");   
					    flag5 = true;
			    		}else{
						$("input").eq(4).siblings(".toast").html("* 输入的验证码不正确");  
						flag5 = false;
			}
					
					/*if ($("input").eq(4).val() ==  $(".verify-imgV").val()){
					
					
					}
					else {
						
						
						
					}*/
				}
				
				$("#reg").click(function(){
					  
					    var  checked =$("#check").is(':checked');
					   
					  //用户名
					 
					   
					   
					  if(flag1&&flag2&&flag3&&flag4&&flag5&&checked){
					  	
					  	   var  tel   = $("input").eq(0).val();
					       var  pwd   = $("input").eq(1).val();
					       var  retel   = $("input").eq(3).val();
					  	  $.ajax({
                               type: "post",
                               data:{"tel":tel,"pwd":pwd,"retel":retel},
                               url: 'http://127.0.0.1/letaowang/register.php',
                              success: function (data) {
                                  var  obj= JSON.parse(data);
                                  
                                 if(obj.status==1){
                                    alert(obj.msg);
                                    location.href="login.html";
                                 }else{
                                 	
                                 	alert(obj.msg);
                                 	
                                 }
                                  
                             }
                          }
                           );
					  	 
					  	 
					  	 
					  }else{
					  	
					  	 if(!checked){
					  	 alert("请选择同意《会员服务协议》");
					  	 }else{
					      alert("输入有误");
					  	 }
					}
				})
	  	});