import { useQuery } from "react-query";
import { useAxiosApiGouvCommune } from "./utils";
import { GetMailleBasic, GetMailleCommune, GetMailleDepartement, GetShapeBasic, GetMailleProps } from "./api.type";



export const useGetCommunes = ({ valueInput, isEnabled = true }: GetMailleProps) => {
	const api = useAxiosApiGouvCommune();
	return useQuery<GetMailleCommune[]>(
		["useGetCommune", valueInput],
		async () => {
			const { data } = await api.get(`communes?nom=${valueInput}&fields=departement&boost=population&limit=6`);
			return data;
		},
		{
			enabled: isEnabled,
		}
	);
};
export const useGetDepartements = ({ valueInput, isEnabled = true }: GetMailleProps) => {
	const api = useAxiosApiGouvCommune();
	return useQuery<GetMailleDepartement[]>(
		["useGetDepartements", valueInput],
		async () => {
			const { data } = await api.get(`departements?nom=${valueInput}&fields=region&boost=population&limit=6`);

			return data;
		},
		{
			enabled: isEnabled,
		}
	);
};
export const useGetRegion = ({ valueInput, isEnabled = true }: GetMailleProps) => {
	const api = useAxiosApiGouvCommune();
	return useQuery<GetMailleBasic[]>(
		["useGetRegion", valueInput],
		async () => {
			const { data } = await api.get(`regions?nom=${valueInput}&boost=population&limit=6`);
			return data;
		},
		{
			enabled: isEnabled,
		}
	);
};

export const useGetShapeCommunes = (name_commune: string) => {
	const api = useAxiosApiGouvCommune();
	return useQuery<GetShapeBasic[]>(["useGetCommune", name_commune], async () => {
		const { data } = await api.get(`communes?nom=${name_commune}&fields=code,nom,centre,contour`);
		return data;
	});
};

export const useGetDepartementsOfRegion = (code_region: string) => {
	const api = useAxiosApiGouvCommune();
	return useQuery<[]>(["useGetCommune", code_region], async () => {
		const { data } = await api.get(`https://geo.api.gouv.fr/regions/${code_region}/departements`);
		return data;
	});
};

export const useGetCommuneOfDepartement = (code_departement: string) => {
	const api = useAxiosApiGouvCommune();
	return useQuery<object[]>(["useGetCommune", code_departement], async () => {
		const { data } = await api.get(`https://geo.api.gouv.fr/departments/${code_departement}/communes`);
		return data;
	});
};

export const useGetCommuneOfRegion = (code_region: string) => {
	const api = useAxiosApiGouvCommune();
	return useQuery<object[]>(["useGetCommune", code_region], async () => {
		var communes: object[] = [];
		const res = useGetDepartementsOfRegion(code_region);
		res.data?.forEach((res: any) => {
			res.map((departement: any) => {
				api
					.get(`https://geo.api.gouv.fr/departments/${departement.code}/communes`)
					.then((res: any) => res.data.map((commune: any) => communes.push(commune)));
			});
		});
		return communes;
	});
};
