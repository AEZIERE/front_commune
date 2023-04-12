import { useQuery } from "react-query";
import { useAxiosApiCommune } from "./utils";
import { GetGeo, GetScolaire } from "./api.type";

export const userGetDataScolaire = (code_commune: string) => {
	const api = useAxiosApiCommune();
	return useQuery<GetScolaire[]>(["userGetDataStats", code_commune], async () => {
		const { data } = await api.get(`data_scolaire/${code_commune}`);
		return data;
	});
};

export const userPostDataScolaire = (code_communes: string[]) => {
	const api = useAxiosApiCommune();
	return useQuery<GetScolaire[]>(["userPostDataScolaire", code_communes], async () => {
		const { data } = await api.post(`data_scolaire/`, { code_commune: code_communes });
		return data;
	});
};

export const userGetDataScolairePro = (code_commune: string) => {
	const api = useAxiosApiCommune();
	return useQuery<GetScolaire[]>(["userGetDataScolairePro", code_commune], async () => {
		const { data } = await api.get(`data_scolaire_pro/${code_commune}`);
		return data;
	});
};

export const userPostDataScolairePro = (code_communes: string[]) => {
	const api = useAxiosApiCommune();
	return useQuery<GetScolaire[]>(["userPostDataScolairePro", code_communes], async () => {
		const { data } = await api.post(`data_scolaire_pro/`, { code_commune: code_communes });
		return data;
	});
};

export const userGetDataScolaireSup = (code_commune: string) => {
	const api = useAxiosApiCommune();
	return useQuery<GetScolaire[]>(["userGetDataScolairePro", code_commune], async () => {
		const { data } = await api.get(`data_scolaire_sup/${code_commune}`);
		return data;
	});
};

export const userPostDataScolaireSup = (code_communes: string[]) => {
	const api = useAxiosApiCommune();
	return useQuery<GetScolaire[]>(["userPostDataScolairePro", code_communes], async () => {
		const { data } = await api.post(`data_scolaire_sup/`, { code_commune: code_communes });
		return data;
	});
};
