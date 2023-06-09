import { useQuery } from "react-query";
import { useAxiosApiCommune, enumNameTable } from "./utils";
import { GetData, GetGeo } from "./api.type";

export const useGetDataOfMaille = ({
	name_table,
	code,
	niveau,
	isEnable = true,
}: {
	code: string;
	niveau: string;
	name_table: enumNameTable;
	isEnable: boolean;
}) => {
	const api = useAxiosApiCommune();
	return useQuery<GetData[]>(
		["useGetDataOfMaille", code, name_table, niveau],
		async () => {
			const { data } = await api.get(`data/${name_table}?code=${code}&niveau=${niveau}`);
			return data;
		},
		{ enabled: isEnable }
	);
};
