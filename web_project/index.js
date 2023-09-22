var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shadabsalim197420052005@gmail.com',
    pass: 'khml vsyo fhpm mnmq'
  }
});

var mailOptions = {
  from: 'shadabsalim197420052005@gmail.com',
  to:  id="email",
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});