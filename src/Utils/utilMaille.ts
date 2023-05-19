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
