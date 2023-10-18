<script setup lang="ts">
import { useInfiniteFindManyPost } from '@/lib/hooks';

const PAGE_SIZE = 10;

const fetchArgs = {
    include: { author: true },
    orderBy: { createdAt: 'desc' as const },
    take: PAGE_SIZE,
};

const { data, hasNextPage, fetchNextPage } = useInfiniteFindManyPost(
    fetchArgs,
    {
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.length < PAGE_SIZE) {
                return undefined;
            }
            const fetched = pages.flatMap((item) => item).length;
            return {
                ...fetchArgs,
                skip: fetched,
            };
        },
    }
);
</script>

<template>
    <h1 class="text-2xl font-bold my-4">My Awesome Blog</h1>
    <div>
        <ul v-if="data" class="py-8 space-y-2">
            <template v-for="(posts, i) in data.pages" :key="i">
                <li v-for="post in posts" :key="post.id">
                    <Post v-bind="post" />
                </li>
            </template>
        </ul>
    </div>

    <button v-if="hasNextPage" @click="() => fetchNextPage()">Load More</button>
</template>
