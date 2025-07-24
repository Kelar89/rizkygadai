---
title: Pengajuan Simulasi Pinjaman
layout: base.njk
---
<div class="container my-5">
    <div class="card p-4 p-md-5 border-0 shadow-lg">
        <div class="text-center mb-5">
            <img src="{{ '/assets/img/illustrasi-form.png' | url }}" class="img-fluid mb-4" alt="Ilustrasi" style="max-height: 200px;">
            <h2 class="fw-bold">Pengajuan Simulasi</h2>
            <hr class="mx-auto" style="width: 50px;">
        </div>
        <form id="simulasi-form">
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="nama" class="form-label">Nama</label>
                    <input type="text" class="form-control" id="nama" placeholder="Masukkan nama anda" required>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="nomorHp" class="form-label">Nomor HP (WhatsApp)</label>
                    <input type="tel" class="form-control" id="nomorHp" placeholder="089999999999" required>
                </div>
                 <div class="col-md-12 mb-3">
                    <label for="alamat" class="form-label">Alamat Lengkap</label>
                    <input type="text" class="form-control" id="alamat" placeholder="Nama Jalan, No Rumah, RT/RW..." required>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="form-provinsi" class="form-label">Provinsi</label>
                    <input type="text" class="form-control" id="form-provinsi" placeholder="Contoh: Jawa Barat" required>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="form-kota" class="form-label">Kota/Kabupaten</label>
                    <input type="text" class="form-control" id="form-kota" placeholder="Contoh: Kota Bandung" required>
                </div>
                 <div class="col-md-6 mb-3">
                    <label for="form-kecamatan" class="form-label">Kecamatan</label>
                    <input type="text" class="form-control" id="form-kecamatan" placeholder="Contoh: Sukajadi" required>
                </div>
                 <div class="col-md-6 mb-3">
                    <label for="form-kodepos" class="form-label">Kode Pos</label>
                    <input type="text" class="form-control" id="form-kodepos" placeholder="Masukkan kode pos">
                </div>
                <hr class="my-3">
                <div class="col-md-6 mb-3">
                    <label for="tipeKendaraan" class="form-label">Tipe Kendaraan</label>
                    <select id="tipeKendaraan" class="form-select" required>
                        <option selected disabled value="">Pilih tipe kendaraan</option>
                        <option>Mobil</option>
                        <option>Motor</option>
                    </select>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="merkKendaraan" class="form-label">Merk & Tipe Kendaraan</label>
                    <input type="text" class="form-control" id="merkKendaraan" placeholder="Contoh: Toyota Avanza G" required>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="tahunKendaraan" class="form-label">Tahun Kendaraan</label>
                    <input type="number" class="form-control" id="tahunKendaraan" placeholder="2014" required>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="platNomor" class="form-label">Plat Nomor Kendaraan</label>
                    <input type="text" class="form-control" id="platNomor" placeholder="B 1234 ABC" required>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="jumlahPinjaman" class="form-label">Jumlah Pinjaman (Rp)</label>
                    <input type="text" class="form-control" id="jumlahPinjaman" placeholder="Rp 50.000.000" required>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="tenor" class="form-label">Tenor (Bulan)</label>
                    <select id="tenor" class="form-select" required>
                        <option selected disabled value="">Pilih tenor</option>
                        <option value="1">1 Bulan</option>
                        <option value="3">3 Bulan</option>
                        <option value="6">6 Bulan</option>
                        <option value="12">12 Bulan (1 Tahun)</option>
                        <option value="24">24 Bulan (2 Tahun)</option>
                        <option value="36">36 Bulan (3 Tahun)</option>
                        <option value="48">48 Bulan (4 Tahun)</option>
                        <option value="60">60 Bulan (5 Tahun)</option>
                    </select>
                </div>
            </div>
            <p class="form-text mt-3">* Kerahasiaan data anda adalah prioritas kami.</p>
            <button type="submit" class="btn btn-primary w-100 fw-bold py-3 mt-2">Kirim Pengajuan via WhatsApp</button>
        </form>
    </div>
</div>