import { useQuery } from "react-query";
import { useAxiosApiCommune } from "./utils";
import { GetScolaire } from "./api.type";

export const useGetDataScolaire = ({
	code,
	niveau,
	isEnable = true,
}: {
	code: string;
	niveau: string;
	isEnable: boolean;
}) => {
	const api = useAxiosApiCommune();
	return useQuery<[]>(
		["useGetDataScolaire", code, niveau],
		async () => {
			const { data } = await api.get(`data/scolaire/all?code=${code}&niveau=${niveau}`);
			return data;
		},
		{ enabled: isEnable }
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
	return useQuery<GetScolaire[]>(
		["useGetDataScolaireSup", code, niveau],
		async () => {
			const { data } = await api.get(`data/scolaire/sup?code=${code}&niveau=${niveau}`);
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
	return useQuery<GetScolaire[]>(["useGetDataScolairePro", code, niveau], async () => {
		const { data } = await api.get(`data/scolaire/pro?code=${code}&niveau=${niveau}`);
		return data;
	});
};

export const useGetStatsScolaireSup = ({
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
		const { data } = await api.get(`stats/scolaire/sup?code=${code}&niveau=${niveau}`);
		return data;
	});
};
