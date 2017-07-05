 $(function(){
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
	  	 
	  	 //操作购物车 
	  	$(function(){
	  		
	  		refresh();
	  		 
	  		 function refresh(){
	  		 	
	  		     	var arr = $.cookie("cart");
					 console.log(arr);
					if (arr) {
						
					 
						arr = JSON.parse(arr); ///JSON解析
						
						 if(arr.length==0){
					  	
					  	 $("#wrapper-cart").css("display","none");
	  		             $("#wrapper-cartNO").css("display","block");
	  		              $(".cart span").html("0");	
					  	
					  }else{
					  	 $("#wrapper-cart").css("display","block");
	  		             $("#wrapper-cartNO").css("display","none");
					  	 $(".cart span").html(arr.length);
					  }
						
						$(".shoppingOrder table").empty();
						
					
						var total =0;
						var count = 0;
						for (var i=0; i<arr.length; i++){
							var obj = arr[i]; //每个商品数据
						  
						     var  tr = $("<tr></tr>").appendTo(".shoppingOrder table");
							 var  td1= $("<td width='440'></td>").appendTo(tr);
							 var  td2= $("<td width='150'></td>").appendTo(tr); 
							  var  td3= $("<td width='130'></td>").appendTo(tr);
					          var  td4= $("<td width='130'></td>").appendTo(tr);
					   
					    var  td5= $("<td width='90'></td>").appendTo(tr);
					     var checked;
					    if (obj.checked) {
								checked ="<input class='check' type='checkbox' checked='checked' />";
							}else {
							  checked ="<input class='check' type='checkbox' />";
							}
						
					 $("<div class='shoppingOrder_chk' class='check'>"   
						+checked
						
						+"<label for='selectItem_1'></label>"
						+"</div>").appendTo(td1);	
						
					$("<div class='shoppingOrder_img'>"
					  +"<a  href=detail.html?id="+obj.id+" target='_blank'>"
					  +"<img src="+obj.img +"  />"
					  +"</a></div>").appendTo(td1);
					 
					
					  
			        $("<div class='shoppingOrder_about'>"
					+"<div class='shoppingOrder_inner'><a href=detail.html?id="+obj.id+" target='_blank'>"+obj.title+"</a></div>"
					+"<div class='shoppingOrder_info'>"
					+"<span>尺寸："+obj.code+"</span>"
					+"</div>").appendTo(td1); 
					
					 $("<div class='shoppingOrder_price'>¥"+obj.price+"</div>").appendTo(td2);
					 
				     $("<div class='tcount'>"
					 +"<input type='button' value='-' class='sub' />"
					 +"<input type='text' value="+obj.num+ " readonly='readonly'/>"
					 +"<input type='button' value='+' class='add'/></div>").appendTo(td3);
					$("<td width='130'><div class='shoppingOrder_sum'>￥"+obj.price*obj.num+"</div></td>").appendTo(td4);
				     $("<a href='javascript:void(0)' class='del'>删除</a>").appendTo(td5);
					
					       if (obj.checked) {
								total += obj.price * obj.num;
								count += obj.num;
							}
					
						}
					  
					  
					}else{
						
						 $("#wrapper-cart").css("display","none");
	  		             $("#wrapper-cartNO").css("display","block");
	  		             $(".cart span").html("0");	
					}
	  		      $(".order_settlement strong").html("应付金额"+total);
	  		      $(".order_settlement span i").html(count);
	  		    
	  		      
	  		      if($(":checked").length>0){
	  		      	 $(".order_settlement a").addClass("active");
	  		      	
	  		      }else{
	  		      	
	  		      	  $(".order_settlement a").removeClass("active");
	  		      	
	  		      }
	  		      
	  		 }
	  		 
	  		   
	  		 //删除
				$(".shoppingOrder table").on("click", ".del", function(){
					
					var index = $(this).index(".del");
				
					
					//获取cookie，删掉第index个商品
					var arr = JSON.parse($.cookie("cart"));
					arr.splice(index, 1); //删除数组arr的第index个元素
					$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
					
					refresh(); //刷新页面
				})
				//+ 
				$(".shoppingOrder table").on("click", ".add", function(){
					var index = $(this).index(".add");
					
					var arr = JSON.parse($.cookie("cart"));
					arr[index].num++; 
					$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
					
					refresh(); //刷新页面
				})
				
				//-
				$(".shoppingOrder table").on("click", ".sub", function(){
					var index = $(this).index(".sub");
					
					var arr = JSON.parse($.cookie("cart"));
					arr[index].num--; 
					if (arr[index].num < 1) {
						arr[index].num = 1;
					}
					$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
					
					refresh(); //刷新页面
				})
	  		
	  		
	  		   //勾选/取消勾选
				$(".shoppingOrder table").on("click", ".check", function(){
					var index = $(this).index(".check");
					 
					var arr = JSON.parse($.cookie("cart"));
					arr[index].checked = !arr[index].checked;
					$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
					
					isAllChecked();
					refresh();
				})
				
				
				//判断是否全选了
				isAllChecked();
				function isAllChecked(){
					var arr = JSON.parse($.cookie("cart"));
					
					var sum = 0;
					
					for (var i=0; i<arr.length; i++) {
						sum += arr[i].checked;
					}
					
					//如果商品全部选中了
					if (sum == arr.length) {
						$(".selectAll").prop("checked", true); //全选
					}
					else {
						$(".selectAll").prop("checked", false); //不全选
					}
					
				}
				
				//全选
				$(".selectAll").click(function(){
					var arr = JSON.parse($.cookie("cart"));
					//console.log($("#allCheck").prop("checked"));
					
					for (var i=0; i<arr.length; i++) {
						if ( $(".selectAll").prop("checked") ){
							arr[i].checked = true;
						}
						else {
							arr[i].checked = false;
						}
					}
					$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
					
					refresh();
				})
				
				//删除选中
				$("#delSelect").click(function(){
					var arr = JSON.parse($.cookie("cart"));
					var newArr = [];
					for (var i=0; i<arr.length; i++) {
						if (!arr[i].checked) {
							newArr.push(arr[i]);
						}
					}
					
					$.cookie("cart", JSON.stringify(newArr), {expires:30, path:"/"});
					refresh();
				})
	  		
	  		     $("#clearAll").click(function(){
	  		     	
	  		     	var  clearArr=[];
	  		     	
	  		     	$.cookie("cart", JSON.stringify(clearArr), {expires:30, path:"/"});
					refresh();
	  		         
	  		     	
	  		     });
	  	})