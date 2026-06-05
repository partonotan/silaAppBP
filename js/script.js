// Daftar Kode Layanan

const LAYANAN = ["CAK", "PDA", "TNM", "SKA"];

// Validasi Form

function ValidasiForm() {
  // Dapatkan Semua Nilai dari inputan
  // trim() --> Menghilangkan inputan spasi
  const namalengkap = document.getElementById("namalengkap").value.trim();
  const nim = document.getElementById("nim").value.trim();
  const prodi = document.getElementById("prodi").value;
  const layanan = document.getElementById("layanan").value;
  const tanggal = document.getElementById("tanggal").value;
  const keterangan = document.getElementById("keterangan").value.trim();

  // Validasi 1: Cek apakah ada field yang kosong
  if (
    namalengkap == "" ||
    nim == "" ||
    prodi == "" ||
    tanggal == "" ||
    layanan == ""
  ) {
    // Munculkan pesan error
    alert("❌ Semua field harus diisi!");
    return false; //Mencegah form ter-submit
  }
}
