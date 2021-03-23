<template>
  <div class="container">
    <div>
      <div class="image-container">
        <img :src="item.image" />
      </div>

      <div>
        <h1>{{item.name}}</h1>
        <div class="btn">
          <button @click="deleteItem(item.price)">-</button>
          {{quantity}}
          <button @click="addItem(item.price)">+</button>
        </div>
        <div class="total">Total: {{total}}</div>
      </div>
    </div>

    <div class="customizations">
      <button class="close-btn" @click="close">&#215;</button>
      <div v-if="item.customizations.required.length">
        <h3>Select a base:</h3>
        <h5>(Choose one)</h5>
        <div v-for="requiredItem in item.customizations.required" v-bind:key="requiredItem.id">
          <input
            type="radio"
            v-model="requiredCustomization"
            name="profileImg"
            class="radio-btn"
            :value="requiredItem.id"
          />
          {{requiredItem.name}}
        </div>
      </div>

      <div>
        <div v-if="optionalItemsWithoutImage.length">
          <h3>Optional Customizations:</h3>
          <div
            v-for="optionalItem in optionalItemsWithoutImage"
            v-bind:key="optionalItem.id"
            class="optional-checkbox"
          >
            <div>
              <input
                type="checkbox"
                v-model="optionalCustomization"
                :name="optionalItem.id"
                :value="optionalItem.id"
                @change="toggleCustomization(optionalItem.id)"
              />
              {{optionalItem.name}}
            </div>
            <span>&#8377;{{optionalItem.price}}</span>
          </div>
        </div>

        <div v-if="optionalItemsWithImage.length">
          <h3>Extras:</h3>
          <div class="image-customization">
            <div
              v-for="optionalItem in optionalItemsWithImage"
              v-bind:key="optionalItem.id"
              class="optional-checkbox"
            >
              <div class="optional-img-container" @click="toggleCustomization(optionalItem.id)">
                <img
                  class="optional-img"
                  :src="optionalItem.image"
                  v-bind:class="{'selected ':isSelected(optionalItem.id)}"
                />
                {{optionalItem.name}}
                <span>&#8377;{{optionalItem.price}}</span>
              </div>
            </div>
          </div>
        </div>
        <button class="make-payment-btn" @click="close">MAKE PAYMENT</button>
      </div>
    </div>
  </div>
</template>
<script>

export default {
    props: ['item'],
    data() {
        return {
            quantity: 1,
            total: 0,
            customizationIdsApplied: [],
            requiredCustomization: 0,
            optionalCustomization: [],
            optionalItemsWithImage: null,
            optionalItemsWithoutImage: null
        }
    },
    methods: {
        addItem(price) {
            this.quantity = this.quantity +1;
            this.total = this.total + price;
        },
        deleteItem(price) {
            if(this.quantity>1) {
            this.quantity = this.quantity -1;
            this.total = this.total - price;
            } 
        },
        close() {
            this.$emit('close');
        },
        isSelected(id) {
            return (this.customizationIdsApplied.indexOf(id) >= 0);
        },
        getCustomization(id) {
            return this.item.customizations.optional.filter(customization=> customization.id === id);
        },
        toggleCustomization(id) {
            if(this.isSelected(id)) {
                this.customizationIdsApplied.splice(this.customizationIdsApplied.indexOf(id), 1);
                const customization = this.getCustomization(id);
                this.total -= Number(customization[0].price);
            } else {
                this.customizationIdsApplied.push(id);
                const customization = this.getCustomization(id);
                this.total += Number(customization[0].price);
            }
            
        }
    },
    beforeMount(){
        this.total = this.item.price;
        this.requiredCustomization = this.item.customizations.required[0].id;
        this.optionalItemsWithImage = (this.item.customizations.optional.filter(customization=> (customization.image)));
        this.optionalItemsWithoutImage = (this.item.customizations.optional.filter(customization=> !(customization.image)));
    }
}
</script>

<style scoped>
.image-container {
  height: 350px;
  width: 350px;
  overflow: hidden;
}
.container {
  display: flex;
  overflow: hidden;
  min-width: 800px;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid lightgrey;
}
.btn {
  background: burlywood;
  border-radius: 3px;
  padding: 5px;
  display: inline-flex;
}
.btn > button {
  border: none;
  background: burlywood;
  border-radius: 3px;
  width: 20px;
  cursor: pointer;
}
.optional-checkbox {
  display: flex;
  cursor: pointer;
  justify-content: space-between;
}
.btn > button:focus {
  border: none;
}
.total {
  float: right;
}
.customizations {
  text-align: left;
  margin-left: 20px;
  width: 100%;
  border-left: 1px solid lightgrey;
  padding-left: 20px;
}
.selected {
  border: 2px solid green !important;
}
.radio-btn {
  cursor: pointer;
}
.close-btn {
  background: white;
  cursor: pointer;
  float: right;
  border: none;
}
.make-payment-btn {
  border: none;
  background: burlywood;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 40px;
  padding: 10px;
  float: right;
}
.image-customization {
  display: flex;
}
.optional-img-container {
  display: grid;
  margin-right: 20px;
}
.optional-img {
  height: 100px;
  border-radius: 5px;
  border: 2px solid white;
}

@media (max-width: 767px) {
  .container {
    display: block;
    min-width: unset;
  }
  .customizations {
    margin-left: unset;
    width: unset;
    border-left: unset;
    padding-left: unset;
  }
  .close-btn {
    background: white;
    cursor: pointer;
    float: right;
    position: fixed;
    top: 10px;
    right: 10px;
    border-radius: 50%;
    padding: 10px;
    width: 35px;
    height: 35px;
  }
  .make-payment-btn {
    width: 100%;
  }
  .total {
    float: unset;
    margin: 10px 0px;
  }
}
</style>