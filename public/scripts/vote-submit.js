$('document').ready(function() {

  $('#poll-vote-submit').on('click', function(event) {
    event.preventDefault();
    var prefList = $('#poll-block-list').children('li');
    var email = $('#email-confirm').val();
    var url = window.location.href;
    var voteData = cleanPref(prefList, email);
    $('.error2').text('');
    $('.error2').fadeIn();
    $.ajax({
      type: "POST",
      url: url,
      data: voteData,
      error: function(error) {
        console.log('AJAX POST error:', error);
      },
      success: function(response) {
        if (response !== 'success') {
          $('.error2').text("Invalid email address");
          $('.error2').fadeOut(1500);
          console.log('Ajax POST successful.');
          console.log('Vote failed.');
        } else {
          console.log('Vote successful.');
          window.location.replace('/main');
        }
      }
    });
  });

  function cleanPref(list, email) {
    let out = {
      email: email,
      question_id: list.prevObject['0'].attributes['2'].value,
      preferences: []
    };
    for (var i = list.length - 1; i >= 0; i--) {
      let preference_id = $(list[i.toString()]).data().choiceId;
      out.preferences.push(Number(preference_id));
    }
    return out;
  }
})
