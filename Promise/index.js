console.log("Request data...");

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Preparing data...");
		
		const requestedData = {
			server: "aws",
			port: 2000,
			status: true
		};
		
		resolve(requestedData);
	}, 2000);
});

promise
.then(data => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			data.modified = true;
			resolve(data);
		}, 2000);
	});
})
.then((clientData) => {
	console.log("Base client data", clientData);
	clientData.fromPromice = true;
	return clientData;
})
.then((data) => {
	console.log("Modified chain promice data", data);
})
.catch(error => console.log("Error: ", error))
.finally(() => console.log("Finally"));