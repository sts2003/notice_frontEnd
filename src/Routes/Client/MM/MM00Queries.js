import { gql } from "apollo-boost";

export const GET_NOTICE = gql`
  query getAllNotices($searchValue: String!, $limit: Int!, $currentPage: Int!) {
    getAllNotices(
      searchValue: $searchValue
      limit: $limit
      currentPage: $currentPage
    ) {
      id
      title
      description
      createdAt
    }
  }
`;

export const GET_NOTICEBOARD_DETAIL = gql`
  query getNoticeDetail($id: String!) {
    getNoticeDetail(id: $id) {
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
  mutation createNotice($title: String!, $description: String!) {
    createNotice(
      title: $title
      description: $description
      userId: "5fbf1da37f2dc780b7f5763b"
    )
  }
`;

export const DELETE_NOTICE = gql`
  mutation deleteNotice($id: String!) {
    deleteNotice(id: $id)
  }
`;

export const UPDATE_NOTICE = gql`
  mutation updateNotice($id: String!, $title: String!, $description: String!) {
    updateNotice(id: $id, title: $title, description: $description)
  }
`;

export const GET_NOTICE_TOTAL_PAGE = gql`
  query getNoticeBoardTotalPage($limit: Int!, $searchValue: String!) {
    getNoticeBoardTotalPage(limit: $limit, searchValue: $searchValue)
  }
`;

export const GET_NOTICEBOARD_NEXT_ID = gql`
  query getNoticeBoardNextId($id: String!) {
    getNoticeBoardNextId(id: $id) {
      id
    }
  }
`;

export const GET_NOTICEBOARD_BEFORE_ID = gql`
  query getNoticeBoardBeforeId($id: String!) {
    getNoticeBoardBeforeId(id: $id) {
      id
    }
  }
`;

// deleteNotice(id: String!): Boolean!
// updateNotice(id: String!, description: String!): Boolean!
