'use strict';

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



$(document).ready(function(){
  /* '/new': add & delete rows */
  var i=1;
  $("#add_row1").click(function(){
    $('#opp'+i).html("<td>"+ (i+1) +"</td><td><input name='option"+i+"' type='text' placeholder='Option' class='form-control input-md option'  /> </td>");

    $('#tab_logic1').append('<tr id="opp'+(i+1)+'"></tr>');
    i++;
  });
  $("#delete_row1").click(function(){
    if(i>1){
      $("#opp"+(i-1)).html('');
      i--;
    }
  });

//add and delete rows for email list
  $("#add_row2").click(function(){
    $('#email'+i).html("<td>"+ (i+1) +"</td><td><input name='option"+i+"' type='text' placeholder='Option' class='form-control input-md option'  /> </td>");

    $('#tab_logic2').append('<tr id="email'+(i+1)+'"></tr>');
    i++;
  });
  $("#delete_row2").click(function(){
    if(i>1){
      $("#email"+(i-1)).html('');
      i--;
    }
  });

  /* todo: '/new' prevent blank input*/




});
