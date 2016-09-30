'use strict';

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
  $('#login-form').on('click','#login-submit', function(ev) {
    ev.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let login = {
      username: username,
      password: password
    }

    $('.error').text('');
    $('.error').fadeIn();
    $.ajax({
      url: '/home/login',
      method: 'post',
      data: login
    }).done(function(data) {
      if(data !== 'fail') {
        window.location = "/main";
      } else {
        $('.error').text("Invalid username or password");
        $('.error').fadeOut(1500);
      }
    }).fail(function(data){
    });
  });

  $('#register-form').on('click','#register-submit', function(ev) {
    ev.preventDefault();
    let username = document.getElementById('username2').value;
    let password = document.getElementById('password2').value;
    let conpassword = document.getElementById('confirm-password').value;
    let email = document.getElementById('email2').value;
    let login = {
      username: username,
      password: password,
      email: email
    }
    console.log(login);
    $('.error').text('');
    $('.error').fadeIn();
    if(!username || !password || !email){
      $('.error').text("Fill out all fields");
      $('.error').fadeOut(1500);
    } else if(password !== conpassword) {
      $('.error').text("Passwords don't match");
      $('.error').fadeOut(1500);
    } else {
      $.ajax({
        url: '/home/register',
        method: 'post',
        data: login
      }).done(function(data) {
        if(data !== 'fail') {
          window.location = "/main";
        } else {
          $('.error').text("Username already exists");
          $('.error').fadeOut(1500);
        }
      }).fail(function(data){
      });
    }
  });

});
