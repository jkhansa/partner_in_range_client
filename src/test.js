var expect  = require('chai').expect;
var request = require('request');

const hostname = 'http://localhost';
const client_port = 3000;
    describe ('Testing API', function() {
        it('Get Partners in range of 10KM', function(done) {
            request(hostname+':'+server_port+'/api/partners_in_range?range=10&lat=51.5144636&lng=-0.142571' ,
             function(error, response, body) {
                expect(body).to.equal(expected_response_10k);
                done();
            });
        });
    });
    describe ('Testing Client App', function() {
      it('Response Status 200', function(done) {
        request(hostname+':'+client_port ,
         function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
      });
    });
