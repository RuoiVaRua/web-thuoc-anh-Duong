import { createStore } from "vuex";

const store = createStore({
    state: {
        products: [],
    },
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
    },
    actions: {
        async fetchProducts({ commit }) {
            try {
                const base_URL = import.meta.env.VITE_BASE_URL || "";
                const response = await fetch(base_URL + "/data.json");
                const products = await response.json();
                commit("setProducts", products);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
    },
    getters: {
        allProducts: (state) => state.products,
        getProductById: (state) => (id) => {
            return state.products.find(product => product.id === id);
        }
    },
});

export default store;
