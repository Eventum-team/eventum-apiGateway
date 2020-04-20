const commentsTypeDef = `
    type Comment {
        id: ID
        idEvent: Int!
        idUser: Int!
        text: String!
        updated_at: String
        created_at: String   
    }
    input CommentInput {
        idEvent: Int!
        idUser: Int!
        text: String!
    }
`;

const commentsQueries = `
        getComments(eventId: Int!): [Comment]
`;

const commentsMutations = `
        addComment(input: CommentInput ): Comment
        updateComment(id: ID!,input: CommentInput ): Comment
        deleteComment(id: ID!): Comment
`;

module.exports = { commentsTypeDef, commentsQueries, commentsMutations };
