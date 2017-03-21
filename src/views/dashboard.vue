

<template>
<div class="hello">
  <!-- <child :text="message"></child> -->

  <!-- <div class="row">
    1 of 2
    <div class="col">
    </div>
    <div class="col-8">
      2 of 2 (wider)
    </div>
  </div> -->
  <!-- <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-5">
      2 of 3 (wider)
    </div>
    <div class="col">
      3 of 3
    </div>
  </div> -->
  <h1>{{ msg }}</h1>

  <links></links>

  <b-btn class="mb-4" @click="clicked">Change progress</b-btn>
  <b-progress :value="progress" variant="success" :precision="1" show-progress animated>
  </b-progress>
  <div class="justify-content-centermy-1 row">

    <b-form-fieldset horizontal label="Rows per page" class="col-6" :label-size="6">
      <b-form-select :options="[{text:5,value:5},{text:10,value:10},{text:15,value:15}]" v-model="perPage">
      </b-form-select>
    </b-form-fieldset>

    <b-form-fieldset horizontal label="Filter" class="col-6" :label-size="2">
      <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
    </b-form-fieldset>
  </div>

  <dashtable v-bind:items="parentItems" :fields="fields" :current-page="currentPage" :per-page="perPage" :filter="filter"></dashtable>

  <!-- Main table element -->


  <div class="justify-content-center row my-1">
    <b-pagination size="md" :total-rows="this.parentItems.length" :per-page="perPage" v-model="currentPage" />
  </div>

  </div>
</template>

<script>
import links from '../components/links';
import dashtable from '../components/dashtable';

export default {
  name: 'dashboard',
  components: {
    links, dashtable
  },
  data() {
    return {
      msg: 'Welcome to the hackathon dashboard for Barrick.',
      progress: Math.random() * 100,
      parentItems: [{
        isActive: true,
        age: 40,
        name: {
          first: 'Dickerson',
          last: 'Macdonald'
        }

      }, {
        isActive: false,
        age: 21,
        name: {
          first: 'Larsen',
          last: 'Shaw'
        }

      }, {
        isActive: false,
        age: 26,
        state: 'success',
        name: {
          first: 'Mitzi',
          last: 'Navarro'
        }

      }, {
        isActive: false,
        age: 22,
        name: {
          first: 'Geneva',
          last: 'Wilson'
        }

      }, {
        isActive: true,
        age: 38,
        name: {
          first: 'Jami',
          last: 'Carney'
        }

      }, {
        isActive: false,
        age: 27,
        name: {
          first: 'Essie',
          last: 'Dunlap'
        }

      }, {
        isActive: true,
        age: 40,
        name: {
          first: 'Dickerson',
          last: 'Macdonald'
        }

      }, {
        isActive: false,
        age: 21,
        name: {
          first: 'Larsen',
          last: 'Shaw'
        }

      }, {
        isActive: false,
        age: 26,
        name: {
          first: 'Mitzi',
          last: 'Navarro'
        }

      }, {
        isActive: false,
        age: 22,
        name: {
          first: 'Geneva',
          last: 'Wilson'
        }

      }, {
        isActive: true,
        age: 38,
        name: {
          first: 'Jami',
          last: 'Carney'
        }

      }, {
        isActive: false,
        age: 27,
        name: {
          first: 'Essie',
          last: 'Dunlap'
        }

      }],
      fields: {
        name: {
          label: 'Person Full name',
          sortable: true
        },
        age: {
          label: 'Person age',
          sortable: true
        },
        isActive: {
          label: 'is Active'
        },
        actions: {
          label: 'Actions'
        }
      },
      currentPage: 1,
      perPage: 5,
      filter: null,

    };
  },
  methods: {
    clicked() {
      this.progress = Math.round(Math.random() * 10000) / 100;
      // console.log("Change progress to " + this.progress);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
