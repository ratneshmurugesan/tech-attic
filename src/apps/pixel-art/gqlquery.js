import gql from 'graphql-tag';

// QUERIES
// const GET_PIXELS = gql`
// query GetPixels {
//     pixels(order_by: { id: asc }) {
//         id
//         color
//     }
// }`

// MUTATIONS
const UPDATE_COLOR = gql`
mutation ChangePixelColor($id: Int!, $color: String!){
    update_pixels(where: { id: { _eq: $id } }, _set: { color: $color }){
        returning {
            id
            color
        }
    }
}`

// SUBSCRIPTIONS
const GET_PIXELS = gql`
subscription GetPixels {
    pixels(order_by: { id: asc }) {
        id
        color
    }
}`

export {
    GET_PIXELS,
    UPDATE_COLOR
};