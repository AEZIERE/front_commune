import { useQuery } from "react-query";
import { useAxiosApiCommune, enumNameTable } from "./utils";

export const useGetDataOfMaille = ({
	code,
	niveau,
	isEnable = true,
}: {
	code: string;
	niveau: string;
	isEnable: boolean;
}) => {
	const api = useAxiosApiCommune();
	return useQuery<{ salaire: []; entreprise: []; entreprise_etablissement: [] }>(
		["useGetDataOfMaille", code, niveau],
		async () => {
			const { data } = await api.get(`data/company/all?code=${code}&niveau=${niveau}`);
			return data;
		},
		{ enabled: isEnable }
	);
};
