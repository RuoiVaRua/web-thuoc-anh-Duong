<template>
    <button class="go-to-top-btn" onclick = "window.scrollTo({ top: 0, behavior: 'smooth' })" >
        <img src="/src/assets/go-to-top.png" alt="" width="56px">
    </button>
</template>

<script>
export default {
    name: "GoToTopBtn",
    mounted() {
        const goToTopBtn = document.querySelector('.go-to-top-btn');
        window.addEventListener('scroll',function(e) {
            if (window.scrollY > 1000 && goToTopBtn) {
                goToTopBtn.style.transition = 'all ease 0.4s';
                goToTopBtn.style.visibility = 'visible';
                goToTopBtn.style.transform = 'translateY(0%)';
            } else if (goToTopBtn) {
                goToTopBtn.style.transition = 'all ease 0.4s';
                goToTopBtn.style.visibility = 'hidden';
                goToTopBtn.style.transform = 'translateY(calc(100% + 20px))';
            }
        });
    }
}
</script> 

<style scoped>
    .go-to-top-btn {
        visibility: hidden;
        position: fixed;
        bottom: 20px;
        right: 23px;
        background-color: rgb(255, 255, 255, 0.3);
        border-radius: 50%;
        z-index: 100;
        width: 56px;
        height: 56px;
        transform: translateY(calc(100% + 20px));
        transition: all ease 0.4s;
    }

    .go-to-top-btn:hover {
        transform: scale(1.1);
        transition: all ease 0.4s;
    }
</style>