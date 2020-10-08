import gql from 'graphql-tag';

// Queries
// const GET_MAPPED_ROLES = gql`
// query GetMappedRoles {
//     roleTable {
//         id
//         is_active
//     }
// }
// `

const GET_MAPPED_ROLES = gql`
subscription GetMappedRoles {
    roletable {
        id
        agency_id
        location
        role_name
        role_description
        permission_level
      }
}
`

const ROLES = gql`
subscription GetRoles {
    roles {
        id
        location
        role_name
        role_description
        permission_level
      }
}
`

// const SAVE_MAPPED_ROLES = gql`
//     mutation SaveRoleToAgency($id: Int!, $agency: Int!, $selectedRoles)
// `

export {
    GET_MAPPED_ROLES,
    ROLES
};