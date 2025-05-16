export const mockActivityHistoryItem = {
	id: "ID12345 ",
	date: "2025-05-16T09:20:09.903Z",
	professional: {
		id: "professional456",
		name: "Dr. Martínez",
		speciality: {
			id: "string",
			description: "Metge família",
		},
		role: {
			id: "string",
			description: "string",
		},
	},
	relevant: true,
	diagnostics: [
		{
			idDiagnostic: "-1-0",
			version: "1",
			codi: "J01.90",
			descripcio: "SINUSITIS AGUDA",
			cataleg: "2.16.840.1.113883.6.3",
		},
	],
	center: {
		id: "center321",
		description: "CAP Manso",
	},
	up: {
		id: "up654",
		description: "Unitat Emergències",
	},
	ep: {
		id: "ep987",
		description: "Pediatria",
	},
	service: {
		id: "service543",
		description: "Cardiología",
	},
};
