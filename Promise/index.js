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
			resolve();
		}, 2000);
	}, 2000);
});

promise.then(() => {
	console.log("Promise resolve!");
});