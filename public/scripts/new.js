'use strict';

$(function() {
  /* '/new': add & delete rows */
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

//add and delete rows for email list
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
    ev.preventDefault();

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

    //question & options validation
    function validateForm(){
      if (!$('#question').val()) {
        $('#empty-q-warning').show().fadeOut(3000);
        return false;
      }
      else if (choicesArray.length < 2) {
        $('#fewer-o-warning').show().fadeOut(3000);
        choicesArray.forEach((choice) => {
          if (choice === "") {
            $('#empty-o-warning').show().fadeOut(3000);
            return false;
          }
        });
        return false;
      } else {
        return true;
      }
    }

    if (validateForm()) {
      var dataObject = {
        question: $('#question').val(),
        choices: choicesArray,
        description: descripArray,
        emails: emailsArray
      };
      $.ajax({
        type: 'POST',
        url: '/createpoll',
        data: dataObject,
        error: function(error) {
          console.log('AJAX POST error:', error);
        },
        success: function(response) {
          window.location='/main';
        }
      });
    }
  });
});
