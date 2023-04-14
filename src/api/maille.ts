import { useQuery } from "react-query";
import { useAxiosApiGouvCommune } from "./utils";
import { GetMailleBasic, GetMailleCommune, GetMailleDepartement } from "./api.type";

export const userGetCommunes = (name_commune: string) => {
	const api = useAxiosApiGouvCommune();
	return useQuery<GetMailleCommune[]>(["userGetCommune", name_commune], async () => {
		const { data } = await api.get(`communes?nom=${name_commune}&fields=departement&boost=population&limit=6`);
		return data;
	});
};
export const userGetDepartements = (name_departement: string) => {
	const api = useAxiosApiGouvCommune();
	return useQuery<GetMailleDepartement[]>(["userGetDepartements", name_departement], async () => {
		const { data } = await api.get(`departements?nom=${name_departement}&fields=region&boost=population&limit=6`);
		return data;
	});
};
export const userGetRegion = (name_region: string) => {
	const api = useAxiosApiGouvCommune();
	return useQuery<GetMailleBasic[]>(["userGetRegion", name_region], async () => {
		const { data } = await api.get(`regions?nom=${name_region}&boost=population&limit=6`);
		return data;
	});
};
