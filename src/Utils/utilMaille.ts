import { ControleMaille } from "../api/api.type";

export const getMailleInf = (maille: ControleMaille) => {
	switch (maille) {
		case ControleMaille.nation:
			return ControleMaille.region;
		case ControleMaille.region:
			return ControleMaille.departement;
		case ControleMaille.departement:
			return ControleMaille.commune;
		case ControleMaille.epci:
			return ControleMaille.commune;
		case ControleMaille.ti:
			return ControleMaille.epci;
		default:
			return ControleMaille.nation;
	}
};

export enum enumNameTable {
	admin_public = "admin_public",
	armuriers = "armuriers",
	cadastre = "cadastre",
	chomeur = "chomeur",
	deces_naissances = "deces_naissances",
	dechet_radio = "dechet_radio",
	demographie = "demographie",
	diplomes_formations_public = "diplomes_formations_public",
	emploi = "emploi",
	energie = "energie",
	entreprise_poste = "entreprise_poste",
	stats_equipement_admin = "stats_equipement_admin",
	stats_equipement_docteur = "stats_equipement_docteur",
	stats_equipement_ecole = "stats_equipement_ecole",
	stats_equipement_formation = "stats_equipement_formation",
	stats_equipement_magasin = "stats_equipement_magasin",
	stats_equipement_sport = "stats_equipement_sport",
	etablissement_entreprise = "etablissement_entreprise",
	etablissement_scolaires = "etablissement_scolaires",
	formation_parcoursup = "formation_parcoursup",
	insertion_pro = "insertion_pro",
	logement = "logement",
	orga_formations = "orga_formations",
	population = "population",
	salaires = "salaires",
	nb_pop_scol_stats = "nb_pop_scol_stats",
	maillage = "maillage",
}
