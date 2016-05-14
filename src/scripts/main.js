'use strict';
(function() {

    console.log(true);

    fetch('/api/data', { method: 'get' })
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            console.log('--->', json);
            document.querySelector('.result').innerHTML = ('data: ' + JSON.stringify(json));
        })
        .catch(function(err) {
            console.log('error ---> ', err);
        });

}());
