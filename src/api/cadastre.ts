import { useQuery } from "react-query";
import { useAxiosApiCommune } from "./utils";
import { GetCadastre } from "./api.type";

export const userGetCadastre = (code_commune: string) => {
	const api = useAxiosApiCommune();
	return useQuery<GetCadastre[]>(["userGetCadastre", code_commune], async () => {
		const { data } = await api.get(`cadastre/${code_commune}`);
		return data;
	});
};

export const userPostCadastre = (code_communes: string[]) => {
	const api = useAxiosApiCommune();
	return useQuery<GetCadastre[]>(["userPostCadastre", code_communes], async () => {
		const { data } = await api.post(`cadastre/`, { liste_commune: code_communes });
		return data;
	});
};
