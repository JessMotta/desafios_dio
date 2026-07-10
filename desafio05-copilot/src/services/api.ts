import axios, { type AxiosResponse } from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const api = axios.create({
	baseURL: BASE_URL,
	timeout: 5000,
});

api.interceptors.response.use(
	(response: AxiosResponse) => response,
	(error) => {
		if (!error.response) {
			console.error('API Error', error);
			return Promise.reject(
				new Error(
					'Erro de rede. Por favor, verifique sua conexão com a internet.',
				),
			);
		}
		return Promise.reject(
			new Error('Ocorreu um erro técnico. Tente novamente mais tarde.'),
		);
	},
);
