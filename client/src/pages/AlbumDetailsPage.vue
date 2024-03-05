<template>
  <div class="container-fluid">
    <section v-if="album" class="row my-3">
      <!-- ANCHOR album details -->
      <div class="col-4">
        <section class="row">
          <div class="col-6">
            <img :src="album.coverImg" :alt="album.title" class="img-fluid">
          </div>
          <div class="col-6">
            <div>
              <h1 class="fs-4" :class="{ 'text-danger': album.archived }">
                {{ album.title }}
              </h1>
              <h2 class="fs-5">By {{ album.creator.name }}</h2>
            </div>

            <div class="mt-2">
              <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#pictureModal">
                <i class="mdi mdi-plus-box"></i>
                Add Picture
              </button>
            </div>
          </div>
        </section>
      </div>

      <!-- ANCHOR pictures -->
      <div class="col-8 masonry">
        <img v-for="picture in pictures" :key="picture.id" :src="picture.imgUrl"
          :alt="`${picture.creator.name}'s picture'`">
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


<style lang="scss" scoped>
.masonry {
  columns: 200px;

  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 1px 1px 15px black;
    margin-bottom: 1em;
  }
}
</style>
