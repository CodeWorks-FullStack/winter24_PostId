<template>
  <div class="container">
    <section class="row my-2 g-4">
      <!-- THE ALBUMS WILL GO HERE -->
      <!-- {{ albums }} -->
      <div v-for="album in albums" :key="album.id" class="col-6 col-md-3">
        <!-- {{ album.title }} -->
        <AlbumCard :album="album" :x="5" :y="7" />
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { albumsService } from '../services/AlbumsService.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import AlbumCard from '../components/AlbumCard.vue'

export default {
  setup() {
    onMounted(() => {
      getAlbums()
    })
    async function getAlbums() {
      try {
        await albumsService.getAlbums()
      } catch (error) {
        Pop.error(error)
      }
    }
    return {
      albums: computed(() => AppState.albums)
    }
  },
  components: { AlbumCard }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
