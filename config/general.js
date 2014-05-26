module.exports = {
  'notifications' : {
    enabled: false, //if disabled, no notifications will be sent
    to: ['jason.hooten@gmail.com'], //default notification list if no alert_to is specified for host or url
    postmark : {
      from: 'jason.hooten@gmail.com',
      api_key : 'your-postmark-key-here'
    }
  }
};
