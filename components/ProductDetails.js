const productDetails = {
    template: 
    `
    <ul>
        <li v-for="detail in details">{{detail}}</li>
    </ul>
    `,
    props: {
        details: Array
    },
    setup(props) {
        return {
            details: props.details
        };
    }
}