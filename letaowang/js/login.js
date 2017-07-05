 $(function(){
           	  
           $(".loginBtn").click(function(){
           	
           	  var  tel  = $("#user").val();
           	  var  pwd   = $("#pwd").val();
					  	  $.ajax({
                               type: "post",
                               data:{"tel":tel,"pwd":pwd},
                               url: 'http://127.0.0.1/letaowang/login.php',
                              success: function (data) {
                                  var  obj= JSON.parse(data);
                                  
                                 if(obj.status==1){
                                    $.cookie("tel", tel, { expires:7});
                                    
                                    if($("#reg").prop("checked")){
                                        
                                      $.cookie("name",tel,{ expires:7});
                                      $.cookie("pwd",pwd,{ expires:7});
                                    	
                                    }else{
                                       var  name ="";
                                       var  pasw = "";
	  	  	                            $.cookie("name",name,{ expires:7}); 
	  	  	                            $.cookie("pwd",pasw,{ expires:7}); 	
                                    	
                                    }
                                    
                                    location.href="home.html";
                                 }else{
                                 	alert(obj.msg);
                                 }
                                  
                             }
                          }
                           );
           	  
           	
           });
           
              var cookieName=$.cookie("name");
              var cookiePwd=$.cookie("pwd");	
              
             if(cookieName&&cookieName.length>0){
             	$("#reg").prop('checked', true);
             	  $("#user").val(cookieName);
                  $("#pwd").val(cookiePwd);
           	  
             }else{
                $("#reg").prop('checked',false);
             }
           })