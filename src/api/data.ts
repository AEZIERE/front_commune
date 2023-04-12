import { useQuery } from "react-query";
import { useAxiosApiCommune, enumNameTable } from "./utils";
import { GetData, GetGeo } from "./api.type";

export const userGetData = (code_commune: string, name_table: string) => {
	const api = useAxiosApiCommune();
	return useQuery<GetData[]>(["userGetData", code_commune, name_table], async () => {
		const { data } = await api.get(`data/${code_commune}?nameTable=${name_table}`);
		return data;
	});
};

export const userPostData = (code_communes: string[], name_table: string) => {
	const api = useAxiosApiCommune();
	return useQuery<GetData[]>(["userPostData", code_communes, name_table], async () => {
		const { data } = await api.post(`data/?nameTable=${name_table}`, { code_commune: code_communes });
		return data;
	});
};
