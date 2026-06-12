<template>
  <div class="contact-page">
    <div class="page-header">
      <div class="container text-center">
        <h1>Lokasi & Reservasi</h1>
        <p>
          Kunjungi restoran kami atau lakukan reservasi untuk pengalaman
          bersantap yang eksklusif.
        </p>
      </div>
    </div>

    <div class="container py-5">
      <div class="contact-grid">
        <!-- Contact Info & Map -->
        <div class="contact-info fade-in">
          <h2>Kunjungi Kami</h2>
          <div class="info-item mt-4">
            <div class="icon">📍</div>
            <div>
              <h3>Alamat Restoran</h3>
              <p>
                Jl. Kesehatan Raya No.27 Sektor 1, RT.3/RW.6, Bintaro,<br />
                Kec. Pesanggrahan, Kota Jakarta Selatan, Daerah Khusus Ibukota
                Jakarta 12330
              </p>
            </div>
          </div>

          <div class="info-item">
            <div class="icon">🕒</div>
            <div>
              <h3>Jam Operasional</h3>
              <p>
                Setiap Hari: 10:00 - 22:00 WIB<br />Libur Nasional tetap buka
              </p>
            </div>
          </div>

          <div class="info-item">
            <div class="icon">📞</div>
            <div>
              <h3>Kontak</h3>
              <p>Telepon: +62 21 1234 5678<br />Email: rsv@pagisore.com</p>
            </div>
          </div>

          <!-- Map Embed -->
          <div class="map-container mt-4">
            <iframe
              class="map-iframe"
              src="https://www.google.com/maps?q=Jl.%20Kesehatan%20Raya%20No.27%20Sektor%201%2C%20RT.3%2FRW.6%2C%20Bintaro%2C%20Kec.%20Pesanggrahan%2C%20Kota%20Jakarta%20Selatan%2C%20DKI%20Jakarta%2012330&output=embed"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <!-- Reservation Form -->
        <div class="reservation-form card fade-in">
          <h2>Reservasi Meja</h2>
          <p class="mb-4 text-light">
            Pastikan meja Anda tersedia dengan melakukan reservasi sebelumnya,
            terutama untuk ruang VIP.
          </p>

          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Nama Lengkap</label>
              <input
                type="text"
                id="name"
                class="form-control"
                placeholder="Masukkan nama Anda"
                required
              />
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="phone">Nomor Telepon</label>
                <input
                  type="tel"
                  id="phone"
                  class="form-control"
                  placeholder="Contoh: 0812..."
                  required
                />
              </div>
              <div class="form-group">
                <label for="email">Email (Opsional)</label>
                <input
                  type="email"
                  id="email"
                  class="form-control"
                  placeholder="email@domain.com"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="date">Tanggal</label>
                <input type="date" id="date" class="form-control" required />
              </div>
              <div class="form-group">
                <label for="time">Waktu</label>
                <input type="time" id="time" class="form-control" required />
              </div>
            </div>

            <div class="form-group">
              <label for="guests">Jumlah Tamu</label>
              <select id="guests" class="form-control" required>
                <option value="" disabled selected>Pilih jumlah tamu</option>
                <option value="2">2 Orang</option>
                <option value="4">4 Orang</option>
                <option value="6">6 Orang</option>
                <option value="8">8 Orang</option>
                <option value="10+">Lebih dari 10 Orang (VIP)</option>
              </select>
            </div>

            <div class="form-group">
              <label for="notes">Catatan Tambahan (Opsional)</label>
              <textarea
                id="notes"
                class="form-control"
                rows="3"
                placeholder="Alergi, permintaan khusus, dll."
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary w-100">
              Kirim Permintaan Reservasi
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const submitForm = () => {
  alert(
    "Permintaan reservasi Anda telah terkirim. Staf kami akan segera menghubungi Anda untuk konfirmasi.",
  );
};
</script>

<style scoped>
.page-header {
  background-color: var(--color-green);
  color: var(--color-white);
  padding: 160px 0 80px;
  position: relative;
  background-image: url("https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80");
  background-size: cover;
  background-position: center;
}

.page-header::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(31, 61, 44, 0.85);
}

.page-header .container {
  position: relative;
  z-index: 1;
}

.page-header h1 {
  color: var(--color-white);
  margin-bottom: 15px;
}

.page-header p {
  font-size: 1.2rem;
  color: #d1dfd6;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-top: 40px;
}

.info-item {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.info-item .icon {
  font-size: 2rem;
  background: var(--color-gold-light);
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.info-item h3 {
  font-size: 1.2rem;
  margin-bottom: 5px;
  font-family: var(--font-sans);
}

.info-item p {
  color: var(--color-text-light);
  margin: 0;
}

.map-container {
  width: 100%;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.map-iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

/* Form Styles */
.reservation-form {
  padding: 40px;
}

.reservation-form h2 {
  margin-bottom: 10px;
}

.text-light {
  color: var(--color-text-light);
}

.form-group {
  margin-bottom: 20px;
}

.form-row {
  display: flex;
  gap: 20px;
}

.form-row .form-group {
  flex: 1;
}

label {
  display: block;
  font-weight: 500;
  margin-bottom: 8px;
  font-size: 0.95rem;
}

.form-control {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: var(--font-sans);
  font-size: 1rem;
  transition: var(--transition);
  background-color: #fafafa;
}

.form-control:focus {
  outline: none;
  border-color: var(--color-maroon);
  background-color: var(--color-white);
  box-shadow: 0 0 0 3px rgba(123, 17, 19, 0.1);
}

textarea.form-control {
  resize: vertical;
}

.w-100 {
  width: 100%;
}

@media (max-width: 992px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 576px) {
  .form-row {
    flex-direction: column;
    gap: 0;
  }
  .reservation-form {
    padding: 30px 20px;
  }
}
</style>
