<template>
  <h1 v-if="album" :class="{ 'text-danger': album.archived }">
    <!-- THIS IS THE ALBUM DETAILS PAGE -->
    {{ album.title }}
  </h1>
  <h1 v-else class="text-center"> <i class="mdi mdi-loading mdi-spin"></i></h1>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import Pop from '../utils/Pop.js'
import { albumsService } from '../services/albumsService.js'
export default {
  setup() {
    const route = useRoute()
    onMounted(() => {
      getAlbumById()
    })
    async function getAlbumById() {
      try {
        await albumsService.getAlbumById(route.params.albumId)
      } catch (error) {
        Pop.error(error)
      }
    }
    return {
      album: computed(() => AppState.activeAlbum)
    }
  }
};
</script>


<style lang="scss" scoped></style>
