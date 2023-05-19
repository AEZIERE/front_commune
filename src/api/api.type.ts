export type GetMailleProps = { valueInput: string; isEnabled: boolean };

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
	niveau: string;
	nom: string;
	code: string;
	_score: number;
	region: {
		code: string;
		nom: string;
	};
};
export type GetMailleCommune = {
	niveau: string;
	nom: string;
	code: string;
	_score: number;
	departement: {
		code: string;
		nom: string;
	};
};

export type GetMailleBasic = {
	niveau: string;
	nom: string;
	code: string;
	_score: number;
};

export type GetShapeBasic = {
	code: string;
	nom: string;
	centre: {
		type: string;
		coordinates: number[];
	};
	contour: { type: string; coordinates: number[] };
	_score: number;
};

export enum ControleMaille {
	commune = "commune",
	epci = "epci",
	departement = "departement",
	ti = "ti",
	region = "region",
	nation = "nation",
}

export type PointTuple = [number, number];

export type Poly = PointTuple[][];

export type GetShapeProps = {
	maille: ControleMaille;
	code?: string;
	isEnabled?: boolean;
};

export type GetShape = {
	code: string;
	libelle: string;
	level: string;
	shape: Poly;
	centre: [[number, number]];
};

export type GetInferiorShapesProps = {
	maille_source: ControleMaille;
	code: string;
	maille_cible: ControleMaille;
	isEnabled?: boolean;
};
