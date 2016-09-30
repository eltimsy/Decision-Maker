$('document').ready(function() {

  $('#poll-vote-submit').on('click', function(event) {
    var prefList = $('#poll-block-list').children('li');
    var email = $('#email-confirm').serialize();
    var url = window.location.href;
    var voteData = cleanPref(prefList, email);

    $.ajax({
      type: "POST",
      url: url,
      data: voteData,
      error: function(error) {
        console.log('AJAX POST error:', error);
      },
      success: function(response) {
        console.log('Ajax POST successful.');
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
