const productDisplay = {
    template: 
    `
        <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <!--7.6-->
                    <img :src="image" :class="{'out-of-stock-img': !inStock}" />
                </div>
            </div>
            <div class="product-info">
                <h1><a :href="link">{{title}}</a></h1>
                <p>{{description}}</p>
                <p v-if="inventory > 10">In Stock</p>
                <p v-else-if="inventory <= 10 && inventory > 0">Almost out of Stock</p>
                <p v-else>Out of Stock</p>

                <p>Shipping: {{ shipping }}</p>
                
                <!-- 4.9 -->
                <p v-if="onSale">On Sale!</p>
                <p v-else>Not on Sale</p>
    
                <!-- 9.10 -->
                <product-details :details="details"></product-details>
                
                 <!-- 5  -->
                <div v-for="(variant, index) in variants" :key="variant.id" 
                @mouseover="updateVariant(index)" 
                class="color-circle" :style="{backgroundColor: variant.color}">
                    {{variant.color}}
                </div>
                <!-- 5.5 -->
                <div v-for="size in sizes">
                    {{size}}
                </div>
    
                <!-- 6 -->
                 <button class="button" :disabled="!inStock" @click="addToCart"
                 :class="{disabledButton: !inStock}">Add To Cart</button>
                 <!-- 6.7 -->
                <button class="button" @click="toggleStock">Toggle Stock</button>

                <!-- 10.6 -->
                <button class="button" @click="removeFromCart">Remove Cart</button>

                 <!-- 11 -->
                <review-list v-if="reviews.length" :reviews="reviews"></review-list>
                <review-form @review-submitted="addReview"></review-form>
    
            </div>
        </div>
    `,
    props: {
        premium: Boolean
    },
    setup(props, {emit}) {
        const shipping = computed(() => props.premium ? "Free" : 30);

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
          { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg", quantity: 10 },
        ]);
        const selectedVariant = ref(0);
    
        const sizes = ref(["S", "M", "L"]);
    
        // 6
        const cart = ref(0);
        function addToCart() {
          emit("add-to-cart", variants.value[selectedVariant.value].id);
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

        function removeFromCart() {
            emit("remove-from-cart", variants.value[selectedVariant.value].id);
        }

        // 11.5
        const reviews = ref([]);
        function addReview(review) {
            reviews.value.push(review);
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
          shipping, // 9
          removeFromCart, // 10.6
            reviews,
          addReview, // 11
        };
      }
};