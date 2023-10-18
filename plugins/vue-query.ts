import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query';

export default defineNuxtPlugin((nuxt) => {
    const queryClient = new QueryClient();
    nuxt.vueApp.use(VueQueryPlugin, { queryClient });
});
