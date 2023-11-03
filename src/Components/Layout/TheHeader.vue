<template>
  <header>
    <div>
      <img src="" alt="logo" />
      <nav>
        <ul>
          <router-link to="/">Strona głown</router-link>
          <router-link to="/news">Aktualności</router-link>
          <router-link to="/eventCalendar">Terminy wydarzeń</router-link>
          <router-link to="/gallery">Galeria zdjęć</router-link>
          <router-link to="/contact">Kontakt</router-link>
          <router-link to="/contact">Logowanie</router-link>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style scoped>
a {
  margin: 1rem;
}
</style>
