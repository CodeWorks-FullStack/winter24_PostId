<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <img alt="logo" src="../assets/img/cw-logo.png" height="45" />
      </div>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto gap-3">
        <li v-if="account.id">
          <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#albumModal">
            <i class="mdi mdi-plus-box-outline me-1"></i>Create Album
          </button>
        </li>
        <li v-if="route.name == 'Album Details' && activeAlbum && activeAlbum.creatorId == account.id">
          <button @click="archiveAlbum()" class="btn btn-success" type="button" :disabled="activeAlbum.archived">
            <i class="mdi mdi-close-circle me-1"></i>Archive Album
          </button>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <div>
        <button class="btn text-light" @click="toggleTheme">
          <i class="mdi" :class="theme == 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"></i>
        </button>
      </div>
      <Login />
    </div>
  </nav>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import Login from './Login.vue';
import { useRoute } from 'vue-router';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { albumsService } from '../services/AlbumsService.js';
import { AppState } from '../AppState.js';
export default {
  setup() {
    const route = useRoute()

    const theme = ref(loadState('theme') || 'light')

    onMounted(() => {
      document.documentElement.setAttribute('data-bs-theme', theme.value)
      logger.log(route)
    })

    return {
      route,
      theme,
      activeAlbum: computed(() => AppState.activeAlbum),
      account: computed(() => AppState.account),

      toggleTheme() {
        theme.value = theme.value == 'light' ? 'dark' : 'light'
        document.documentElement.setAttribute('data-bs-theme', theme.value)
        saveState('theme', theme.value)
      },

      async archiveAlbum() {
        try {
          const album = AppState.activeAlbum
          const wantsToArchive = await Pop.confirm(`Are you sure you want to archive ${album.title}?`)
          if (!wantsToArchive) { return }
          await albumsService.archiveAlbum(album.id)
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 576px) {
  nav {
    height: 64px;
  }
}
</style>
