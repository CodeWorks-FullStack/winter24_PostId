<template>
  <div class="container-fluid">
    <section v-if="album" class="row">
      <!-- ANCHOR album details -->
      <div class="col-4">

        <section class="row">
          <div class="col-6">
            <img :src="album.coverImg" :alt="album.title" class="img-fluid">
          </div>
          <div class="col-6">
            <h1 class="fs-4" :class="{ 'text-danger': album.archived }">
              {{ album.title }}
            </h1>
            <h2 class="fs-5">By {{ album.creator.name }}</h2>
          </div>
        </section>
      </div>

      <!-- ANCHOR pictures -->
      <div class="col-8">

        {{ pictures }}
      </div>
    </section>
    <section v-else class="row">
      <div class="col-12">
        <h1 class="text-center"> <i class="mdi mdi-loading mdi-spin"></i></h1>
      </div>
    </section>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import Pop from '../utils/Pop.js'
import { albumsService } from '../services/AlbumsService.js'
import { picturesService } from '../services/PicturesService.js';
export default {
  setup() {
    const route = useRoute()
    onMounted(() => {
      getAlbumById()
      getPicturesByAlbumId()
    })

    async function getAlbumById() {
      try {
        await albumsService.getAlbumById(route.params.albumId)
      } catch (error) {
        Pop.error(error)
      }
    }

    async function getPicturesByAlbumId() {
      try {
        await picturesService.getPicturesByAlbumId(route.params.albumId)
      } catch (error) {
        Pop.error(error)
      }
    }
    return {
      album: computed(() => AppState.activeAlbum),
      pictures: computed(() => AppState.pictures)
    }
  }
};
</script>


<style lang="scss" scoped></style>
