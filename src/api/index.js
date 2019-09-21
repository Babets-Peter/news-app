class Api {
	static apiUrl = `https://newsapi.org/v2/everything?q=bitcoin&from=2019-08-21&sortBy=publishedAt&apiKey=d6c3ce26c4534e59a4bdfe5ec1915bad`;

	static fetchForNews = () => {
		return fetch(Api.apiUrl)
				.then(response => response.json());
	}
}

export default Api;
