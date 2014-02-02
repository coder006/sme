$(document).ready(function () {
	


	$('#loginbutton').click(function(){
		data = {'uname':$('#uname').val(),'pass':$('#pass').val()}
		$.ajax({
			type:"POST",
			url:"http://www.ubiplug.com:8080/sme/login/",
			data: data,
			success: function(data){
				console.log(data);
				window.flag = data;
				if (data=="1") {window.location='http://10.3.8.117/sme/sme.html';}
				else
					alert("Please enter the correct details");
			},
  			dataType: 'text'
		});
		
	});


});