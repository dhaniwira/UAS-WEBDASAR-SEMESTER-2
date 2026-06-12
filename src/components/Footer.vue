<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <h2 class="footer-logo">Pagi <span>Sore</span></h2>
          <p class="footer-desc">
            Cita rasa Nusantara premium dengan dedikasi pada tradisi dan
            kualitas rasa yang tinggi dari sumatera barat.
          </p>
        </div>

        <div class="footer-links">
          <h3>Eksplorasi</h3>
          <ul>
            <li><router-link to="/">Beranda</router-link></li>
            <li><router-link to="/menu">Menu Spesial</router-link></li>
            <li><router-link to="/about">Tentang Kami</router-link></li>
            <li><router-link to="/contact">Reservasi</router-link></li>
          </ul>
        </div>

        <div class="footer-contact">
          <h3>Hubungi Kami</h3>
          <p>
            Jl. Kesehatan Raya No.27, RT.3/RW.6, Bintaro, Kec. Pesanggrahan,
            Kota Jakarta<br />
            Selatan, Daerah Khusus Ibukota Jakarta 12330
          </p>
          <p>Telepon: +62 21 1234 5678</p>
          <p>Email: info@pagisore.com</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>
          &copy; {{ new Date().getFullYear() }} Rumah Makan Pagi Sore. Hak Cipta
          Dilindungi.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-green);
  color: var(--color-offwhite);
  padding: 80px 0 30px;
  margin-top: auto;
  position: relative;
  overflow: hidden;
}

/* Subtle pattern for footer */
.footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.05) 1px,
    transparent 1px
  );
  background-size: 20px 20px;
  pointer-events: none;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 50px;
  margin-bottom: 60px;
  position: relative;
  z-index: 1;
}

.footer-logo {
  color: var(--color-white);
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.footer-logo span {
  color: var(--color-gold);
}

.footer-desc {
  color: #c9d4cd;
  max-width: 400px;
  font-size: 1.05rem;
}

.footer-links h3,
.footer-contact h3 {
  color: var(--color-gold);
  font-family: var(--font-sans);
  font-size: 1.1rem;
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: #c9d4cd;
  transition: var(--transition);
}

.footer-links a:hover {
  color: var(--color-gold);
  padding-left: 5px;
}

.footer-contact p {
  color: #c9d4cd;
  margin-bottom: 12px;
}

.footer-bottom {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #8c9c93;
  font-size: 0.9rem;
}

@media (max-width: 992px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
  .footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 576px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .footer {
    padding: 60px 0 20px;
  }
}
</style>
