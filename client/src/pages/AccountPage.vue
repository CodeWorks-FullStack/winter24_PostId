<template>
  <div class="container">
    <section class="row">
      <div class="col-md-3">

      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState';
import Pop from '../utils/Pop.js';
import { collaboratorsService } from '../services/CollaboratorsService.js';
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
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped></style>
