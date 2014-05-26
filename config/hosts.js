var one_tick = 20; //seconds

//service name must be unique for a certain host.
//host name must be unique
module.exports =
  [
    {
      name:'Qvinci Marketing',
      host: 'www.qvinci.net',
      port:80,
      ping_service_name: 'http',
      timeout:5000,
      ping_interval: one_tick,
      failed_ping_interval: one_tick / 3,
      warning_if_takes_more_than: 1300, //miliseconds
      enabled: true,
      alert_to: ['jasonh@qvinci.com'], //you can include a different email recipient per host
      services : [
        {
          name: 'home',
          method: 'get',
          url : '/',
          expected: {statuscode: 302}
        },
      ]
    }
  ];