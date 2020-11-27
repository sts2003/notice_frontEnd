import { gql } from "apollo-boost";

export const GET_NOTICE = gql`
  query getAllNotices {
    getAllNotices {
      title
      description
      createdAt
    }
  }
`;

export const CREATE_NOTICE = gql`
  mutation createNotice(
    $userId: String!
    $title: String!
    $description: String!
  ) {
    createNotice(userId: $userId, title: $title, description: $description) {
      title
      description
    }
  }
`;

export const DELETE_NOTICE = gql`
  mutation deleteNotice($id: String!) {
    deleteNotice(id: $id) {
      id
    }
  }
`;

export const UPDATE_NOTICE = gql`
  mutation updateNotice($id: String!, $description: String!) {
    updateNotice(id: $id) {
      id
      description
    }
  }
`;

// deleteNotice(id: String!): Boolean!
// updateNotice(id: String!, description: String!): Boolean!
