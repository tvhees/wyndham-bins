<template>
    <div>
        <slot></slot>
    </div>
</template>

<style scoped>
div {
    padding: 24px 60px 10px;
}

:deep() p {
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    text-align: left;
}
</style>