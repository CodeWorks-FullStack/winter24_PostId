<template>
  <div class="modal fade" :id="modalId" tabindex="-1" :aria-labelledby="modalId + 'Label'" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" :id="modalId + 'Label'">{{ modalTitle }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- <AlbumForm /> -->
          <slot></slot>

        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  props: {
    modalId: { type: String, required: true },
    modalTitle: { type: String, required: true, default: 'Modal title' }
  },
  setup() {
    return {}
  },
}
</script>


<style lang="scss" scoped></style>