const { createApp, ref, computed } = Vue;

createApp({
  setup() {
    const product = ref("Boots");
    const brand = ref("SE 331");
    const description = ref("These are the best boots you will ever find!");
    const link = ref("http://www.camt.cmu.ac.th");
    // 8.3
    const image = computed(() => variants.value[selectedVariant.value].image);
    const inStock = computed(() => variants.value[selectedVariant.value].quantity);
    //
    const inventory = ref(100);
    const onSale = ref(true); // 4.9

    const details = ref(["50% cotton", "30% wool", "20% polyester"]);
    const variants = ref([
      { id: 2234, color: "green", image: "./assets/images/socks_green.jpg", quantity: 50 },
      { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg", quantity: 0 },
    ]);
    const selectedVariant = ref(0);

    const sizes = ref(["S", "M", "L"]);

    // 6
    const cart = ref(0);
    function addToCart() {
      cart.value += 1;
    }
    function updateImage(variantImage) {
      image.value = variantImage;
    }
    // 6.7
    function toggleStock() {
        inStock.value = !inStock.value;
        inventory.value = inStock.value ? 100 : 0;
    }

    // 8
    const title = computed(() => `${brand.value} ${product.value} ${onSale.value ? "is on sale" : ""}`);

    function updateVariant(index) {
      selectedVariant.value = index;
    }
    
    return {
      title,
      description,
      image,
      link,
      inStock,
      inventory,
      onSale, // 4.9
      details,
      variants,
      sizes,
      cart,
      addToCart,
      updateImage,
      toggleStock, // 6.7
      updateVariant, // 8
    };
  },
}).mount("#app");
