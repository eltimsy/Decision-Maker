'use strict';

function sendCongratsEmail(mailgun, email, admin_url, poll_url){
  var data = {
    from: 'RocketVoters <rocketvoters@rendition.club>',
    to: email,
    subject: "Here are the links for your new poll:",
    text: `See your poll here: localhost:8080/result/${admin_url} \n Invite your friends to vote here: localhost:8080/polls/voter/${poll_url}`
  };
  mailgun
    .messages()
    .send(data, function (error, body) {
      console.log(body);
    });
}

function inviteFriendsEmail(mailgun, knex, username, question_id, poll_url) {
  function sendEmail(username, emails) {
    emails.forEach((email) => {
      var data = {
        from: `${username} <rocketvoters@rendition.club>`,
        to: email['voter_email'],
        subject: "Hey! Come to vote for this poll!",
        text: `Your friend invites you to Come to vote for this poll: localhost:8080/polls/voter/${poll_url}`
      };
      console.log(email['voter_email']);
      mailgun
        .messages()
        .send(data, function (error, body) {
          console.log(body);
        });
    });
  }

  knex('voter_emails')
  .where('question_id', question_id)
  .select('voter_email')
  .then((result) => {
    sendEmail(username, result);
  })
  .catch((error) => {
    console.log(error);
  });
}

module.exports = {
  sendCongratsEmail: sendCongratsEmail,
  inviteFriendsEmail: inviteFriendsEmail
}
