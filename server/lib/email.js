'use strict';

function sendCongratsEmail(mailgun, email, admin_url, poll_url){
  var data = {
    from: 'RocketVoters <rocketvoters@rendition.club>',
    to: email,
    subject: "Here are the links for your new poll:",
    text: `See your poll here: ${admin_url} \n
           Invite your friends to vote here: localhost:8080/polls/voter/${poll_url}`
  };
  mailgun
    .messages()
    .send(data, function (error, body) {
      console.log(body);
    });
}

function inviteFriendsEmail(mailgun, knex, username, question_id) {
  function sendEmail(username, emails) {
    emails.forEach((email){
      var data = {
        from: `${username} <rocketvoters@rendition.club>`,
        to: email,
        subject: "Hey! Come to vote for this poll!",
        text: `Come to vote for this poll: localhost:8080/polls/voter/${poll_url}`
      };
      mailgun
        .messages()
        .send(data, function (error, body) {
          console.log(body);
        });
    });
  }

  knex('voter_email')
  .where(question_id, question_id)
  .select('voter_email')
  .then((result) => {
    sendEmail(username, result);
  });
  .catch((error) => {
    reject(error);
  });
}

module.exports = {
  sendCongratsEmail: sendCongratsEmail,
  inviteFriendsEmail: inviteFriendsEmail
}
