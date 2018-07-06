<template >
  <div id="app">
    <h3>Got jokes?</h3>
    <button type="button" class="btn btn-primary" name="button" @click="initJokes">Add 10 Random Jokes</button>
    <button type="button" class="btn btn-primary" name="button" @click="addJokes">Add One Random Jokes</button>
    <br>
    <span v-for="type in types">
      <input type="checkbox" :value="type" v-model="checkTypes" checked>
      <label>{{type}}</label>&nbsp;
    </span>
    <br>
    <div class="col-md-12" >
    <Joke
      v-for="(joke,index) in $store.state.jokes"
      v-show="checkTypes.includes(joke.type)"
      :joke="joke"
      :indie="index"
      :key="index"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Joke from './Joke.vue'

export default {
    data() {
      return {
        types: ['general', 'knock-knock', 'programming'],
        checkTypes: ['general', 'knock-knock', 'programming']
      }
    },
    methods: mapActions([
      'initJokes',
      'addJokes'
    ]),
    components:{
      Joke
    }
  }
</script>
