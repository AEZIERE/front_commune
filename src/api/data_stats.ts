import { useQuery } from "react-query";
import { useAxiosApiCommune } from "./utils";
import { GetGeo } from "./api.type";

export const useGetDataStats = (code_commune: string) => {
	const api = useAxiosApiCommune();
	return useQuery<GetGeo[]>(["useGetDataStats", code_commune], async () => {
		const { data } = await api.get(`data/${code_commune}`);
		return data;
	});
};

export const usePostDataStats = (code_communes: string[]) => {
	const api = useAxiosApiCommune();
	return useQuery<GetGeo[]>(["usePostDataStats", code_communes], async () => {
		const { data } = await api.post(`data/`, { code_commune: code_communes });
		return data;
	});
};
