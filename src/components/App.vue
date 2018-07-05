<template >
  <div id="app">
    <h3>Got jokes?</h3>
    <button type="button" class="btn btn-primary" name="button" @click="initJokes">Add 10 Random Jokes</button>
    <div class="container-fluid">
    {{$store.state}}
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    methods: mapActions([
      'initJokes'
    ])
  }
</script>
