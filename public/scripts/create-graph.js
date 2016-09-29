$(document).ready(function() {
  $('#history').on('click','.panel-primary', function(ev) {
    console.log($(this)['0'].attributes['1'].value);
  })
})
