import { createStore } from "vuex";

const store = createStore({
    state: {
        products: [],
        services: [],
    },
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
        setServices(state, services) {
            state.services = services;
        },
    },
    actions: {
        async fetchProducts({ commit }) {
            try {
                const base_URL = import.meta.env.VITE_BASE_URL || "";
                const response = await fetch(base_URL + "/products.json");
                const products = await response.json();
                commit("setProducts", products);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        },
        async fetchServices({ commit }) {
            try {
                const base_URL = import.meta.env.VITE_BASE_URL || "";
                const response = await fetch(base_URL + "/services.json");
                const services = await response.json();
                commit("setServices", services);
            } catch (error) {
                console.error("Error fetching services:", error);
            }
        }
    },
    getters: {
        allProducts: (state) => state.products,
        getProductById: (state) => (id) => {
            return state.products.find(product => product.id === id);
        },
        // getAllProductIds: (state) => state.products.map(product => product.id)
        allServices: (state) => state.services,
        getServiceById: (state) => (id) => {
            return state.services.find(service => service.id === id);
        }
    },
});

export default store;
