import React, { useState, useEffect } from "react";
import withSplitting from "../../../Lib/withSplittings";
const MM00Presenter = withSplitting(() => import("./MM00Presenter"));
import { useQuery, useMutation } from "react-apollo-hooks";
import {
  GET_NOTICE,
  CREATE_NOTICE,
  DELETE_NOTICE,
  UPDATE_NOTICE,
  GET_NOTICE_TOTAL_PAGE,
} from "./MM00Queries";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const MM00Container = ({ history, limit, searchValue }) => {
  ////////////// - USE STATE- ///////////////
  const [pages, setPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  // const [limit, setLimit] = useState(10);
  ////////////// - USE QUERY- ///////////////
  const {
    data: noticeDatum,
    loading: noticeDatumLoading,
    refetch: noticeDatumRefetch,
  } = useQuery(GET_NOTICE);

  const { data: noticePageData, refetch: noticePageRefetch } = useQuery(
    GET_NOTICE_TOTAL_PAGE,
    {
      variables: {
        searchValue,
        limit,
      },
    }
  );
  ////////////// - USE EFFECT- //////////////

  useEffect(() => {
    // noticeDatumRefetch();
    // noticePageRefetch();
    if (noticePageData && !pages) {
      const temp = [];

      for (let i = 0; i < noticePageData.getNoticeBoardTotalPage; i++) {
        temp.push(i);
      }
      setPages(temp);
    }
  }, [noticePageData]);

  ///////////// - USE MUTATION- /////////////
  const [createNotice] = useMutation(CREATE_NOTICE);
  // const [deleteNotice] = useMutation(DELETE_NOTICE);
  // const [updateNotice] = useMutation(UPDATE_NOTICE);

  ///////////// - EVENT HANDLER- ////////////

  const changePageHandler = (page) => {
    setCurrentPage(page);
  };

  const moveLinkHandler = (idx) => {
    history.push(`/notice-detail/${idx}`);
  };

  const prevAndNextPageChangeNoticeHandler = (page) => {
    if (page < 0) {
      toast.error("첫 페이지 입니다.");
      return;
    }

    if (page > noticePageData.getNoticeBoardTotalPage - 1) {
      toast.error("마지막 페이지 입니다.");
      return;
    }

    setCurrentPage(page);
  };

  // const prevAndNextPageChangeNoticeHandler = (page) => {
  //   if (page < 0) {
  //     toast.error(context[lng.state.language][0]);
  //     return;
  //   }

  //   if (page > noticePageData.getNoticeBoardTotalPageClient - 1) {
  //     toast.error(context[lng.state.language][1]);
  //     return;
  //   }

  //   setCurrentPage(page);
  // };

  // const boardDeleteHandler = (id) => {
  //   confirmAlert({
  //     title: "DELETE NOTICE",
  //     message: "선택하신 공지사항을 삭제하시겠습니까?",
  //     buttons: [
  //       {
  //         label: "취소",
  //         onClick: () => {
  //           return false;
  //         },
  //       },
  //       {
  //         label: "확인",
  //         onClick: () => boardDeleteHandlerAfter(id),
  //       },
  //     ],
  //   });
  // };

  // const boardDeleteHandlerAfter = async (id) => {
  //   const { data } = await deleteNotice({
  //     variables: {
  //       id,
  //     },
  //   });

  //   if (data.deleteNotice) {
  //     toast.info("DELETE NOTICE!");
  //     noticeRefetch();
  //   } else {
  //     toast.error("잠시 후 다시 시도해주세요.");
  //   }
  // };

  // const dialogToggle = (id = "", title = "", description = "") => {
  //   setId(id);
  //   setTitle(title);
  //   setDescription(description);
  //   setOpenToggle(!openDialog);
  // };

  // const noticeUpdateHandler = async () => {
  //   const { data } = await updateNotice({
  //     variables: {
  //       id,
  //       title,
  //       description,
  //     },
  //   });

  //   if (data.modifyNoticeBoard) {
  //     toast.info("NOOTICE BOARD UPDATE!");
  //     dialogToggle();
  //     setDetailId("");
  //     setDetailTitle("");
  //     setDetailType("");
  //     setDetailCreatedAt("");
  //     setDetailDescription("");
  //     noticeRefetch();
  //   } else {
  //     toast.error("잠시 후 다시 시도해주세요.");
  //   }
  // };

  const _createNotice = async () => {};

  ////////////// - USE EFFECT- //////////////
  return (
    <MM00Presenter
      noticeDatum={noticeDatum && noticeDatum.getAllNotices}
      currentPage={currentPage}
      pages={pages}
      limit={limit}
      setCurrentPage={setCurrentPage}
      prevAndNextPageChangeNoticeHandler={prevAndNextPageChangeNoticeHandler}
      createNotice={createNotice}
      moveLinkHandler={moveLinkHandler}
      // boardDeleteHandler={boardDeleteHandler}
      changePageHandler={changePageHandler}
      // noticeUpdateHandler={noticeUpdateHandler}
    />
  );
};

export default MM00Container;
