$('document').ready(function() {

  $('#poll-vote-submit').on('click', function() {
    var prefList = $('#poll-block-list').children('li');
    var url = window.location.href;
    $.ajax({
      type: "POST",
      url: url,
      data: cleanPref(prefList),
      error: function(error) {
        console.log('Ajax POST error:', error)
      },
      success: function(response) {
        console.log('Ajax POST successful.');
        window.location.replace('/main')
      }
    })
  });

  function cleanPref(list) {
    let out = {
      preferences: [],
      question_id: list.prevObject['0'].attributes['2'].value
    };
    for (var i = list.length - 1; i >= 0; i--) {
      let preference_id = $(list[i.toString()]).data().choiceId;
      out.preferences.push(Number(preference_id));
    }
    return out;
  }
})
