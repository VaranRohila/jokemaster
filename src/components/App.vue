<template >
  <div id="app">
    <h3>Got jokes?</h3>
    <button type="button" class="btn btn-primary" name="button" @click="initJokes">Add 10 Random Jokes</button>
    <button type="button" class="btn btn-primary" name="button" @click="addJokes">Add One Random Jokes</button>
    <br>
    <br>
    <div class="col-md-12" >
    <Joke
      v-for="(joke,index) in $store.state.jokes"
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
    methods: mapActions([
      'initJokes',
      'addJokes'
    ]),
    components:{
      Joke
    }
  }
</script>
