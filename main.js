const { createApp, ref, computed } = Vue;

const app = createApp({
  setup() {

    const cart = ref([]);
    const premium = ref(true);
    function updateCart(id) {
      cart.value.push(id);
    }
    
    // 10.5
    const cartCounts = computed(() => {
        const counts = {};
        cart.value.forEach(id => {
          counts[id] = (counts[id] || 0) + 1;
        });
        return counts;
      });

    // 10.6
    function removeFromCart(id) {
        const index = cart.value.indexOf(id);
        if (index > -1) {
            cart.value.splice(index, 1);
        }
    }
    
    return {
        cart,
        premium,
        updateCart,
        cartCounts,
        removeFromCart
    };
  },
})
app.component('product-display', productDisplay);
app.component('product-details', productDetails);

app.mount('#app');