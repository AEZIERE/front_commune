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

export const usePostDataScolaire = ({
	code,
	niveau,
	isEnable = true,
}: {
	code: string;
	niveau: string;
	isEnable: boolean;
}) => {
	const api = useAxiosApiCommune();
	return useQuery<GetScolaire[]>(
		["usePostDataScolaire", code, niveau],
		async () => {
			const { data } = await api.post(`data/scolaire/all?code=${code}&niveau=${niveau}`);
			return data;
		},
		{
			enabled: isEnable,
		}
	);
};

export const useGetDataScolairePro = ({
	code,
	niveau,
	isEnable = true,
}: {
	code: string;
	niveau: string;
	isEnable: boolean;
}) => {
	const api = useAxiosApiCommune();
	return useQuery<GetScolaire[]>(
		["useGetDataScolairePro", code, niveau],
		async () => {
			const { data } = await api.get(`data/scolaire/sup?code=${code}&niveau=${niveau}`);
			return data;
		},
		{
			enabled: isEnable,
		}
	);
};

export const useGetDataScolaireSup = ({
	code,
	niveau,
	isEnable = true,
}: {
	code: string;
	niveau: string;
	isEnable: boolean;
}) => {
	const api = useAxiosApiCommune();
	return useQuery<GetScolaire[]>(["useGetDataScolairePro", code, niveau], async () => {
		const { data } = await api.get(`data/scolaire/pro?code=${code}&niveau=${niveau}`);
		return data;
	});
};
