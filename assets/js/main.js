document.addEventListener('DOMContentLoaded', function() {

    // --- LOGIKA TOMBOL BACK TO TOP ---
    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) {
        window.onscroll = function() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        };
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- LOGIKA FORM SIMULASI ---
    const nomorWhatsAppTujuan = '6285894448143';
    const simulasiForm = document.getElementById('simulasi-form');
    const jumlahPinjamanInput = document.getElementById('jumlahPinjaman');

    // --- FUNGSI BARU UNTUK FORMAT RUPIAH ---
    if (jumlahPinjamanInput) {
        jumlahPinjamanInput.addEventListener('keyup', function(e) {
            // Ambil nilai input
            let angka = this.value;
            // Hapus semua karakter kecuali digit
            let number_string = angka.replace(/[^,\d]/g, '').toString();
            // Buat format
            let split = number_string.split(',');
            let sisa = split[0].length % 3;
            let rupiah = split[0].substr(0, sisa);
            let ribuan = split[0].substr(sisa).match(/\d{3}/gi);

            if (ribuan) {
                let separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }

            rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
            this.value = 'Rp ' + rupiah;
        });
    }

    if (simulasiForm) {
        simulasiForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const getVal = (id) => document.getElementById(id)?.value.trim() || 'Tidak diisi';
            
            // Ambil nilai dari input yang sudah diformat
            const jumlahPinjamanFormatted = getVal('jumlahPinjaman');
            // Hapus "Rp " dan titik untuk mendapatkan angka murni
            const jumlahPinjamanRaw = jumlahPinjamanFormatted.replace(/[^0-9]/g, '');

            const nama = getVal('nama');
            const nomorHp = getVal('nomorHp');
            const alamat = getVal('alamat');
            const provinsi = getVal('form-provinsi');
            const kota = getVal('form-kota');
            const kecamatan = getVal('form-kecamatan');
            const kodepos = getVal('form-kodepos');
            const tipeKendaraan = getVal('tipeKendaraan');
            const merkKendaraan = getVal('merkKendaraan');
            const tahunKendaraan = getVal('tahunKendaraan');
            const platNomor = getVal('platNomor');
            const tenor = getVal('tenor');
            
            // Format ulang angka murni ke format mata uang untuk pesan WA
            const jumlahPinjamanFinal = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(jumlahPinjamanRaw);

            const pesan = `
*Pesan Baru dari Website rizkygadai.my.id*
-----------------------------------

Halo, saya ingin mengajukan simulasi pinjaman.

*Berikut adalah detail pengajuan saya:*
- *Nama:* ${nama}
- *No. HP:* ${nomorHp}
- *Alamat:* ${alamat}
- *Provinsi:* ${provinsi}
- *Kota/Kabupaten:* ${kota}
- *Kecamatan:* ${kecamatan}
- *Kode Pos:* ${kodepos}
-----------------------------------
*Detail Kendaraan:*
- *Tipe Kendaraan:* ${tipeKendaraan}
- *Merk & Tipe:* ${merkKendaraan}
- *Tahun:* ${tahunKendaraan}
- *Plat Nomor:* ${platNomor}
-----------------------------------
*Detail Pinjaman:*
- *Jumlah Pengajuan:* ${jumlahPinjamanFinal}
- *Tenor:* ${tenor} bulan
-----------------------------------
Mohon segera dihubungi untuk proses selanjutnya. Terima kasih.
            `;
            const urlWhatsApp = `https://api.whatsapp.com/send?phone=${nomorWhatsAppTujuan}&text=${encodeURIComponent(pesan.trim())}`;
            window.open(urlWhatsApp, '_blank');
        });
    }
});