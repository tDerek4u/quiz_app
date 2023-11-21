<script setup>
import Footer from './Footer.vue';
import Header from './Header.vue';
</script>

<template>
    <div class="container">
        <Header />
            <slot />
        <Footer />
     </div>
</template>