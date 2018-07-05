<template >
  <div class="col-md-6">
    <div class="joke-card">
      <div class="card-block">
          <div class="col-md-12 text-right">
            <span class="btn" @click="remJoke(indie)" style="font-size:1.3em; cursor:pointer;">&times;</span>
        </div>
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
