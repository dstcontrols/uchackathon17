<template>
    <div class="TruckSelect">
        <b-form-select v-model="selected" 
                    :options="options"
                    :default-option="defaultOption"
                    calss="mb-3"
        ></b-form-select>
    </div>
</template>

<script type = "text/javascript" >

export default {
  name: 'TruckSelect',
  data: {
    selected: 'default',
    defaultOption: {
      text: 'Please select some item',
      value: 'default',
    },
    options: [{
      text: 'This is First option',
      value: 'a',
    }, {
      text: 'Default Selected Option',
      value: 'b',
    }, {
      text: 'This is another option',
      value: 'c',
    }, {
      text: 'This one is disabled',
      value: 'd',
      disabled: true,
    }],
  },
  props: 
};
</script>

<style>
</style>
