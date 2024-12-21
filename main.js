const { createApp, ref } = Vue;

createApp({
    setup() {
        const product = ref('Boots');
        const description = ref('These are the best boots you will ever find!');
        const image = ref('./assets/images/socks_green.jpg');
        const link = ref('http://www.camt.cmu.ac.th');
        const inStock = ref(true);
        const inventory = ref(100);
        const onSale = ref(true); // 4.9

        return {
            product,
            description,
            image,
            link,
            inStock,
            inventory,
            onSale
        }
    }

}).mount('#app');