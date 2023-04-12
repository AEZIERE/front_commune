import { useQuery } from "react-query";
import { useAxiosApiCommune } from "./utils";
import { GetGeo } from "./api.type";

export const userGetGeo = (code_commune: string) => {
	const api = useAxiosApiCommune();
	return useQuery<GetGeo[]>(["userGetGeo", code_commune], async () => {
		const { data } = await api.get(`geo_commune/${code_commune}`);
		return data;
	});
};

export const userPostGeo = (code_communes: string[]) => {
	const api = useAxiosApiCommune();
	return useQuery<GetGeo[]>(["userPostGeo", code_communes], async () => {
		const { data } = await api.post(`geo_commune/`, { code_commune: code_communes });
		return data;
	});
};
