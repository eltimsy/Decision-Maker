$(document).ready(function() {
  let voteresult = [];
  let votechoice = [];
  let title = "";
  let winner = "";
  $('#history').on('click','.panel-primary', function(ev) {
    let question = $(this)['0'].attributes['1'].value;
    $.ajax({
      url: '/test',
      method: 'post',
      data: question
    }).done(function(data) {
      voteresult = data[0];
      votechoice = data[1];
      title = data[2];
      winner = data[3];
      console.log(voteresult, votechoice, title, winner);
      // let $graph = $(`
      // <body>
      //   <div id="myDiv" style="width: 480px; height: 400px;"></div>
      //   <script>`)
      // 	var data = [{
      // 		x: [votechoice],
      // 		y: [voteresult],
      // 		type: 'bar',
      // 		marker: {
      // 			color: 'rgb(52,28,173)'
      // 		}
      // 	}];
      //
      // 	var layout = {
      // 		title: title
      // 	}
      //
      // 	Plotly.newPlot('myDiv', data, layout);(`
      //   </script>
      // </body>
      // `);
      // $('div#history').append($graph);
    });
  })
})
