import { useQuery } from "react-query";
import { useAxiosApiCommune } from "./utils";
import { GetGeo, GetScolaire } from "./api.type";

export const useGetDataScolaire = (code_commune: string) => {
	const api = useAxiosApiCommune();
	return useQuery<GetScolaire[]>(["useGetDataStats", code_commune], async () => {
		const { data } = await api.get(`data_scolaire/${code_commune}`);
		return data;
	});
};

export const usePostDataScolaire = (code_communes: string[]) => {
	const api = useAxiosApiCommune();
	return useQuery<GetScolaire[]>(["usePostDataScolaire", code_communes], async () => {
		const { data } = await api.post(`data_scolaire/`, { code_commune: code_communes });
		return data;
	});
};

export const useGetDataScolairePro = (code_commune: string) => {
	const api = useAxiosApiCommune();
	return useQuery<GetScolaire[]>(["useGetDataScolairePro", code_commune], async () => {
		const { data } = await api.get(`data_scolaire_pro/${code_commune}`);
		return data;
	});
};

export const usePostDataScolairePro = (code_communes: string[]) => {
	const api = useAxiosApiCommune();
	return useQuery<GetScolaire[]>(["usePostDataScolairePro", code_communes], async () => {
		const { data } = await api.post(`data_scolaire_pro/`, { code_commune: code_communes });
		return data;
	});
};

export const useGetDataScolaireSup = (code_commune: string) => {
	const api = useAxiosApiCommune();
	return useQuery<GetScolaire[]>(["useGetDataScolairePro", code_commune], async () => {
		const { data } = await api.get(`data_scolaire_sup/${code_commune}`);
		return data;
	});
};

export const usePostDataScolaireSup = (code_communes: string[]) => {
	const api = useAxiosApiCommune();
	return useQuery<GetScolaire[]>(["usePostDataScolairePro", code_communes], async () => {
		const { data } = await api.post(`data_scolaire_sup/`, { code_commune: code_communes });
		return data;
	});
};
