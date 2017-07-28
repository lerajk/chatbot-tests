//for facebook validation

var app = require('./app.js'); 
app.get('/webhook', (req,res) => {
	if(req.query['hub.mode'] && req.query['hub.verify_token'] === 'tuxedo_cat'){
		res.status(200).send(req.query['hub.challenge']);
	} else {
		res.status(403).end();
	}
});

//handling messages
app.post('/webhook', (req,res) => {
	console.log(req.body);
	if(req.bodyobject === 'page'){
		req.body.entry.forEach((entry) => {
			entry.messaging.forEach((event) => {
				if(event.message && event.message.text){
					sendMessage(event);
				} //if
			}); //entry.messaging

		}); //forEach
		res.status(200).end();
	} // 'page'
}); 