<template>
<a class="btn btn-default" href="#">
    <i class="fas fa-shopping-cart"></i> カート <span class="badge badge-primary">{{ count }}</span> 合計：{{ price }}円
</a>
</template>

<script>
    export default {
        data() {
            return {
                count: 0,
                price: 0,
            }
        },

        created() {
            let self = this;
            this.$root.$on('add-cart', self.updateCart);
        },

        mounted() {
            console.log('CartLabel mounted.')
        },

        methods: {
            updateCart: function(count, price) {

                this.count += count;
                this.price += price;
            }
        }
    }
</script>
