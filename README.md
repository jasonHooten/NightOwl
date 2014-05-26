# NightOwl

[![Build Status](https://travis-ci.org/jasonHooten/NightOwl.svg)](http://travis-ci.org/jasonhooten/nightowl)

## Installation

nightowl depends on the following modules:

- [ejs](https://github.com/visionmedia/ejs)
- [express](https://github.com/visionmedia/express)
- [moment](http://momentjs.com/)
- [node_redis](https://github.com/mranney/node_redis)  (if you are using redis storage)

Make sure you install those dependencies:

    $ npm install


### Redis

Installation and configuration

get redis from redis.io
launch the server:
    $ redis-server redis.conf


## Run NightOwl

### Run the monitor server

    $ node server.js

or more probably you would want to use **forever** to run it in the background

    $ forever start server.js

### Run the web app

    $ forever start webserver/app.js 3000 #(where 3000 is the port you want to use).

# Tests

Run the tests with mocha:

    $ npm test


## History

**1.0. Initial Creation using Watchmen as a starting point**


## License

Copyright (c) 2014 Jason Hooten

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
