// $(function() {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });
//
//   $('.login').on('submit','.login-form', function(ev) {
//     let login = $(this).serialize();
//     ev.preventDefault();
//     $.ajax({
//       url: '/login',
//       method: 'post',
//       data: login
//     }).done(function(data) {
//     });
//   });
// });

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

$(function() {

  //   $('#form-signin-heading').click(function(e) {
	// 	$(".form-signin").delay(100).fadeIn(100);
 // 		$(".form-register").fadeOut(100);
	// 	$('#form-signup-heading').removeClass('active');
	// 	$(this).addClass('active');
	// 	e.preventDefault();
	// });
	$('#form-signup-heading').click(function(e) {
		$(".form-signin").delay(100).fadeIn(100);
 		$(".register-form").fadeOut(100);
		$('#form-signin-heading').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});
