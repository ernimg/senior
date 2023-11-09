<template>
  <header>
    <nav>
      <img src="" alt="logo" />
      <ul>
        <router-link to="/">Strona głown</router-link>
        <router-link to="/news">Aktualności</router-link>
        <router-link to="/eventCalendar">Terminy wydarzeń</router-link>
        <router-link to="/gallery">Galeria zdjęć</router-link>
        <router-link to="/contact">Kontakt</router-link>
        <router-link to="/admin">Logowanie</router-link>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
header {
  margin-bottom: 5.62rem;
}
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5.62rem;
  display: flex;
  align-items: center;
  background-color: #000;
}
nav img {
  flex-basis: 30%;
}
nav ul {
  display: flex;
  justify-content: space-around;

  flex-basis: 70%;
  gap: 1rem;
}
a {
  color: #fff;
  text-decoration: none;
  padding: 0.25rem;
}
</style>
