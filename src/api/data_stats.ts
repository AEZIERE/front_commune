import { useQuery } from "react-query";
import { useAxiosApiCommune } from "./utils";
import { GetGeo } from "./api.type";

export const useGetDataStats = (code_commune: string) => {
	const api = useAxiosApiCommune();
	return useQuery<GetGeo[]>(["useGetDataStats", code_commune], async () => {
		const { data } = await api.get(`data_stat/${code_commune}`);
		return data;
	});
};

export const usePostDataStats = ({
	code_communes,
	isEnable = true,
}: {
	code_communes: string[];
	isEnable: boolean;
}) => {
	const api = useAxiosApiCommune();
	return useQuery<GetGeo[]>(
		["usePostDataStats", code_communes],
		async () => {
			const { data } = await api.post(`data_stat/`, { code_commune: code_communes });
			return data;
		},
		{
			enabled: isEnable,
		}
	);
};
