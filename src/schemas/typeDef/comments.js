
const commentsTypeDef = `
     
    type Comment {
        id: ID
        idEvent: Int!
        idUser: Int!
        name: String!
        text: String!
        updated_at: String
        created_at: String   
        likes: Int!
        dislikes: Int!
        reacted: Int
    }
    type Like {
        idUser: Int!
        idComment: Int!
        like: Int!
    }

    input likeInput {
        idUser: Int!
        idComment: Int!
        like: Int!
    }
   
    input CommentInput {
        idEvent: Int!
        idUser: Int!
        text: String!
        name: String!
        
    }
`;

const commentsQueries = `
    type Query {
        getComments(eventId: Int!, userId: Int!): [Comment]
    }
`;

const commentsMutations = `
    type Mutation {
        addComment(input: CommentInput ): Comment
        updateComment(id: ID!,input: CommentInput ): Comment
        deleteComment(id: ID!): Comment
        react(input: likeInput): Like
        unreact(id: ID!, idusr: ID!): Like
    }
`;

const comments = `
    ${commentsTypeDef}
    ${commentsQueries}
    ${commentsMutations}
`;

module.exports = comments;
