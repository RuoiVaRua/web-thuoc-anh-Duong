import { createStore } from "vuex";

const store = createStore({
    state: {
        // products: [],
        treatments: [],
    },
    mutations: {
        // setProducts(state, products) {
        //     state.products = products;
        // },
        setTreatments(state, treatments) {
            state.treatments = treatments;
        },
    },
    actions: {
        // async fetchProducts({ commit }) {
        //     try {
        //         const base_URL = import.meta.env.VITE_BASE_URL || "";
        //         const response = await fetch(base_URL + "/products.json");
        //         const products = await response.json();
        //         commit("setProducts", products);
        //     } catch (error) {
        //         console.error("Error fetching products:", error);
        //     }
        // },
        async fetchTreatments({ commit }) {
            try {
                const base_URL = import.meta.env.VITE_BASE_URL || "";
                const response = await fetch(base_URL + "/treatments.json");
                const treatments = await response.json();
                commit("setTreatments", treatments);
            } catch (error) {
                console.error("Error fetching treatments:", error);
            }
        }
    },
    getters: {
        // allProducts: (state) => state.products,
        // getProductById: (state) => (id) => {
        //     return state.products.find(product => product.id === id);
        // },
        // getAllProductIds: (state) => state.products.map(product => product.id)
        allTreatments: (state) => state.treatments,
        getTreatmentById: (state) => (id) => {
            return state.treatments.find(treatment => treatment.id === id);
        }
    },
});

export default store;
