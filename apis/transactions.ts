import axios from "axios";

export const getTransaction = async (filter: { page?: number, limit?: number, id?: string; }) => {
	// `?page=${page}&limit=${limit}`  pagination
	const { data } = await axios.get(`https://63044b420de3cd918b44a1d1.mockapi.io/transaction?${filter.id && 'id=' + filter.id}`);

	return data;
};

export const editTransaction = async (id: string, data: any) => {

	const { status } = await axios.put(`https://63044b420de3cd918b44a1d1.mockapi.io/transaction/${id}`, data);

	return status;
};

export const delTransaction = async (id: string) => {

	const { status } = await axios.delete(`https://63044b420de3cd918b44a1d1.mockapi.io/transaction/${id}`);

	return status;
};

export const addTransaction = async (data: any) => {

	const { status } = await axios.post(`https://63044b420de3cd918b44a1d1.mockapi.io/transaction`, data);

	return status;
};