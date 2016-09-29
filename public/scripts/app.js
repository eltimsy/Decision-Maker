
$(function() {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });

  /*$('.login').on('submit','.login-form', function(ev) {
    let login = $(this).serialize();
    ev.preventDefault();
    $.ajax({
      url: '/login',
      method: 'post',
      data: login
    }).done(function(data) {
    });
  });*/
});

/*function checkUser() {
  $.ajax({
    url: '/auth',
    method: 'get',
    success: function(data) {
      if(!data.username) {
      } else {
      }
    },
    error: function(request, status, error) {
      alert(request.responseText);
    }
  });
}*/

/* Login page panel switch*/
$(function() {
    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
});

/* create page add new option */
// $(function() {
//   $('.btn').click(fucntion( {
//
//   }));
// });
$(document).ready(function(){
 var i=1;
$("#add_row").click(function(){
 $('#addr'+i).html("<td>"+ (i+1) +"</td><td><input name='name"+i+"' type='text' placeholder='Option' class='form-control input-md'  /> </td>");

 $('#tab_logic').append('<tr id="addr'+(i+1)+'"></tr>');
 i++;
});
$("#delete_row").click(function(){
  if(i>1){
$("#addr"+(i-1)).html('');
i--;
}
});

});
