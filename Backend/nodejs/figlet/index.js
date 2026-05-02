const figlet = require('figlet');

figlet('Welcome Mukesh', function(err, data) {
  if (err) {
    console.error('Error occurred:', err);
    return;
  }
  console.log(data);
});