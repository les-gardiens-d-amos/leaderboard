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
                  <p class="nav-link">leaderboard</p>
              </li>
              <li>
                  <p class="nav-link">statistiques</p>
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
    color: var(--white);
    display: flex;
    justify-content: space-between;
    position: fixed;
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
    background-color: var(--white);
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
    transition: 0.5s;
}

.nav-link:hover {
    cursor: pointer;
    background-color: var(--white);
    color: var(--primary_c);
}
</style>