console.log("Request data...");

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Preparing data...");
		
		const requestedData = {
			server: "aws",
			port: 2000,
			status: true
		};
		
		setTimeout(() => {
			requestedData.modified = true;
			console.log("Data received", requestedData);
			resolve(requestedData);
		}, 2000);
	}, 2000);
});

promise.then(data => {
	console.log("Promise resolve!", data);
});