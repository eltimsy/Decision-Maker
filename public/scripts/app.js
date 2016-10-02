'use strict';

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

  var i=1;
  $("#add_row1").click(function(){
    $('#opp'+i).html("<td>"+
      (i+1) +
      "</td><td><input name='option"+i+"' type='text' placeholder='Option' class='form-control input-md option'  /> </td><td><input  name='description_"+i+"' type='text' placeholder='Description'  class='form-control input-md description'></td>");

    $('#tab_logic1').append('<tr id="opp'+(i+1)+'"></tr>');
    i++;
  });
  $("#delete_row1").click(function(){
    if(i>1){
      $("#opp"+(i-1)).html('');
      i--;
    }
  });

  var j=1;
  $("#add_row2").click(function(){
    $('#email'+j).html("<td>"+ (j+1) +"</td><td><input name='email"+j+"' type='text' placeholder='email address' class='form-control input-md email'  /> </td>");

    $('#tab_logic2').append('<tr class="email-tr" id="email'+(j+1)+'"></tr>');
    j++;
  });
  $("#delete_row2").click(function(){
    if(j>1){
      $("#email"+(j-1)).html('');
      j--;
    }
  });

  $('#newpoll-submit').on('click', function(ev) {
    var choicesArray = [];
    var descripArray = [];
    var emailsArray = [];
    var quantity = $('#newpoll')['0'].length / 2 - 1;
    var quantity2 = $('#email-list-form')['0'].length;

    for (var i = 0; i < quantity; i++) {
      choicesArray.push($(`#opp${i}`).find('.option').val());
      descripArray.push($(`#opp${i}`).find('.description').val());
    }

    for (var i = 0; i < quantity2; i++) {
      emailsArray.push($(`#email${i}`).find('.email').val());
    }

    var dataObject = {
      question: $('#question').val(),
      choices: choicesArray,
      description: descripArray,
      emails: emailsArray
    }

    $.ajax({
      type: 'POST',
      url: '/createpoll',
      data: dataObject,
      error: function(error) {
        console.log('AJAX POST error:', error);
      },
      success: function(response) {
        window.location.replace('/main');
      }
    })
  })


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
