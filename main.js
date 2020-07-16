var app = new Vue({
  el: '#app',
  data: {
    items: [{ id: 1, name: 'りんご', price: 100 },
           { id: 2, name: 'パイナップル', price: 140 },
           { id: 3, name: 'マンゴー', price: 350 }]
  },

  computed: {
    total() {
      // 初めに書いていたコード
      prices = this.items.map((obj) => obj.price)
      let sum = 0
      prices.forEach(element => {
        sum += element
      });
      return sum

      // reduceメソッドを教えてもらい書き直したコード
      // return this.items.reduce((sum, obj) => sum + obj.price, 0)
    }
  }
})
