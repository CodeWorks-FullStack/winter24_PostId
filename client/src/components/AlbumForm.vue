<template>
  <form @submit.prevent="createAlbum()">

    <div class="form-floating mb-3">
      <input v-model="editableAlbumData.title" type="text" class="form-control" id="title" placeholder="Album Title"
        minlength="3" maxlength="50" required>
      <label for="title">Title</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editableAlbumData.coverImg" type="url" class="form-control" id="coverImage"
        placeholder="Album Cover Image" minlength="1" maxlength="500" required>
      <label for="coverImage">Cover Image</label>
    </div>
    <div class="form-floating mb-3">
      <select v-model="editableAlbumData.category" class="form-select" id="category"
        aria-label="Floating label select example">
        <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
      </select>
      <label for="category">Category</label>
    </div>

    <div class="text-end">
      <button class="btn btn-primary" type="submit">Submit</button>
    </div>
  </form>
</template>


<script>
import Pop from '../utils/Pop.js'
import { ref } from 'vue'
import { albumsService } from '../services/AlbumsService.js'
export default {
  setup() {
    const editableAlbumData = ref({})

    return {
      editableAlbumData,
      categories: ['cats', 'dogs', 'games', 'aesthetics', 'misc', 'gachamon', 'animals'],

      async createAlbum() {
        try {
          await albumsService.createAlbum(editableAlbumData.value)
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped></style>