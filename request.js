var request=require('request');

var options = {
	headers: {"Connection": "close"},
    url: 'http://127.0.0.1:3000/notes',
    method: 'POST',
    json: true,
    body: {title : "New Note", content : "Test !!!"}
};

function callback(error, response, data) {
    if (!error && response.statusCode == 200) {
        console.log('----info------',data);
    } else {
        console.log("Failed to call back")
        console.log(error)
    }
}

request(options, callback);
