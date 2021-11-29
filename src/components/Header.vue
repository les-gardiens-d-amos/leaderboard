<template>
  <header class="header">
      <div class="logo-container">
        <div class="image-logo-container">
            <img alt="Amos Guardian" src="../assets/guardian-amos-logo.png" class="guardian-logo" />
        </div>
        <h1 class="title">Les Gardiens d'Amos</h1>
      </div>
      <nav class="nav-container">
          <ul>
              <li>
                  <router-link to="/" class="nav-link">leaderboard</router-link>
              </li>
              <li>
                  <router-link to="/statistics" class="nav-link">statistiques</router-link>
              </li>
          </ul>
      </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>
.header {
    width: 100%;
    height: 60px;
    background-color: var(--primary_c);
    color: #fff;
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 10000;
}

.logo-container {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-logo-container {
    width: 14%;
    margin-top: 45px;
    background-color: #fff;
    border: 4px solid var(--primary_c);
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 54px;
}

.guardian-logo {
    height: 100px;
    width: 100px;
}

.title {
    width: 70%;
    padding-left: 20px;
}

.nav-container {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav-container ul {
    width: 50%;
    list-style-type: none;
    display: flex;
    flex-direction: row;
}

.nav-container ul > li {
    margin-left: 25px;
}

.nav-link {
    padding: 10px;
    border-radius: 10px;
    text-decoration: none;
    color: #fff;
    transition: 0.5s;
}

.nav-link:hover {
    cursor: pointer;
    background-color: #fff;
    color: var(--primary_c);
}
</style>