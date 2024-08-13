<template>
    <!-- <div v-if="loaded" v-html="htmlContent" role="presentation"></div> -->
    <FixedContactButtons/>
    <GoToTopBtn/>
</template>

<script>
// Import defineAsyncComponent từ Vue
import { defineAsyncComponent } from 'vue';
import FixedContactButtons from "./FixedContactButtons.vue";

export default {
    name: "LazyLoadedComponent",
    components: {
        // Sử dụng defineAsyncComponent để lazy load component
        FixedContactButtons: defineAsyncComponent(() => 
            import("./FixedContactButtons.vue")
        ),
        GoToTopBtn: defineAsyncComponent(() => 
            import("./GoToTopBtn.vue")
        )
    },
    // data() {
    //     return {
    //         loaded: false,
    //         htmlContent: "",
    //     };
    // },
    // props: {
    //     fileName: {
    //         type: String,
    //         required: true,
    //         default: "FixedContactButtons"
    //     }
    // },
    // async mounted() {
        // Load HTML content dynamically
        // const response = await fetch(`/${this.fileName}.html`);
        // this.htmlContent = await response.text();
        // this.loaded = true;

    // },
};
</script>

<style scoped lang="scss">
// div[role="presentation"] {
//     display: contents;
// }
</style>
