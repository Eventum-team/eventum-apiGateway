const mediaTypeDef = `
input ImageInput {
    profile: Boolean
    id_type: String
    id_group: String
    id_event: String
    path: String
}
type Image {
    _id: ID!
    profile: Boolean
    id_type: String
    id_group: String
    id_event: String
    path: String
}
`;

const mediaQueries = `
    allImages: [Image]
    profileImage(id_type: String!): [Image]
    groupImages(id_group: String!): [Image]
    groupProfileImage(id_group: String!): [Image]
    eventImages(id_group: String!, id_event: String!): [Image]
    eventProfileImage(id_group: String!, id_event: String!): [Image]

`;

const mediaMutations = `
    createImage(input: ImageInput ): Image
    deleteProfileImage(id_type: String!, _id: ID!): Message
    deleteGroupImage(id_group: String!, _id: ID!): Message
    deleteGroupProfileImage(id_group: String!, _id: ID!): Message
    deleteEventImage(id_group: String!, id_event: String!, _id: ID!): Message
    deleteEventProfileImage(id_group: String!, id_event: String!, _id: ID!): Message
`;

// use by express-graphql in index.js
module.exports = { mediaTypeDef, mediaMutations, mediaQueries };
