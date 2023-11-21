<script setup>
defineProps({
    index: {
        required: true,
        type: String
    }
})
</script>
<template>
    <div v-if="index == '2'">data</div>
</template>
<style></style>