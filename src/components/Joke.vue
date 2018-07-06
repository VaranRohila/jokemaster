<template >
  <div class="col-md-6">
    <div class="joke-card">
      <div class="card-block">
            <button @click='remJoke(indie)' class="close" name="button"><span>&times;</span></button>

        <p><u>{{joke.setup}} </u></p>
        <p><em>{{joke.punchline}}</em></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
  export default{
    props: ['joke','indie'],
    methods: mapActions([
      'remJoke'
    ])
  }
</script>
