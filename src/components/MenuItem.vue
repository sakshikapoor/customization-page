<template>
  <div class="main-container" @click.self="closeModal">
    <div class="item-container">
      <div class="image-container">
        <img :src="item.image" />
      </div>
      <h1>{{item.name}}</h1>
      <button @click.self="toggleModal" class="add-btn">ADD +</button>
    </div>
    <div v-if="showModal" class="modal-container">
      <Modal :item="item" @close="closeModal" />
    </div>
  </div>
</template>

<script>
import Modal from './Modal';

export default {
    props: ['item'],
    components: {
      Modal
    },
    data() {
      return {
        showModal: false
      }
    },
    methods : {
      toggleModal() {
        this.showModal = !this.showModal;
      },
      closeModal() {
        this.showModal = false;
      }
    }
}
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.item-container {
  border: 1px solid lightgrey;
  width: fit-content;
}
.image-container {
  margin: 20px;
  text-align: center;
  max-width: 300px;
  max-height: 300px;
  border-radius: 5px;
  overflow: hidden;
  display: inline-block;
}
.add-btn {
  margin: 20px 10px;
  border: none;
  padding: 10px;
  border-radius: 3px;
  background: burlywood;
  cursor: pointer;
}
.modal-container {
  z-index: 2;
  position: fixed;
  background: white;
}
@media (max-width: 767px) {
  .modal-container {
    position: absolute;
    width: 100%;
  }
}
</style>
