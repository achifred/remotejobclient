export const Fetch = async (url, updateCb) => {
	const res = await fetch(url);
	const json = await res.json();
	updateCb(json);
};
export const Fetchall = async url => {
	try {
		const res = await fetch(url);
		const json = await res.json();
		return json;
	} catch (error) {
		console.log(error.message);
	}
};

export const apiPost = async (url, auth, mode, data) => {
	try {
		if (mode === "PUT" || "POST") {
			const config = {
				method: mode,
				headers: {
					authorization: `Bearer ${auth}`,
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			};
			let response = await fetch(url, config);
			let json = await response.json();
			return json;
		} else {
			const config = {
				method: mode,
				headers: {
					authorization: `Bearer ${auth}`
				},
				body: JSON.stringify(data)
			};
			let response = await fetch(url, config);
			let json = await response.json();
			return json;
		}
	} catch (error) {
		console.log(error.message);
	}
};
