<script setup lang="ts">
import { provideHooksContext } from './lib/hooks';

// Provide tanstack-query context
// Use an absolute endpoint so server-side fetch works too
provideHooksContext({
    endpoint: 'http://localhost:3000/api/model',
});
</script>

<template>
    <NuxtExampleLayout repo="nuxt/examples">
        <AppNav />
        <div>
            <NuxtPage />
        </div>
    </NuxtExampleLayout>
</template>
