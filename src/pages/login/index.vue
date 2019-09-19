<template>
    <div class="login">
        <input type="text" name="" value="" v-focus>
        <!-- <vue-button :width="200" :height="100" :title="'提交'"></vue-button> -->
    </div>
</template>

<script>
import vueButton from '@/components/vue-button';

export default {
    name: 'login',
    data () {
        return {

        }
    },
    components: {
        vueButton
    },
    created () {
    },
    methods: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
