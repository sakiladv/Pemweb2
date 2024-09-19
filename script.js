    // Menangkap elemen form dan output
const studentForm = document.getElementById("studentForm");
const outputName = document.getElementById("output-name");
const outputNim = document.getElementById("output-nim");
const outputClass = document.getElementById("output-class");
const outputAddress = document.getElementById("output-address");
const submitbutton = document.getElementById("submitbutton");
const studentData = document.getElementById("studentData");

// Event 1: Saat form disubmit
studentForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman saat form disubmit

    // Mengambil nilai dari input form
    const name = document.getElementById("name").value;
    const nim = document.getElementById("nim").value;
    const className = document.getElementById("class").value;
    const address = document.getElementById("address").value;

    // Menampilkan data yang diinput di bawah form
    outputName.textContent = `Nama: ${name}`;
    outputNim.textContent = `NIM: ${nim}`;
    outputClass.textContent = `Kelas: ${className}`;
    outputAddress.textContent = `Alamat: ${address}`;

    // Tampilkan bagian Data Mahasiswa (sebelumnya disembunyikan)
    studentData.style.display = "block";

// Event 2: Mengubah warna tombol submit setelah diklik
    submitbutton.classList.add("btn-success");
    submitbutton.textContent = "Selesai";
});

// Event 3: Saat input Nama difokuskan (on focus)
document.getElementById("name").addEventListener("focus", function() {
    this.style.backgroundColor = "#e8f0fe";
});

// Event 4: Saat input Nama kehilangan fokus (on blur)
document.getElementById("name").addEventListener("blur", function() {
    this.style.backgroundColor = "white";
});

// Event 5: Saat pengguna mencoba mengosongkan form menggunakan reset button
document.querySelector('button[type="reset"]').addEventListener("click", function() {
    outputName.textContent = "";
    outputNim.textContent = "";
    outputClass.textContent = "";
    outputAddress.textContent = "";
// mengizinkan form atau mengizinkan penggunak untuk mengisi form kembali 
    submitbutton.classList.remove("btn-success"); 
    submitbutton.textContent = "Submit";
});
