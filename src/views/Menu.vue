<script setup>
import { ref } from "vue";

const activeCategory = ref("Semua");
const categories = ["Semua", "Lauk Utama", "Sayur", "Minuman"];

const menuItems = [
  {
    id: 1,
    name: "Rendang Daging",
    category: "Lauk Utama",
    desc: "Daging sapi pilihan dengan rempah khas Minang.",
    price: "Rp 35.000",
    img: "https://www.astronauts.id/blog/wp-content/uploads/2023/03/Resep-Rendang-Daging-Sapi-Untuk-Lebaran-Gurih-dan-Nikmat-1024x683.jpg",
  },
  {
    id: 2,
    name: "Ayam Pop",
    category: "Lauk Utama",
    desc: "Ayam kampung rebus gurih dengan sambal petai.",
    price: "Rp 28.000",
    img: "https://asset.kompas.com/crops/P0MLp44e6yBqpKaBBleIHI75uAY=/0x0:3565x2377/1200x800/data/photo/2025/12/14/693e5e2f3a16d.jpg",
  },
  {
    id: 3,
    name: "Gulai Tunjang",
    category: "Lauk Utama",
    desc: "Kikil sapi empuk dengan kuah gulai kental.",
    price: "Rp 32.000",
    img: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2025/07/09015336/tunjang.jpg",
  },
  {
    id: 4,
    name: "Ayam Bakar",
    category: "Lauk Utama",
    desc: "Ayam bakar dengan bumbu kecap pedas manis.",
    price: "Rp 25.000",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShR6b7crr-Tfajmh_20KzA3xTQ67RZiGdX9A&s",
  },
  {
    id: 5,
    name: "Sayur Nangka",
    category: "Sayur",
    desc: "Gulai nangka muda dengan bumbu kuning.",
    price: "Rp 15.000",
    img: "https://rajominang.id/blog/uploads/images/202408/image_750x_66c99dcb50937.jpg",
  },
  {
    id: 6,
    name: "Daun Singkong",
    category: "Sayur",
    desc: "Gulai daun singkong segar.",
    price: "Rp 12.000",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgPFylJdqpTWUhG_kWa2dg6QapZVALrpELMA&s",
  },
  {
    id: 7,
    name: "Es Kampuang",
    category: "Minuman",
    desc: "Es campur tradisional dengan sirup khas.",
    price: "Rp 22.000",
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 8,
    name: "Jus Jeruk Peras",
    category: "Minuman",
    desc: "Jeruk peras murni tanpa gula tambahan.",
    price: "Rp 18.000",
    img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 9,
    name: "Teh Talua",
    category: "Minuman",
    desc: "Teh dengan campuran telur ayam kampung.",
    price: "Rp 20.000",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFww6WoL8eYIVCJd4Du9rUshKlXC_PasVqmA&s",
  },
];

const filteredMenu = () => {
  if (activeCategory.value === "Semua") return menuItems;
  return menuItems.filter((item) => item.category === activeCategory.value);
};
</script>

<template>
  <div class="menu-page">
    <div class="page-header">
      <div class="container text-center">
        <h1>Menu Spesial</h1>
        <p>
          Eksplorasi mahakarya kuliner kami yang disiapkan dengan dedikasi
          penuh.
        </p>
      </div>
    </div>

    <div class="container py-5">
      <!-- Filters -->
      <div class="filter-container">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeCategory = cat"
          :class="['filter-btn', { active: activeCategory === cat }]"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Menu Grid -->
      <div class="menu-grid">
        <div
          v-for="item in filteredMenu()"
          :key="item.id"
          class="card menu-card fade-in"
        >
          <div
            class="menu-img"
            :style="{ backgroundImage: `url(${item.img})` }"
          >
            <span class="category-badge">{{ item.category }}</span>
          </div>
          <div class="menu-content">
            <div class="menu-header">
              <h3>{{ item.name }}</h3>
              <span class="price">{{ item.price }}</span>
            </div>
            <p>{{ item.desc }}</p>
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
  background-image: url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80");
  background-size: cover;
  background-position: center;
}

.page-header::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(31, 61, 44, 0.85); /* Dark green overlay */
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

.filter-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 50px;
}

.filter-btn {
  background: transparent;
  border: 1px solid var(--color-border, #ddd);
  padding: 10px 25px;
  border-radius: 30px;
  font-family: var(--font-sans);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  color: var(--color-text-light);
}

.filter-btn:hover {
  border-color: var(--color-maroon);
  color: var(--color-maroon);
}

.filter-btn.active {
  background-color: var(--color-maroon);
  color: var(--color-white);
  border-color: var(--color-maroon);
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

.menu-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.menu-img {
  height: 220px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.category-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: var(--color-gold);
  color: var(--color-white);
  padding: 5px 12px;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 4px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.menu-content {
  padding: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
  gap: 15px;
}

.menu-header h3 {
  font-size: 1.3rem;
  margin: 0;
  color: var(--color-maroon);
}

.price {
  font-family: var(--font-sans);
  font-weight: 600;
  color: var(--color-gold);
  font-size: 1.1rem;
  white-space: nowrap;
}

.menu-content p {
  color: var(--color-text-light);
  font-size: 0.95rem;
  margin: 0;
  flex: 1;
}
</style>
