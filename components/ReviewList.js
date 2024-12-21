const reviewList = {
    template: `
        <div class="review-container">
            <h3>Reviews:</h3>
            <ul>
                <li v-for="(review, index) in reviews" :key="index">
                    {{ review.name }} gave this {{ review.rating }} stars
                     <br/>
                    "{{ review.review }}"
                    <br/>
                    would you recommend this product: {{review.recommend}}
                </li>
            </ul>
        </div>
    `,
    props: {
        reviews: {
            type: Array
        }
    },
    setup(props) {
        const reviews = props.reviews;
        return {
            reviews
        };
    }
}