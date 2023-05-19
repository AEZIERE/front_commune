import { useQuery } from "react-query";
import { useAxiosApiCommune } from "./utils";
import { GetCadastre } from "./api.type";

export const useGetCadastre = (code_commune: string) => {
	const api = useAxiosApiCommune();
	return useQuery<GetCadastre[]>(["useGetCadastre", code_commune], async () => {
		const { data } = await api.get(`cadastre/${code_commune}`);
		return data;
	});
};

export const usePostCadastre = (code_communes: string[]) => {
	const api = useAxiosApiCommune();
	return useQuery<GetCadastre[]>(["usePostCadastre", code_communes], async () => {
		const { data } = await api.post(`cadastre/`, { liste_commune: code_communes });
		return data;
	});
};
