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

export const useGetMaillesLevels = ({
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
		["useGetMaillesLevels", maille, code],
		async () => {
			const { data } = await api.get(`/maille/${maille}/${code}`);
			return data;
		},
		{
			enabled: isEnabled,
		}
	);
};
