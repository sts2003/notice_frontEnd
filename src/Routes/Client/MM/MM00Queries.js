import { gql } from "apollo-boost";

export const GET_NOTICE = gql`
  query getAllNotices {
    getAllNotices {
      id
      title
      description
      createdAt
    }
  }
`;

export const GET_NOTICEBOARD_DETAIL = gql`
  query getNoticeDetail {
    getNoticeDetail {
      id
      title
      description
      createdAt
    }
  }
`;

// export const GET_NOTICEBOARD_TOTALPAGE = gql`
//   query getNoticeBoardTotalPage($searchValue: String!, $limit: Int!) {
//     getNoticeBoardTotalPage(searchValue: $searchValue, limit: $limit)
//   }
// `;

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

export const GET_NOTICE_TOTAL_PAGE = gql`
  query getNoticeTotalPage(
    $limit: Int!
    $searchValue: String!
    $currentFloor: String!
  ) {
    getNoticeTotalPage(
      limit: $limit
      searchValue: $searchValue
      currentFloor: $currentFloor
    )
  }
`;

// deleteNotice(id: String!): Boolean!
// updateNotice(id: String!, description: String!): Boolean!
