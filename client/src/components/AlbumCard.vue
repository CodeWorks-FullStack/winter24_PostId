<template>
  <RouterLink :to="{name: 'Album Details', params: {albumId: album.id}}">
    <div class="border shadow bg-info rounded">
      <img :src="album.coverImg" class="album-cover" :alt="`cover image for album ${album.title}`">
      <div class="text-light text-center fw-bold p-2">
        {{ album.title }}
      </div>
      {{ x + y }}
    </div>
  </RouterLink>
</template>


<script>
import { Album} from '../models/Album.js'
export default {
props: {album: {type: Album, required: true}, x: Number, y: Number},
setup(){
return{
  //why can't i compute something?
}
}
}
</script>


<style lang="scss" scoped>
.album-cover{
  height: 25vh;
  width: 100%;
  object-position: center;
  object-fit: cover;
}

</style>
