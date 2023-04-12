import { useQuery } from "react-query";
import { useAxiosApiCommune } from "./utils";
import { GetGeo } from "./api.type";

export const userGetDataStats = (code_commune: string) => {
	const api = useAxiosApiCommune();
	return useQuery<GetGeo[]>(["userGetDataStats", code_commune], async () => {
		const { data } = await api.get(`data/${code_commune}`);
		return data;
	});
};

export const userPostDataStats = (code_communes: string[]) => {
	const api = useAxiosApiCommune();
	return useQuery<GetGeo[]>(["userPostDataStats", code_communes], async () => {
		const { data } = await api.post(`data/`, { code_commune: code_communes });
		return data;
	});
};
