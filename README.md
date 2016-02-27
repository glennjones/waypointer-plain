# waypointer

## IN DEVELOPMENT - API NOT STABLE

A plain html theme for the waypointer API auto documentation tool.

````bash
$ npm install waypointer-plain
```

``` javascript
const Waypointer = require('waypointer');

let options = {
    'swagger': {... a swagger json onject}
    'themes': [{
        theme: require('waypointer-plain')
    }]
}

waypointer.json( options, (err, waypointer) => {
     // do something with json
});

options.dist = 'a path for dist folder';

waypointer.buildDist( options, (err, waypointer) => {
     // do something when dist is built
});
```




## Lab test
The project has integration and unit tests. To run the test within the project type one of the following commands.
```bash
$ lab
$ lab -r html -o coverage.html
$ lab -r html -o coverage.html --lint
$ lab -r console -o stdout -r html -o coverage.html --lint
```

## Issues
If you find any issue please file here on github and I will try and fix them.