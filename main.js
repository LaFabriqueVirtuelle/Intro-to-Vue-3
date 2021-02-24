const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
      updateCart(id) {
        console.log('ID is : ' + id);
        if (this.cart.filter(id) === []) {
          this.cart.push(id);
        } else {
          this.cart.splice(id, 1);
        };
      }
    }
})
