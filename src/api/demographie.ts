import { useQuery } from "react-query";
import { useAxiosApiCommune, enumNameTable } from "./utils";
import { GetData, GetGeo } from "./api.type";

export const useGetDataDemograpgieOfMaille = ({
	code,
	niveau,
	isEnable = true,
}: {
	code: string;
	niveau: string;
	isEnable: boolean;
}) => {
	const api = useAxiosApiCommune();
	return useQuery<{ chomage: []; emploi: []; logement: []; demographie: [] }>(
		["useGetDataOfMaille", code, niveau],
		async () => {
			const { data } = await api.get(`data/demographie/all?code=${code}&niveau=${niveau}`);
			return data;
		},
		{ enabled: isEnable }
	);
};
