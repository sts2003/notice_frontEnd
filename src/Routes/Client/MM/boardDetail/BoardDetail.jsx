import React, { useEffect, useState } from "react";
import { GET_NOTICEBOARD_DETAIL } from "../../MM/MM00Queries";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import { useQuery } from "react-apollo-hooks";
import { toast } from "react-toastify";
import {
  WholeWrapper,
  RsWrapper,
  CommonButton,
  Wrapper,
} from "../../../../Components/CommonComponents";
import CircularIndeterminate from "../../../../Components/loading/CircularIndeterminate";
import useTitle from "@4leaf.ysh/use-title";

const Board_D_title = styled.h2`
  width: 100%;
  padding: 20px;
  font-size: 22px;
  font-weight: 700;
`;

const Board_D = styled.ul`
  width: 100%;
  height: ${(props) => (props.height ? props.height : `40px`)};
  display: flex;
  flex-direction: row;
  align-items: center;

  background: ${(props) => props.bgColor};

  @media (max-width: 700px) {
    flex-direction: column;
    height: auto;
  }
`;

const Board_D_List = styled.li`
  width: ${(props) => props.width};
  line-height: 40px;
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  text-align: ${(props) => props.ta || `center`};
  padding: ${(props) => (props.padding ? props.padding : `0px 10px`)};
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.16);
  border-radius: ${(props) => props.radius};
`;

const Board_D_Desc = styled.div`
  width: 100%;
  min-height: 500px;
  padding: 15px;
  line-height: 1.4;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.16);
`;

export default withResizeDetector(({ match, history, width }) => {
  ////////////// - USE CONTEXT- ///////////////

  ////////////// - USE STATE- ///////////////
  const [currentData, setCurrentData] = useState(null);
  ///////////// - USE QUERY- ////////////////

  const {
    data: noticeData,
    loading: noticeLoading,
    refetch: noticeRefetch,
  } = useQuery(GET_NOTICEBOARD_DETAIL, {
    variables: {
      id: match.params.key,
    },
  });

  ///////////// - EVENT HANDLER- ////////////

  const _moveListBoard = () => {
    history.push(`/`);
  };

  ///////////// - USE EFFECT- ///////////////
  useEffect(() => {
    if (noticeData && noticeData.getNoticeBoardDetail) {
      let tempData = noticeData.getNoticeBoardDetail;

      const desc = document.getElementById("notice_description-js");

      if (desc !== null) {
        desc.innerHTML = tempData.description;
        setCurrentData(tempData);
      }
    }
  }, [noticeData]);

  useEffect(() => {
    noticeRefetch();
  }, []);

  useTitle(``);
  return (
    <WholeWrapper margin={`150px 0 0 0`}>
      <RsWrapper padding={`100px 0`}>
        <Board_D_title>
          {currentData ? currentData.title : <CircularIndeterminate />}
        </Board_D_title>
        <Board_D dr={`row`}>
          <Board_D_List
            width={width < 700 ? `100%` : `150px`}
            bgColor={`#dcdcdc`}
          >
            작성자
          </Board_D_List>
          <Board_D_List width={width < 700 ? `100%` : `calc((100% - 150px))`}>
            {currentData ? (
              currentData.userId.slice(0, 10)
            ) : (
              <CircularIndeterminate />
            )}
          </Board_D_List>
          <Board_D_List
            width={width < 700 ? `100%` : `250px`}
            bgColor={`#dcdcdc`}
          >
            작성일
          </Board_D_List>
          <Board_D_List width={width < 700 ? `100%` : `calc((100% - 150px))`}>
            {currentData ? (
              currentData.createdAt.slice(0, 10)
            ) : (
              <CircularIndeterminate />
            )}
          </Board_D_List>
        </Board_D>

        <Board_D_Desc>
          <Wrapper
            id={"notice_description-js"}
            className={"ql-editor"}
          ></Wrapper>
        </Board_D_Desc>

        <Wrapper margin={`30px 0px`} ju={`flex-end`} dr={`row`}>
          <CommonButton
            width={`80px`}
            margin={`0px 10px 0px 0px`}
            onClick={() => _moveListBoard()}
          >
            돌아가기
          </CommonButton>
          <CommonButton width={`80px`} margin={`0px 10px 0px 0px`}>
            목록
          </CommonButton>

          <CommonButton width={`80px`} margin={`0px 10px 0px 0px`}>
            이전
          </CommonButton>

          <CommonButton width={`80px`} margin={`0px 10px 0px 0px`}>
            다음
          </CommonButton>
        </Wrapper>
      </RsWrapper>
    </WholeWrapper>
  );
});
