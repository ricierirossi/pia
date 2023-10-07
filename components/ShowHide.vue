<template>
    <div
        v-if="showHide"
        class="material-symbols-outlined absolute right-2 top-20 text-gray-400 hover:cursor-pointer"
    >
        visibility_off
    </div>
    <div
        v-if="!showHide"
        class="material-symbols-outlined absolute right-2 top-20 text-gray-400 hover:cursor-pointer"
    >
        visibility
    </div>
</template>

<script>
export default {
    props: {
        showHide: Boolean,
    },
};
</script>
