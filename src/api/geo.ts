import { useQuery } from "react-query";
import { useAxiosApiCommune } from "./utils";
import { GetGeo } from "./api.type";

export const useGetGeo = (code_commune: string) => {
	const api = useAxiosApiCommune();
	return useQuery<GetGeo[]>(["useGetGeo", code_commune], async () => {
		const { data } = await api.get(`geo_commune/${code_commune}`);
		return data;
	});
};

export const usePostGeo = (code_communes: string[]) => {
	const api = useAxiosApiCommune();
	return useQuery<GetGeo[]>(["usePostGeo", code_communes], async () => {
		const { data } = await api.post(`geo_commune/`, { code_commune: code_communes });
		return data;
	});
};
