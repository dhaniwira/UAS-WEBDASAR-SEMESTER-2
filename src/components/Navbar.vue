<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const isMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header :class="['navbar', { 'navbar-scrolled': isScrolled }]">
    <div class="container navbar-container">
      <router-link to="/" class="logo"> Pagi <span>Sore</span> </router-link>

      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <span class="hamburger"></span>
      </button>

      <nav :class="['nav-links', { 'nav-active': isMenuOpen }]">
        <router-link to="/" class="nav-item" @click="isMenuOpen = false"
          >Beranda</router-link
        >
        <router-link to="/menu" class="nav-item" @click="isMenuOpen = false"
          >Menu</router-link
        >
        <router-link to="/about" class="nav-item" @click="isMenuOpen = false"
          >Tentang Kami</router-link
        >
        <router-link to="/contact" class="nav-item" @click="isMenuOpen = false"
          >Lokasi</router-link
        >
        <router-link
          to="/contact"
          class="btn btn-outline nav-cta"
          @click="isMenuOpen = false"
          >Reservasi</router-link
        >
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.4s ease;
  padding: 20px 0;
  background-color: transparent;
}

.navbar-scrolled {
  background-color: rgba(253, 251, 247, 0.95);
  backdrop-filter: blur(10px);
  padding: 15px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: var(--font-serif);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-maroon);
  letter-spacing: 1px;
}

.logo span {
  color: var(--color-gold);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-item {
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
}

.nav-item::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-gold);
  transition: width 0.3s ease;
}

.nav-item:hover::after,
.router-link-active.nav-item::after {
  width: 100%;
}

.nav-cta {
  padding: 8px 24px;
  font-size: 0.9rem;
}

.menu-toggle {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
}

.hamburger {
  display: block;
  width: 25px;
  height: 2px;
  background-color: var(--color-maroon);
  position: relative;
  transition: all 0.3s ease;
}

.hamburger::before,
.hamburger::after {
  content: "";
  position: absolute;
  width: 25px;
  height: 2px;
  background-color: var(--color-maroon);
  left: 0;
  transition: all 0.3s ease;
}

.hamburger::before {
  top: -8px;
}
.hamburger::after {
  top: 8px;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
    z-index: 1001;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 300px;
    height: 100vh;
    background-color: var(--color-white);
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    transition: right 0.4s cubic-bezier(0.77, 0.2, 0.05, 1);
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
  }

  .nav-active {
    right: 0;
  }
}
</style>
