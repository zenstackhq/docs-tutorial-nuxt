/* eslint-disable */
const metadata = {
    fields: {
        user: {
            id: {
                name: 'id',
                type: 'String',
                isId: true,
                attributes: [{ name: '@default', args: [] }],
            },
            email: {
                name: 'email',
                type: 'String',
            },
            name: {
                name: 'name',
                type: 'String',
            },
            password: {
                name: 'password',
                type: 'String',
            },
            posts: {
                name: 'posts',
                type: 'Post',
                isDataModel: true,
                isArray: true,
                backLink: 'author',
            },
        },
        post: {
            id: {
                name: 'id',
                type: 'String',
                isId: true,
                attributes: [{ name: '@default', args: [] }],
            },
            createdAt: {
                name: 'createdAt',
                type: 'DateTime',
                attributes: [{ name: '@default', args: [] }],
            },
            updatedAt: {
                name: 'updatedAt',
                type: 'DateTime',
                attributes: [{ name: '@updatedAt', args: [] }],
            },
            title: {
                name: 'title',
                type: 'String',
            },
            content: {
                name: 'content',
                type: 'String',
            },
            published: {
                name: 'published',
                type: 'Boolean',
                attributes: [{ name: '@default', args: [{ value: false }] }],
            },
            author: {
                name: 'author',
                type: 'User',
                isDataModel: true,
                backLink: 'posts',
                isRelationOwner: true,
                foreignKeyMapping: { id: 'authorId' },
            },
            authorId: {
                name: 'authorId',
                type: 'String',
                isForeignKey: true,
            },
        },
    },
    uniqueConstraints: {
        user: {
            id: {
                name: 'id',
                fields: ['id'],
            },
            email: {
                name: 'email',
                fields: ['email'],
            },
        },
        post: {
            id: {
                name: 'id',
                fields: ['id'],
            },
        },
    },
    deleteCascade: {},
    authModel: 'User',
};
export default metadata;
