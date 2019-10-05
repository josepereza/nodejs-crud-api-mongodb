var request=require('request');

// Add a new document
var option_add = {
	headers: {"Connection": "close"},
    url: 'http://127.0.0.1:3000/notes',
    method: 'POST',
    json: true,
    body: {fieldID : 2, title : "Field B", content : "Plant Moon", nitrogen: 0.89}
}


function callback(error, response, data) {
    if (!error && response.statusCode == 200) {
        console.log('----info------',data);
    } else {
        console.log("Failed to call back")
        console.log(error)
    }
}

request(option_add, callback);
