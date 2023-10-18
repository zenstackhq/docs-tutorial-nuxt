<script setup lang="ts">
import { useDeletePost, useUpdatePost } from '~/lib/hooks';

const props = defineProps({
    id: String,
    title: String,
    author: {
        type: Object,
        default: () => ({ email: '' }),
    },
    published: Boolean,
});

const updatePost = useUpdatePost();
const deletePost = useDeletePost();

const onTogglePublish = async () => {
    try {
        await updatePost.mutateAsync({
            where: { id: props.id },
            data: { published: !props.published },
        });
    } catch (err: any) {
        alert(err.info?.message ?? err);
    }
};

const onDelete = async () => {
    try {
        await deletePost.mutateAsync({ where: { id: props.id } });
    } catch (err: any) {
        alert(err.info?.message ?? err);
    }
};
</script>

<template>
    <div class="flex justify-center">
        <div class="min-w-80">
            <span class="mr-4 text-lg font-semibold">{{ title }}</span
            ><span>by {{ author.email }}</span>
        </div>
        <div class="ml-8 space-x-2">
            <NButton @click="onTogglePublish">{{
                published ? 'Unpublish' : 'Publish'
            }}</NButton>
            <NButton @click="onDelete">Delete</NButton>
        </div>
    </div>
</template>
