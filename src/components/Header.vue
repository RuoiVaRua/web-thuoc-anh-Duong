<template>
    <AnnouncementBar/>
    <header>
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
import AnnouncementBar from './AnnouncementBar.vue';

export default {
    name: "Header",
    components: {
        AnnouncementBar
    }
};
</script>

<style scoped>
</style>
