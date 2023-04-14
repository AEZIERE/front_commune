export type GetCadastre = {
	code: string;
	data: {
		id_commune: string;
		adresse: string;
		type_terrain: string;
		code_commune: string;
		long: string;
		lat: string;
		position: string;
		date_maj: string;
	};
};
export type GetGeo = {
	code: string;
	point: string;
	shape: string;
};

export type GetData = {
	code: string;
	data: {};
};

export type GetScolaire = {
	code: string;
	data: {
		etablissement: {};
		info: {
			formation: {};
			insertion: {};
			diplome: {};
		};
	};
};

export type GetEntity = {
	info: {
		entreprise: {};
		administration: {};
		organisme_formation: {};
	};
};

export type GetMailleDepartement = {
	nom: string;
	code: string;
	_score: number;
	region: {
		code: string;
		nom: string;
	};
};
export type GetMailleCommune = {
	nom: string;
	code: string;
	_score: number;
	departement: {
		code: string;
		nom: string;
	};
};

export type GetMailleBasic = {
	nom: string;
	code: string;
	_score: number;
};
