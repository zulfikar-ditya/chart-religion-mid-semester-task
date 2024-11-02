document.addEventListener("DOMContentLoaded", () => {
	let chartGender = document.getElementById("myChart-gender").getContext("2d");
	let GenderChart = new Chart(chartGender, {
		type: "pie",
		data: {
			labels: ["Laki-Laki", "Perempuan"],
			datasets: [
				{
					label: "Gender Distribution",
					data: [17, 13],
					backgroundColor: ["#06b6d4", "#ec4899"],
					borderColor: ["#0c4a6e", "#500724"],
					borderWidth: 1,
				},
			],
		},
		options: {
			title: {
				display: true,
				text: "Gender Distribution in the Company",
			},
		},
	});

	document
		.getElementById("downloadBtn-gender")
		.addEventListener("click", () => {
			let canvas = document.getElementById("myChart-gender");
			let img = canvas.toDataURL("image/png");
			let link = document.createElement("a");
			link.href = img;
			link.download = "chart.png";
			link.click();
		});

	let chartCity = document.getElementById("myChart-city").getContext("2d");
	let CityChart = new Chart(chartCity, {
		type: "bar",
		data: {
			labels: [
				"Bandung",
				"Banyuwangi",
				"Depok",
				"DkI Jakarta",
				"Tangerang",
				"Madiun",
				"Malang",
				"Medan",
				"Ponorogo",
				"Semarang",
				"Surabaya",
				"Jogja",
				"Tidak Terdaftar",
			],
			datasets: [
				{
					label: "Jumlah",
					data: [3, 1, 3, 7, 3, 1, 2, 1, 3, 1, 1, 1, 3],
					backgroundColor: [
						"#ff6384",
						"#36a2eb",
						"#cc65fe",
						"#ffce56",
						"#4bc0c0",
						"#ff9f40",
						"#ffcd56",
						"#4bc0c0",
						"#9966ff",
						"#ff6384",
						"#36a2eb",
						"#cc65fe",
						"#ffce56",
					],
					borderColor: [
						"#ff6384",
						"#36a2eb",
						"#cc65fe",
						"#ffce56",
						"#4bc0c0",
						"#ff9f40",
						"#ffcd56",
						"#4bc0c0",
						"#9966ff",
						"#ff6384",
						"#36a2eb",
						"#cc65fe",
						"#ffce56",
					],
					borderWidth: 1,
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
				},
			},
			title: {
				display: true,
				text: "Jumlah Penduduk per Kota/Kabupaten",
			},
		},
	});

	document.getElementById("downloadBtn-city").addEventListener("click", () => {
		let canvas = document.getElementById("myChart-city");
		let img = canvas.toDataURL("image/png");
		let link = document.createElement("a");
		link.href = img;
		link.download = "chart.png";
		link.click();
	});

	let chartGettingBullied = document
		.getElementById("myChart-gettingBullied")
		.getContext("2d");
	let GettingBulliedChart = new Chart(chartGettingBullied, {
		type: "doughnut",
		data: {
			labels: ["Ya", "Tidak", "Mungkin"],
			datasets: [
				{
					label: "Getting Bullied",
					data: [13, 8, 9],
					backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
					borderColor: ["#ff6384", "#36a2eb", "#ffce56"],
					borderWidth: 1,
				},
			],
		},
		options: {
			title: {
				display: true,
				text: "Getting Bullied",
			},
		},
	});

	document
		.getElementById("downloadBtn-gettingBullied")
		.addEventListener("click", () => {
			let canvas = document.getElementById("myChart-gettingBullied");
			let img = canvas.toDataURL("image/png");
			let link = document.createElement("a");
			link.href = img;
			link.download = "chart.png";
			link.click();
		});

	let chartBullyingFrequency = document
		.getElementById("myChart-bullyingFrequency")
		.getContext("2d");

	let BullyingFrequencyChart = new Chart(chartBullyingFrequency, {
		type: "doughnut",
		data: {
			labels: ["Jarang", "Kadang-kadang", "Sering", "Setiap Hari"],
			datasets: [
				{
					label: "Frekuensi Bullying",
					data: [17, 10, 2, 0],
					borderColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0"],
					backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0"],
					fill: false,
					tension: 0.4,
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
				},
			},
			title: {
				display: true,
				text: "Frekuensi Bullying",
			},
		},
	});

	document
		.getElementById("downloadBtn-bullyingFrequency")
		.addEventListener("click", () => {
			let canvas = document.getElementById("myChart-bullyingFrequency");
			let img = canvas.toDataURL("image/png");
			let link = document.createElement("a");
			link.href = img;
			link.download = "chart.png";
			link.click();
		});

	let chartBullyingType = document
		.getElementById("myChart-bullyingType")
		.getContext("2d");

	let BullyingTypeChart = new Chart(chartBullyingType, {
		type: "bar",
		data: {
			labels: [
				"Fisik (memukul, mendorong)",
				"Verbal (menyejek, memanggil dengan julukan)",
				"Sosial (dikucilkan, menyebarkan rumor)",
				"Cyberbullying",
				"Pernah semua",
				"tidak pernah",
			],
			datasets: [
				{
					label: "Jumlah",
					data: [2, 22, 14, 2, 1, 1],
					backgroundColor: [
						"#ff6384",
						"#36a2eb",
						"#cc65fe",
						"#ffce56",
						"#4bc0c0",
						"#ff9f40",
					],
					borderColor: [
						"#ff6384",
						"#36a2eb",
						"#cc65fe",
						"#ffce56",
						"#4bc0c0",
						"#ff9f40",
					],
					borderWidth: 1,
				},
			],
		},
		options: {
			indexAxis: "y",
			scales: {
				x: {
					beginAtZero: true,
				},
			},
			title: {
				display: true,
				text: "Jenis Bullying",
			},
		},
	});

	document
		.getElementById("downloadBtn-bullyingType")
		.addEventListener("click", () => {
			let canvas = document.getElementById("myChart-bullyingType");
			let img = canvas.toDataURL("image/png");
			let link = document.createElement("a");
			link.href = img;
			link.download = "chart.png";
			link.click();
		});

	let chartBullyingAge = document
		.getElementById("myChart-bullyingAge")
		.getContext("2d");

	let BullyingAgeChart = new Chart(chartBullyingAge, {
		type: "line",
		data: {
			labels: [
				"7-12 Tahun",
				"13-18 Tahun",
				"19-24 Tahun",
				"25-30 Tahun",
				"35-40 Tahun",
			],
			datasets: [
				{
					label: "Jumlah",
					data: [11, 13, 2, 1, 0],
					borderColor: "#36a2eb",
					backgroundColor: "rgba(54, 162, 235, 0.2)",
					fill: true,
					tension: 0.4,
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
				},
			},
			title: {
				display: true,
				text: "Usia Korban Bullying",
			},
		},
	});

	document
		.getElementById("downloadBtn-bullyingAge")
		.addEventListener("click", () => {
			let canvas = document.getElementById("myChart-bullyingAge");
			let img = canvas.toDataURL("image/png");
			let link = document.createElement("a");
			link.href = img;
			link.download = "chart.png";
			link.click();
		});

	let chartBullyingPlace = document
		.getElementById("myChart-bullyingPlace")
		.getContext("2d");
	let BullyingPlaceChart = new Chart(chartBullyingPlace, {
		type: "line",
		data: {
			labels: [
				"Di sekolah",
				"Di rumah atau lingkungan sekitar",
				"Di tempat umum",
				"Di media sosial",
				"Semua sih",
			],
			datasets: [
				{
					label: "Jumlah",
					data: [21, 12, 5, 6, 1],
					borderColor: "#36a2eb",
					backgroundColor: "rgba(54, 162, 235, 0.2)",
					fill: true,
					tension: 0.4,
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
				},
			},
			title: {
				display: true,
				text: "Tempat Terjadinya Bullying",
			},
		},
	});

	document
		.getElementById("downloadBtn-bullyingPlace")
		.addEventListener("click", () => {
			let canvas = document.getElementById("myChart-bullyingPlace");
			let img = canvas.toDataURL("image/png");
			let link = document.createElement("a");
			link.href = img;
			link.download = "chart.png";
			link.click();
		});

	let chartBullyingResponse = document
		.getElementById("myChart-bullyingResponse")
		.getContext("2d");

	let BullyingResponseChart = new Chart(chartBullyingResponse, {
		type: "bar",
		data: {
			labels: [
				"Mengalah dengan menghindari...",
				"Diam saja dan pasrah",
				"Melawan balik dengan kekerasan",
				"Konfrontasi, bertanya secara la...",
				"Tatakaeeee!!! YOLO!!",
				"Bersikap bodoamat",
				"Melawan sesuai perbuatan",
			],
			datasets: [
				{
					label: "Jumlah",
					data: [17, 11, 4, 1, 1, 1, 1],
					backgroundColor: [
						"#ff6384",
						"#36a2eb",
						"#cc65fe",
						"#ffce56",
						"#4bc0c0",
						"#ff9f40",
						"#9966ff",
					],
					borderColor: [
						"#ff6384",
						"#36a2eb",
						"#cc65fe",
						"#ffce56",
						"#4bc0c0",
						"#ff9f40",
						"#9966ff",
					],
					borderWidth: 1,
				},
			],
		},
		options: {
			indexAxis: "y",
			scales: {
				y: {
					beginAtZero: true,
				},
			},
			title: {
				display: true,
				text: "Respon terhadap Bullying (Detail)",
			},
		},
	});

	document
		.getElementById("downloadBtn-bullyingResponse")
		.addEventListener("click", () => {
			let canvas = document.getElementById("myChart-bullyingResponse");
			let img = canvas.toDataURL("image/png");
			let link = document.createElement("a");
			link.href = img;
			link.download = "chart.png";
			link.click();
		});

	let chartSecurePlace = document
		.getElementById("myChart-securePlace")
		.getContext("2d");

	let SecurePlaceChart = new Chart(chartSecurePlace, {
		type: "radar",
		data: {
			labels: ["Ya", "Tidak", "Mungkin", "Tidak tahu"],
			datasets: [
				{
					label: "Secure Place",
					data: [12, 6, 11, 1],
					backgroundColor: "rgba(54, 162, 235, 0.2)",
					borderColor: "rgba(54, 162, 235, 1)",
					borderWidth: 1,
				},
			],
		},
		options: {
			scales: {
				r: {
					beginAtZero: true,
				},
			},
			title: {
				display: true,
				text: "Secure Place Responses",
			},
		},
	});

	document
		.getElementById("downloadBtn-securePlace")
		.addEventListener("click", () => {
			let canvas = document.getElementById("myChart-securePlace");
			let img = canvas.toDataURL("image/png");
			let link = document.createElement("a");
			link.href = img;
			link.download = "chart.png";
			link.click();
		});

	let chartSecureParticipation = document
		.getElementById("myChart-secureParticipation")
		.getContext("2d");

	let SecureParticipationChart = new Chart(chartSecureParticipation, {
		type: "radar",
		data: {
			labels: ["Ya", "Tidak", "Mungkin", "Tidak tahu"],
			datasets: [
				{
					label: "Secure Participation",
					data: [7, 11, 6, 6],
					backgroundColor: "rgba(54, 162, 235, 0.2)",
					borderColor: "rgba(54, 162, 235, 1)",
					borderWidth: 1,
				},
			],
		},
		options: {
			scales: {
				r: {
					beginAtZero: true,
				},
			},
			title: {
				display: true,
				text: "Secure Participation Responses",
			},
		},
	});

	document
		.getElementById("downloadBtn-secureParticipation")
		.addEventListener("click", () => {
			let canvas = document.getElementById("myChart-secureParticipation");
			let img = canvas.toDataURL("image/png");
			let link = document.createElement("a");
			link.href = img;
			link.download = "chart.png";
			link.click();
		});

	let chartPreventionParticipation = document
		.getElementById("myChart-preventionParticipation")
		.getContext("2d");

	let preventionParticipationChart = new Chart(chartPreventionParticipation, {
		type: "doughnut",
		data: {
			labels: [
				"Iya, tentu",
				"Mungkin, tergantung situasinya",
				"Tidak, saya belum tertarik",
				"Ada keinginan tetapi tidak percaya diri",
				"Tidak Tahu cara memulai",
				"Tidak tahu",
			],
			datasets: [
				{
					label: "Interest in Prevention",
					data: [3, 4, 10, 4, 12, 1],
					backgroundColor: [
						"#ff6384",
						"#36a2eb",
						"#cc65fe",
						"#ffce56",
						"#4bc0c0",
						"#ff9f40",
					],
					borderColor: [
						"#ff6384",
						"#36a2eb",
						"#cc65fe",
						"#ffce56",
						"#4bc0c0",
						"#ff9f40",
					],
					borderWidth: 1,
				},
			],
		},
		options: {
			title: {
				display: true,
				text: "Interest in Prevention",
			},
		},
	});

	document
		.getElementById("downloadBtn-preventionParticipation")
		.addEventListener("click", () => {
			let canvas = document.getElementById("myChart-preventionParticipation");
			let img = canvas.toDataURL("image/png");
			let link = document.createElement("a");
			link.href = img;
			link.download = "chart.png";
			link.click();
		});
});
