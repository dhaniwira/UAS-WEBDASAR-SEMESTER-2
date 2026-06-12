<template>
  <div class="about-page">
    <div class="page-header">
      <div class="container text-center">
        <h1>Cerita Kami</h1>
        <p>
          Lebih dari sekadar resep, ini adalah warisan budaya yang kami jaga
          dari sumatera barat
        </p>
      </div>
    </div>

    <div class="container py-5">
      <div class="history-section mb-4">
        <div class="history-img fade-in">
          <img
            src="https://i.postimg.cc/kGcGgG1c/Exterior-2.jpg"
            alt="Sejarah Pagi Sore"
          />
        </div>
        <div class="history-text fade-in">
          <span class="accent-text">Sejak 1973</span>
          <h2>Menjaga Warisan Rasa <br />Minangkabau</h2>
          <p>
            Rumah Makan Pagi Sore didirikan dengan sebuah visi sederhana:
            menyajikan hidangan Padang dengan kualitas bahan terbaik dan
            mempertahankan cara memasak tradisional yang otentik. Selama
            beberapa dekade, kami telah berevolusi menjadi simbol kuliner
            premium tanpa pernah mengorbankan akar tradisi kami.
          </p>
          <p>
            Setiap bumbu diracik dari nol setiap harinya. Daging direbus
            berjam-jam untuk mencapai keempukan sempurna. Proses panjang ini
            adalah bukti komitmen kami terhadap mahakarya kuliner yang kami
            sajikan di meja Anda.
          </p>
        </div>
      </div>

      <div class="commitment-section text-center py-5">
        <h2>Komitmen Kami</h2>
        <div class="divider"></div>
        <div class="commitment-grid mt-4">
          <div class="commitment-item card">
            <div class="icon">🌿</div>
            <h3>Bahan Segar Pilihan</h3>
            <p>
              Hanya menggunakan bahan baku segar bermutu tinggi yang diseleksi
              ketat setiap harinya.
            </p>
          </div>
          <div class="commitment-item card">
            <div class="icon">🔥</div>
            <h3>Resep Asli</h3>
            <p>
              Mempertahankan resep asli keluarga dengan takaran rempah yang
              konsisten sejak 1973.
            </p>
          </div>
          <div class="commitment-item card">
            <div class="icon">✨</div>
            <h3>Pelayanan Premium</h3>
            <p>
              Standar kebersihan bintang lima dan keramahan khas Nusantara dalam
              setiap sentuhan.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-header {
  background-color: var(--color-green);
  color: var(--color-white);
  padding: 160px 0 80px;
  position: relative;
  background-image: url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80");
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

.history-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-top: 40px;
}

.history-img img {
  width: 100%;
  border-radius: 12px;
  box-shadow: var(--shadow-lg);
}

.accent-text {
  font-family: var(--font-sans);
  color: var(--color-gold);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.9rem;
  font-weight: 600;
  display: block;
  margin-bottom: 10px;
}

.history-text h2 {
  margin-bottom: 25px;
}

.history-text p {
  font-size: 1.05rem;
  color: var(--color-text-light);
  line-height: 1.8;
  margin-bottom: 20px;
}

.divider {
  width: 60px;
  height: 3px;
  background-color: var(--color-maroon);
  margin: 20px auto;
}

.commitment-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.commitment-item {
  padding: 40px 30px;
  background-color: var(--color-white);
}

.commitment-item .icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.commitment-item h3 {
  font-size: 1.4rem;
  margin-bottom: 15px;
}

@media (max-width: 992px) {
  .history-section {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .history-text {
    order: -1;
  }
  .commitment-grid {
    grid-template-columns: 1fr;
  }
}
</style>
