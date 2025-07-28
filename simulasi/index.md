---
title: Pengajuan Simulasi Pinjaman
layout: base.njk
---
<div class="container my-5">
    <div id="product-selection" class="text-center">
        <img src="{{ '/assets/img/illustrasi-form.png' | url }}" class="img-fluid mb-4" alt="Ilustrasi" style="max-height: 200px;">
        <h2 class="fw-bolder">Pilih Jenis Jaminan</h2>
        <p class="lead text-muted">Silakan pilih jenis jaminan yang akan Anda ajukan.</p>
        <div class="row justify-content-center mt-4 g-3">
            <div class="col-md-4"><button class="btn btn-outline-primary w-100 p-3" data-form="kendaraan">BPKB Mobil / Motor</button></div>
            <div class="col-md-4"><button class="btn btn-outline-primary w-100 p-3" data-form="kendaraan">Kendaraan Baru</button></div>
            <div class="col-md-4"><button class="btn btn-outline-primary w-100 p-3" data-form="properti">Sertifikat (SHM/SHGB)</button></div>
        </div>
    </div>

    <div id="form-kendaraan" class="card p-4 p-md-5 border-0 shadow-lg" style="display: none;">
        <h2 class="fw-bold text-center mb-4">Pengajuan Simulasi Kendaraan</h2>
        <form id="simulasi-form-kendaraan">
            <div class="row">
                <div class="col-md-6 mb-3"><label for="kendaraan-nama" class="form-label">Nama</label><input type="text" class="form-control" id="kendaraan-nama" placeholder="Masukkan nama lengkap Anda" required></div>
                <div class="col-md-6 mb-3"><label for="kendaraan-nomorHp" class="form-label">Nomor HP (WhatsApp)</label><input type="tel" class="form-control" id="kendaraan-nomorHp" placeholder="Contoh: 081234567890" required></div>
                <div class="col-md-12 mb-3"><label for="kendaraan-alamat" class="form-label">Alamat Lengkap</label><input type="text" class="form-control" id="kendaraan-alamat" placeholder="Nama Jalan, No Rumah, RT/RW..." required></div>
                <div class="col-md-6 mb-3"><label for="kendaraan-provinsi" class="form-label">Provinsi</label><input type="text" class="form-control" id="kendaraan-provinsi" placeholder="Contoh: Jawa Barat" required></div>
                <div class="col-md-6 mb-3"><label for="kendaraan-kota" class="form-label">Kota/Kabupaten</label><input type="text" class="form-control" id="kendaraan-kota" placeholder="Contoh: Kota Bandung" required></div>
                <hr class="my-3">
                <div class="col-md-6 mb-3"><label for="kendaraan-tipe" class="form-label">Tipe Kendaraan</label><select id="kendaraan-tipe" class="form-select" required><option selected disabled value="">Pilih tipe kendaraan</option><option>Mobil</option><option>Motor</option></select></div>
                <div class="col-md-6 mb-3"><label for="kendaraan-merk" class="form-label">Merk & Tipe Kendaraan</label><input type="text" class="form-control" id="kendaraan-merk" placeholder="Contoh: Toyota Avanza G" required></div>
                <div class="col-md-6 mb-3"><label for="kendaraan-tahun" class="form-label">Tahun Kendaraan</label><input type="number" class="form-control" id="kendaraan-tahun" placeholder="Contoh: 2018" required></div>
                <div class="col-md-6 mb-3"><label for="kendaraan-plat" class="form-label">Plat Nomor Kendaraan</label><input type="text" class="form-control" id="kendaraan-plat" placeholder="Contoh: B 1234 ABC" required></div>
                <div class="col-md-6 mb-3"><label for="kendaraan-pinjaman" class="form-label">Jumlah Pinjaman (Rp)</label><input type="text" class="form-control" id="kendaraan-pinjaman" placeholder="Rp 50.000.000" required></div>
                <div class="col-md-6 mb-3"><label for="kendaraan-tenor" class="form-label">Tenor (Bulan)</label><select id="kendaraan-tenor" class="form-select" required><option selected disabled value="">Pilih tenor</option><option value="12">12 Bulan (1 Tahun)</option><option value="24">24 Bulan (2 Tahun)</option><option value="36">36 Bulan (3 Tahun)</option><option value="48">48 Bulan (4 Tahun)</option></select></div>
            </div>
            <p class="form-text mt-3">* Kerahasiaan data anda adalah prioritas kami.</p>
            <button type="submit" class="btn btn-primary w-100 fw-bold py-3 mt-2">Kirim Pengajuan via WhatsApp</button>
        </form>
    </div>

    <div id="form-properti" class="card p-4 p-md-5 border-0 shadow-lg" style="display: none;">
        <h2 class="fw-bold text-center mb-4">Pengajuan Simulasi Properti</h2>
        <form id="simulasi-form-properti">
             <div class="row">
                <div class="col-md-6 mb-3"><label for="properti-nama" class="form-label">Nama</label><input type="text" class="form-control" id="properti-nama" placeholder="Masukkan nama lengkap Anda" required></div>
                <div class="col-md-6 mb-3"><label for="properti-nomorHp" class="form-label">Nomor HP (WhatsApp)</label><input type="tel" class="form-control" id="properti-nomorHp" placeholder="Contoh: 081234567890" required></div>
                <div class="col-md-12 mb-3"><label for="properti-alamat" class="form-label">Alamat Properti</label><input type="text" class="form-control" id="properti-alamat" placeholder="Nama Jalan, No Rumah, RT/RW..." required></div>
                <hr class="my-3">
                <div class="col-md-6 mb-3"><label for="properti-jenis" class="form-label">Jenis Sertifikat</label><select id="properti-jenis" class="form-select" required><option selected disabled value="">Pilih jenis sertifikat</option><option>SHM (Sertifikat Hak Milik)</option><option>SHGB (Sertifikat Hak Guna Bangun)</option></select></div>
                <div class="col-md-6 mb-3"><label for="properti-luas" class="form-label">Luas Tanah (m²)</label><input type="number" class="form-control" id="properti-luas" placeholder="Contoh: 120" required></div>
                <div class="col-md-6 mb-3"><label for="properti-pinjaman" class="form-label">Jumlah Pinjaman (Rp)</label><input type="text" class="form-control" id="properti-pinjaman" placeholder="Rp 500.000.000" required></div>
                <div class="col-md-6 mb-3"><label for="properti-tenor" class="form-label">Tenor (Tahun)</label><select id="properti-tenor" class="form-select" required><option selected disabled value="">Pilih tenor</option><option value="5">5 Tahun</option><option value="10">10 Tahun</option><option value="15">15 Tahun</option><option value="20">20 Tahun</option></select></div>
            </div>
            <p class="form-text mt-3">* Kerahasiaan data anda adalah prioritas kami.</p>
            <button type="submit" class="btn btn-primary w-100 fw-bold py-3 mt-2">Kirim Pengajuan via WhatsApp</button>
        </form>
    </div>
</div>