<template>
  <div id="text">
    <h3>{{text}}</h3>
  </div>
</template>

<script>
    export default {
        name:"app",
        data(){
            return {
                text: 'Wellcome to Vue'
            }
        }
    };
</script>

<style>
    #text{
        color: red;
    }
</style>