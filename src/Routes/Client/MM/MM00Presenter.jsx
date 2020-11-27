import React from "react";
import {
  EmptyList,
  TableBody,
  TableBodyLIST,
  TableWrapper,
  Wrapper,
  WholeWrapper,
  TableHead,
  TableHeadLIST,
  RsWrapper,
  CommonButton,
} from "../../../Components/CommonComponents";
import withSplitting from "../../../Lib/withSplittings";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import CircularIndeterminate from "../../../Components/loading/CircularIndeterminate";

// const SearchInput = styled(TextInput)`
//   position: relative;
//   border: 1px solid #dcdcdc;
//   border-radius: 2px;
//   margin-right: 4px;

//   &:hover ${SearchWrapper2} {
//     opacity: 1;
//     box-shadow: 0px 3px 5px solid #eee;
//   }

//   &:before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: #fff;
//   }
// `;

const SearchWrapper2 = styled(Wrapper)`
  position: relative;
  color: #fff;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    border: 1px solid rgb(67, 66, 88);
    background: none;
    color: rgb(67, 66, 88);
  }

  & svg {
    position: absolute;
    top: 5px;

    font-size: 18px;
  }

  &:hover svg {
    animation: ${SearchWrapper2} 0.5s forwards;
  }
`;

const MM00Presenter = ({ noticeDatum }) => {
  return (
    <WholeWrapper margin={`150px 0 0 0`}>
      <RsWrapper>
        <TableWrapper>
          <TableHead>
            <TableHeadLIST width={`100px`}>번호</TableHeadLIST>

            <TableHeadLIST
              fontWeight={`800`}
              width={`calc(100% - 100px - 160px - 100px)`}
              ju={`flex-start`}
            >
              제목
            </TableHeadLIST>

            <TableHeadLIST width={`160px`}>이름</TableHeadLIST>
            <TableHeadLIST width={`100px`}>작성일</TableHeadLIST>
          </TableHead>
        </TableWrapper>
        {noticeDatum ? (
          noticeDatum.length === 0 ? (
            <EmptyList>공지사항이 없습니다.</EmptyList>
          ) : (
            noticeDatum.map((data, idx) => {
              return (
                <TableBody key={idx} onClick={() => moveLinkHandler(idx)}>
                  {/* {data.description} */}

                  <TableBodyLIST width={`100px`}>{data.title}</TableBodyLIST>
                  <TableBodyLIST width={`100px`}>
                    {data.createdAt.slice(0, 13)}
                  </TableBodyLIST>
                  <TableBodyLIST
                    fontWeight={`800`}
                    width={`calc(100% - 100px - 160px - 100px)`}
                    ju={`flex-start`}
                  ></TableBodyLIST>
                </TableBody>
              );
            })
          )
        ) : (
          <CircularIndeterminate />
        )}

        <CommonButton value="글쓰기" />
      </RsWrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM00Presenter);
