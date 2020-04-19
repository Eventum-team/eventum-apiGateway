
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
    type Query {
        getComments(eventId: Int!): [Comment]
    }
`;

const commentsMutations = `
    type Mutation {
        addComment(input: CommentInput ): Comment
        updateComment(id: ID!,input: CommentInput ): Comment
        deleteComment(id: ID!): Comment
    }
`;

const comments = `
    ${commentsTypeDef}
    ${commentsQueries}
    ${commentsMutations}
`;

module.exports = comments;
