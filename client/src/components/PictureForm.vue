<template>
  <form @submit.prevent="createPicture()">
    <div class="form-floating mb-3">
      <input v-model="editablePictureData.imgUrl" type="url" class="form-control" id="imgUrl" placeholder="Image URL"
        minlength="5" maxlength="1000" required>
      <label for="imgUrl">Image Url</label>
    </div>

    <div class="text-end">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
</template>


<script>
import { ref } from 'vue';
import { picturesService } from '../services/PicturesService.js';
import Pop from '../utils/Pop.js';
import { useRoute } from 'vue-router';
import { Modal } from 'bootstrap';

export default {
  setup() {
    const editablePictureData = ref({ imgUrl: '', albumId: '' })
    const route = useRoute()
    return {
      editablePictureData,

      async createPicture() {
        try {
          const pictureData = editablePictureData.value
          const albumId = route.params.albumId
          pictureData.albumId = albumId.toString()
          await picturesService.createPicture(pictureData)

          editablePictureData.value = { imgUrl: '', albumId: '' } // clear form
          Modal.getOrCreateInstance('#pictureModal').hide() // close modal
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped></style>