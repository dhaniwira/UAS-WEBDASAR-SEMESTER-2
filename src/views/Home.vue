<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero fade-in">
      <div class="hero-content container">
        <span class="subtitle">Selamat Datang di</span>
        <h1 class="hero-title">Rumah Makan<br>Pagi <span>Sore</span></h1>
        <p class="hero-desc">Menyajikan mahakarya kuliner Minangkabau dengan kualitas premium dan resep warisan otentik sejak 1973.</p>
        <div class="hero-actions">
          <router-link to="/menu" class="btn btn-primary">Lihat Menu</router-link>
          <router-link to="/contact" class="btn btn-outline" style="color: white; border-color: white;">Reservasi Meja</router-link>
        </div>
      </div>
      <div class="hero-overlay"></div>
    </section>

    <!-- Featured Section -->
    <section class="featured py-5">
      <div class="container">
        <div class="section-header text-center mb-4">
          <span class="accent-text">Cita Rasa Otentik</span>
          <h2>Mahakarya Kami</h2>
          <div class="divider"></div>
        </div>

        <div class="featured-grid">
          <div class="card featured-card">
            <div class="card-img" style="background-image: url('https://www.astronauts.id/blog/wp-content/uploads/2023/03/Resep-Rendang-Daging-Sapi-Untuk-Lebaran-Gurih-dan-Nikmat-1024x683.jpg');"></div>
            <div class="card-content">
              <h3>Rendang Daging Spesial</h3>
              <p>Diolah lambat selama 8 jam menggunakan rempah pilihan dan santan murni, menghasilkan tekstur daging yang empuk dengan bumbu yang meresap sempurna.</p>
            </div>
          </div>
          
          <div class="card featured-card">
            <div class="card-img" style="background-image: url('https://asset.kompas.com/crops/P0MLp44e6yBqpKaBBleIHI75uAY=/0x0:3565x2377/1200x800/data/photo/2025/12/14/693e5e2f3a16d.jpg');"></div>
            <div class="card-content">
              <h3>Ayam Pop Original</h3>
              <p>Kelezatan ayam kampung pilihan yang direbus dengan air kelapa dan bumbu khas, disajikan dengan sambal petai yang menggugah selera.</p>
            </div>
          </div>
        </div>

        <div class="text-center mt-4">
          <router-link to="/menu" class="btn btn-outline">Jelajahi Semua Menu</router-link>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="experience">
      <div class="container experience-grid">
        <div class="experience-text">
          <span class="accent-text">Pengalaman</span>
          <h2>Pelayanan Bintang Lima,<br>Kehangatan Tradisional</h2>
          <p>Kami tidak sekadar menyajikan makanan, melainkan menghadirkan pengalaman bersantap yang tak terlupakan. Desain interior kami menggabungkan elemen tradisional Minang dengan kenyamanan modern kelas atas.</p>
          <ul class="features-list">
            <li><i class="icon-check"></i> Ruang VIP Eksklusif</li>
            <li><i class="icon-check"></i> Kebersihan Bintang Lima</li>
            <li><i class="icon-check"></i> Pelayanan Ramah & Profesional</li>
          </ul>
          <router-link to="/about" class="btn btn-gold mt-4">Kisah Kami</router-link>
        </div>
        <div class="experience-image">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Interior Pagi Sore" class="img-fluid rounded-lg shadow-lg">
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  height: 100vh;
  min-height: 600px;
  background-image: url("../assets/rumah.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 80px;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, rgba(26, 6, 6, 0.9) 0%, rgba(26, 6, 6, 0.6) 50%, rgba(26, 6, 6, 0.3) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  color: var(--color-white);
  max-width: 700px;
}

.subtitle {
  font-family: var(--font-sans);
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 0.9rem;
  color: var(--color-gold);
  display: block;
  margin-bottom: 10px;
}

.hero-title {
  color: var(--color-white);
  font-size: clamp(3rem, 6vw, 5.5rem);
  margin-bottom: 20px;
}

.hero-title span {
  color: var(--color-gold);
}

.hero-desc {
  font-size: 1.1rem;
  color: #e0e0e0;
  margin-bottom: 40px;
  max-width: 550px;
}

.hero-actions {
  display: flex;
  gap: 20px;
}

/* Featured Section */
.section-header .accent-text {
  font-family: var(--font-sans);
  color: var(--color-gold);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.9rem;
  font-weight: 600;
}

.divider {
  width: 60px;
  height: 3px;
  background-color: var(--color-maroon);
  margin: 20px auto;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  margin-top: 40px;
}

.featured-card {
  display: flex;
  flex-direction: column;
}

.card-img {
  height: 300px;
  background-size: cover;
  background-position: center;
}

.card-content {
  padding: 30px;
}

.card-content h3 {
  margin-bottom: 15px;
  font-size: 1.6rem;
}

.card-content p {
  color: var(--color-text-light);
  line-height: 1.7;
}

/* Experience Section */
.experience {
  background-color: var(--color-white);
  padding: 100px 0;
  border-top: 1px solid rgba(0,0,0,0.05);
}

.experience-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.experience-text h2 {
  margin: 10px 0 25px;
}

.features-list {
  list-style: none;
  padding: 0;
  margin-top: 25px;
}

.features-list li {
  margin-bottom: 15px;
  font-size: 1.05rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.features-list li::before {
  content: '✓';
  color: var(--color-gold);
  font-weight: bold;
  font-size: 1.2rem;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.rounded-lg {
  border-radius: 12px;
}

.shadow-lg {
  box-shadow: var(--shadow-lg);
}

@media (max-width: 992px) {
  .experience-grid {
    grid-template-columns: 1fr;
  }
  .hero-actions {
    flex-direction: column;
    max-width: 300px;
  }
}

@media (max-width: 576px) {
  .featured-grid {
    grid-template-columns: 1fr;
  }
}
</style>
