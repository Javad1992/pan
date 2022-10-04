import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../components/Button/Button";
import TableList from "../../../core/Table";
import { Container, HeaderTitle } from "../../../globalStyle";
import { getContentVideos } from "../../../redux/action/content";
import { formatData } from "../../../utils/date";

const ManageWeblogVideo = () => {
  const headerTitle = ["#", "عنوان", "دسته بندی", "تاریخ بارگذاری", "جزییات"];

  const dispatch = useDispatch();

  const contentSelector = useSelector((state) => state.content);

  const { videos } = contentSelector;

  console.log(videos);

  const items = videos?.data?.map((file, index) => (
    <Tr key={index}>
      <Td>{index + 1}</Td>
      <Td>{file?.title}</Td>
      <Td>{file?.category}</Td>
      <Td>{formatData(file?.insertedDate?.toString() || "")}</Td>

      <Td>
        <Link to={`/dashboard/app/content-video/${file?.id}`}>
          <Button small weight="bold">
            جزییات
          </Button>
        </Link>
      </Td>
    </Tr>
  ));

  useEffect(() => {
    dispatch(getContentVideos());
  }, [dispatch]);

  return (
    <Container>
      <HeaderTitle>محتوای ویدیویی</HeaderTitle>
      <TableList headerTitle={headerTitle} items={items} />
    </Container>
  );
};

const Td = styled.td`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 10px 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  /* &:nth-child(even) {
    background-color: #edeef1;
  } */
`;
const Tr = styled.tr`
  background-color: ${({ theme }) => theme.backgroundSidebar};
  /* &:nth-child(odd) {
    background-color: #dddddd;
  } */
`;

export default ManageWeblogVideo;
