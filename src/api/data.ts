import { useQuery } from "react-query";
import { useAxiosApiCommune, enumNameTable } from "./utils";
import { GetData, GetGeo } from "./api.type";

export const useGetData = ({
	code,
	name_table,
	isEnable = true,
}: {
	code: string;
	name_table: enumNameTable;
	isEnable: boolean;
}) => {
	const api = useAxiosApiCommune();
	return useQuery<GetData[]>(
		["useGetData", code, name_table],
		async () => {
			const { data } = await api.get(`data/${code}?nameTable=${name_table}`);
			return data;
		},
		{ enabled: isEnable }
	);
};

export const usePostData = ({
	code,
	name_table,
	isEnable = true,
}: {
	code: string[];
	name_table: enumNameTable;
	isEnable: boolean;
}) => {
	const api = useAxiosApiCommune();
	return useQuery<GetData[]>(
		["usePostData", code, name_table],
		async () => {
			const { data } = await api.post(`data/?nameTable=${name_table}`, { code_commune: code });
			return data;
		},
		{ enabled: isEnable }
	);
};
