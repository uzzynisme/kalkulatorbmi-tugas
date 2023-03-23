function hitungBMI() {
	// Ambil nilai input dari form
	var berat_badan = document.getElementById("berat_badan").value;
	var tinggi = document.getElementById("tinggi").value;

	// Konversi tinggi dari cm ke meter
	var tinggi_meter = tinggi / 100;

	// Hitung BMI
	var bmi = berat_badan / (tinggi_meter * tinggi_meter);

	// Tentukan kategori BMI berdasarkan nilai BMI
	var hasil = document.getElementById("hasil");
	if (bmi < 18.5) {
		hasil.innerHTML = "BMI Anda adalah " + bmi.toFixed(1) + ", berat badan kurang.";
	} else if (bmi >= 18.5 && bmi < 24.9) {
		hasil.innerHTML = "BMI Anda adalah " + bmi.toFixed(1) + ", berat badan normal.";
	} else if (bmi >= 25 && bmi < 29.9) {
		hasil.innerHTML = "BMI Anda adalah " + bmi.toFixed(1) + ", berat badan berlebih.";
	} else {
		hasil.innerHTML = "BMI Anda adalah " + bmi.toFixed(1) + ", obesitas.";
	}
}
function resetForm() {
	document.querySelector('form').reset();
}
