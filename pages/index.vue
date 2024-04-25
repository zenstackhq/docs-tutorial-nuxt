<script setup lang="ts">
import { useFindManyPost, useCreatePost } from '~/lib/hooks';

const title = ref('');
const createPost = useCreatePost();
const { session } = useAuth();

const onCreatePost = async () => {
    try {
        await createPost.mutateAsync({
            data: {
                title: title.value,
                content: 'My awesome content',
            },
        });
        title.value = '';
    } catch (err: any) {
        alert(err.info?.message ?? err);
    }
};
const { data: posts } = useFindManyPost({ include: { author: true } });
</script>

<template>
    <h1 class="text-2xl font-bold my-4">My Awesome Blog</h1>
    <div v-if="session?.id">
        <div class="flex justify-center">
            <NTextInput
                v-model="title"
                placeholder="Title"
                class="w-1/2 mr-4"
                @keyup.enter="onCreatePost"
            />
            <NButton @click="onCreatePost">Create Post</NButton>
        </div>
        <ul v-if="posts" class="py-8 space-y-2">
            <li v-for="post in posts" :key="post.id">
                <Post v-bind="post" />
            </li>
        </ul>
    </div>
</template>
