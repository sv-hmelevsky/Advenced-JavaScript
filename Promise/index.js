console.log("Request data...");

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
	}, 2000);
}, 2000);