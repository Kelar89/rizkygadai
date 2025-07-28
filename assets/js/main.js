document.addEventListener('DOMContentLoaded', function() {

    const nomorWhatsAppTujuan = '6282196004768';

    // --- FUNGSI BANTUAN UNTUK FORMAT RUPIAH ---
    function formatRupiah(inputElement) {
        let angka = inputElement.value;
        let number_string = angka.replace(/[^,\d]/g, '').toString();
        let split = number_string.split(',');
        let sisa = split[0].length % 3;
        let rupiah = split[0].substr(0, sisa);
        let ribuan = split[0].substr(sisa).match(/\d{3}/gi);

        if (ribuan) {
            let separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
        }
        rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
        inputElement.value = 'Rp ' + rupiah;
    }

    // --- LOGIKA PEMILIHAN PRODUK DI HALAMAN SIMULASI ---
    const productSelection = document.getElementById('product-selection');
    const formKendaraan = document.getElementById('form-kendaraan');
    const formProperti = document.getElementById('form-properti');
    
    if (productSelection) {
        const selectionButtons = productSelection.querySelectorAll('button');
        selectionButtons.forEach(button => {
            button.addEventListener('click', function() {
                const formType = this.getAttribute('data-form');
                productSelection.style.display = 'none';

                if (formType === 'kendaraan') {
                    formKendaraan.style.display = 'block';
                } else if (formType === 'properti') {
                    formProperti.style.display = 'block';
                }
            });
        });
    }

    // --- LOGIKA FORM KENDARAAN ---
    const simulasiFormKendaraan = document.getElementById('simulasi-form-kendaraan');
    if (simulasiFormKendaraan) {
        const pinjamanInput = document.getElementById('kendaraan-pinjaman');
        pinjamanInput.addEventListener('keyup', () => formatRupiah(pinjamanInput));

        simulasiFormKendaraan.addEventListener('submit', function(event) {
            event.preventDefault();
            const getVal = (id) => document.getElementById(id)?.value.trim() || 'Tidak diisi';
            const pinjamanRaw = getVal('kendaraan-pinjaman').replace(/[^0-9]/g, '');
            const pinjamanFinal = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(pinjamanRaw);

            const pesan = `*Pengajuan Simulasi Kendaraan - rizkygadai.my.id*
-----------------------------------
*Data Pemohon:*
- Nama: ${getVal('kendaraan-nama')}
- No. HP: ${getVal('kendaraan-nomorHp')}
- Alamat: ${getVal('kendaraan-alamat')}
- Provinsi: ${getVal('kendaraan-provinsi')}
- Kota/Kab: ${getVal('kendaraan-kota')}
-----------------------------------
*Detail Kendaraan:*
- Tipe: ${getVal('kendaraan-tipe')}
- Merk: ${getVal('kendaraan-merk')}
- Tahun: ${getVal('kendaraan-tahun')}
- Plat No: ${getVal('kendaraan-plat')}
-----------------------------------
*Detail Pinjaman:*
- Jumlah: ${pinjamanFinal}
- Tenor: ${getVal('kendaraan-tenor')} bulan
-----------------------------------
Mohon segera dihubungi. Terima kasih.`;
            const urlWhatsApp = `https://api.whatsapp.com/send?phone=${nomorWhatsAppTujuan}&text=${encodeURIComponent(pesan.trim())}`;
            window.open(urlWhatsApp, '_blank');
        });
    }

    // --- LOGIKA FORM PROPERTI ---
    const simulasiFormProperti = document.getElementById('simulasi-form-properti');
    if (simulasiFormProperti) {
        const pinjamanInput = document.getElementById('properti-pinjaman');
        pinjamanInput.addEventListener('keyup', () => formatRupiah(pinjamanInput));

        simulasiFormProperti.addEventListener('submit', function(event) {
            event.preventDefault();
            const getVal = (id) => document.getElementById(id)?.value.trim() || 'Tidak diisi';
            const pinjamanRaw = getVal('properti-pinjaman').replace(/[^0-9]/g, '');
            const pinjamanFinal = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(pinjamanRaw);

            const pesan = `*Pengajuan Simulasi Properti - rizkygadai.my.id*
-----------------------------------
*Data Pemohon:*
- Nama: ${getVal('properti-nama')}
- No. HP: ${getVal('properti-nomorHp')}
-----------------------------------
*Detail Properti:*
- Jenis Sertifikat: ${getVal('properti-jenis')}
- Alamat Properti: ${getVal('properti-alamat')}
- Luas Tanah: ${getVal('properti-luas')} m²
-----------------------------------
*Detail Pinjaman:*
- Jumlah: ${pinjamanFinal}
- Tenor: ${getVal('properti-tenor')} tahun
-----------------------------------
Mohon segera dihubungi. Terima kasih.`;
            const urlWhatsApp = `https://api.whatsapp.com/send?phone=${nomorWhatsAppTujuan}&text=${encodeURIComponent(pesan.trim())}`;
            window.open(urlWhatsApp, '_blank');
        });
    }

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
});