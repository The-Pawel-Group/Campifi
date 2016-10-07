// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var session = require('cookie-session');
// var bodyParser = require('body-parser');
// var auth = require('./auth');
// var request = require('request');
//
//
//
// module.exports = {
//
//     apiData: function() {
//       return new Promise(function (resolve, reject){
//
//         request({
//           url:'https://www.googleapis.com/geolocation/v1/geolocate?key=' + process.env.GEOLOCATION_KEY,
//           qs:
//           method: 'POST',
//           headers:
//         }), function(error, response, body) {
//             if (error) {
//                 reject('Error:', error);
//             }
//             if (response.statusCode !== 200) {
//                 reject('Invalid Status Code Returned:', response.statusCode);
//             }
//             resolve(body)
//         });
//       })
//     }
//
// }

// //Load the request module
// var request = require('request');
//
// //Lets configure and request
// request({
//     url: 'http://modulus.io', //URL to hit
//     qs: {from: 'blog example', time: +new Date()}, //Query string data
//     method: 'GET', //Specify the method
//     headers: { //We can define headers too
//         'Content-Type': 'MyContentType',
//         'Custom-Header': 'Custom Value'
//     }
// }, function(error, response, body){
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(response.statusCode, body);
//     }
// });
