import { useQuery } from "react-query";
import { useAxiosApiCommune } from "./utils";
import { GetEntity } from "./api.type";

export const useGetEntity = (code_commune: string) => {
	const api = useAxiosApiCommune();
	return useQuery<GetEntity[]>(["useGetEntity", code_commune], async () => {
		const { data } = await api.get(`data_entity/${code_commune}`);
		return data;
	});
};

export const usePostEntity = (code_communes: string[]) => {
	const api = useAxiosApiCommune();
	return useQuery<GetEntity[]>(["usePostEntity", code_communes], async () => {
		const { data } = await api.post(`data_entity/`, { code_commune: code_communes });
		return data;
	});
};
