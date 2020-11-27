import React, { useState, useEffect } from "react";
import withSplitting from "../../../Lib/withSplittings";
const MM00Presenter = withSplitting(() => import("./MM00Presenter"));
import { useQuery, useMutation } from "react-apollo-hooks";
import {
  GET_NOTICE,
  CREATE_NOTICE,
  DELETE_NOTICE,
  UPDATE_NOTICE,
} from "./MM00Queries";

const MM00Container = ({ history }) => {
  ////////////// - USE QUERY- ///////////////
  const {
    data: noticeDatum,
    loading: noticeDatumLoading,
    refetch: noticeDatumRefetch,
  } = useQuery(GET_NOTICE);

  ///////////// - USE MUTATION- /////////////
  const [createNotice] = useMutation(CREATE_NOTICE);
  const [deleteNotice] = useMutation(DELETE_NOTICE);
  const [updateNotice] = useMutation(UPDATE_NOTICE);

  ///////////// - EVENT HANDLER- ////////////
  const moveLinkHandler = (link) => {
    history.push(`/notice-detail/:key${link}`);
  };

  const _createNotice = async () => {};
  ////////////// - USE EFFECT- //////////////
  return (
    <MM00Presenter noticeDatum={noticeDatum && noticeDatum.getAllNotices} />
  );
};

export default MM00Container;
