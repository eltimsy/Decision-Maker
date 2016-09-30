$(document).ready(function() {
  let voteresult = [];
  let votechoice = [];
  let title = "";
  let winner = "";
  $('#history').on('click','.panel-primary', function(ev) {
    let question = $(this)['0'].attributes['1'].value;
    $.ajax({
      url: '/graph',
      method: 'post',
      data: question
    }).done(function(data) {
      voteresult = data[0];
      votechoice = data[1];
      title = data[2];
      winner = data[3];
      console.log(voteresult, votechoice, title, winner);
      $('div.poll-container').empty();
      let $graph = $(`
        <div id="myDiv" style="width: 480px; height: 400px;"></div>
      `);
      $('div.poll-container').append($graph);
      var data = [{
        x: votechoice,
        y: voteresult,
        type: 'bar',
        marker: {
          color: 'rgb(52,28,173)'
        }
      }];

      var layout = {
        title: title,
        width: 700,
        font: {
          family: 'Courier New, monospace',
          size: 25,
          color: 'teal'
        },
        paper_bgcolor: '#eceef7',
        plot_bgcolor: 'white'
      }
      setTimeout(() => Plotly.newPlot('myDiv', data, layout));
    });
  })
})
