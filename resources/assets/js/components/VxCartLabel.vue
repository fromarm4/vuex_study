<template>
<a class="btn btn-default" href="#">
    <i class="fas fa-shopping-cart"></i> カート <span class="badge badge-primary">{{ total.count }}</span> 合計：{{ total.price }}円
</a>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState([
            'total',
        ]),
    },

    // computed: {
    //     total() {
    //         return this.$store.state.total;
    //     },
    // },
}
</script>
