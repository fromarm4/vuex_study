export default {
  state: {
  	total: {
  		count: 0,
  		price: 0,
  	},
    productList: [
        {
            name: 'りんご',
            price: 140,
            onSale: true,
        },
        {
            name: 'かぼちゃ',
            price: 300,
            onSale: true,
        },
        {
            name: 'レタス',
            price: 3040,
            onSale: false,
        },
        {
            name: '石焼き芋おいも',
            price: 20000,
            onSale: false,
        },
    ],
  },

  getters: {
    onSaleProductList: state => {
      return state.productList.filter(product => product.onSale)
    }
  },

  mutations: {
    updateTotal (state, { count, price }) {
      state.total.count += count;
      state.total.price += price;
    }
  }
}