import { useQuery } from "react-query";
import { useAxiosApiCommune } from "./utils";
import { GetEntity } from "./api.type";

export const userGetEntity = (code_commune: string) => {
	const api = useAxiosApiCommune();
	return useQuery<GetEntity[]>(["userGetEntity", code_commune], async () => {
		const { data } = await api.get(`data_entity/${code_commune}`);
		return data;
	});
};

export const userPostEntity = (code_communes: string[]) => {
	const api = useAxiosApiCommune();
	return useQuery<GetEntity[]>(["userPostEntity", code_communes], async () => {
		const { data } = await api.post(`data_entity/`, { code_commune: code_communes });
		return data;
	});
};
