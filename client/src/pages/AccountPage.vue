<template>
  <div class="container">
    <section class="row">
      <div v-for="collab in collaborators" :key="collab.id" class="col-md-3">
        <AlbumCard :album="collab.album" />
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState';
import Pop from '../utils/Pop.js';
import { collaboratorsService } from '../services/CollaboratorsService.js';
import AlbumCard from '../components/AlbumCard.vue';
export default {
  setup() {
    onMounted(() => {
      getMyAlbumCollaborations()
    })

    async function getMyAlbumCollaborations() {
      try {
        await collaboratorsService.getMyAlbumCollaborations()
      } catch (error) {
        Pop.error(error)
      }
    }
    return {
      account: computed(() => AppState.account),
      collaborators: computed(() => AppState.albumCollaborators)
    }
  },
  components: { AlbumCard }
}
</script>

<style scoped></style>
