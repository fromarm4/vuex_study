<template>
<div class="panel panel-default">
    <div class="panel-body">
        <div class="row">
            <div class="col-md-6">{{ product.name }}</div>
            <div class="col-md-6 text-right">
                価格：
                {{ product.price }}円
                <button class="btn btn-default" @click="add"><i class="fas fa-cart-plus"></i> カートに追加</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['product'],

    data() {
        return {
            count: 1,
        }
    },

    methods: {
        add() {
            let count = this.count;
            let price = this.product.price;
            this.$store.commit('updateTotal', { count, price });
        },
    }
}
</script>
