$(function() {

  $('.login-form').on('submit','.logintest', function(ev) {
    alert(event.isDefaultPrevented());
    ev.preventDefault();
    alert(event.isDefaultPrevented());
    let login = $(this).serialize();
    console.log(ev+"hhahahahahah");


    $.ajax({
      url: '/login',
      method: 'post',
      data: login
    }).done(function(data) {
      console.log(data);
    });
  });
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
