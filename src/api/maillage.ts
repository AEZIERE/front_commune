import { useQuery } from "react-query";
import { GetInferiorShapesProps, GetShape, GetShapeProps } from "./api.type";
import { ControleMaille } from "./api.type";
import { useAxiosMaille } from "./utils";

export const useGetShape = ({ maille, code, isEnabled = true }: GetShapeProps) => {
	const api = useAxiosMaille();
	return useQuery<GetShape[]>(
		["useGetShape", maille, code],
		async () => {
			const { data } = await api.get(`/shape/${maille}${code ? `/${code}` : ""}`);
			return data;
		},
		{
			enabled: isEnabled,
		}
	);
};

export const useGetInferiorShapes = ({
	maille_source,
	code,
	maille_cible,
	isEnabled = true,
}: GetInferiorShapesProps) => {
	const api = useAxiosMaille();
	return useQuery<GetShape[]>(
		["useGetInferiorShapes", maille_source, code, maille_cible],
		async () => {
			const { data } = await api.get(`/shape/${maille_source}/${code}/${maille_cible}`);
			return data;
		},
		{
			enabled: isEnabled,
		}
	);
};

export const useGetAllMaillesLevels = ({
	maille,
	code,
	isEnabled = true,
}: {
	maille: ControleMaille;
	code: string;
	isEnabled?: boolean;
}) => {
	const api = useAxiosMaille();
	return useQuery<[]>(
		["useGetAllMaillesLevels", maille, code],
		async () => {
			const { data } = await api.get(`/maille/${maille}/${code}`);
			return data;
		},
		{
			enabled: isEnabled,
		}
	);
};

export const useGetMaillesLevels = ({
	maille_source,
	code,
	maille_cible,
	isEnabled = true,
}: {
	maille_source: ControleMaille;
	code: string;
	maille_cible: string;
	isEnabled?: boolean;
}) => {
	const api = useAxiosMaille();
	return useQuery<[]>(
		["useGetMaillesLevels", maille_source, code, maille_cible],
		async () => {
			const { data } = await api.get(`/maille/${maille_source}/${code}/${maille_cible}`);
			return data;
		},
		{
			enabled: isEnabled,
		}
	);
};

export const useGetAllMailles = ({
	maille_source,
	code,
	maille_dest,
	isEnabled = true,
}: {
	maille_source: string;
	code: string;
	maille_dest: string;
	isEnabled: boolean;
}) => {
	const api = useAxiosMaille();
	return useQuery<[]>(
		["useGetAllMailles", maille_source, code, maille_dest],
		async () => {
			const { data } = await api.get(`/maille?maille_source=${maille_source}&code=${code}&maille_dest=${maille_dest}`);
			return data;
		},
		{
			enabled: isEnabled,
		}
	);
};
