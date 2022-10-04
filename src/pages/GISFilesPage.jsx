import React, { useEffect } from "react";

// react redux
import { useDispatch, useSelector } from "react-redux";
import { allGisFiles } from "../redux/action/gis";

// styled components
import styled from "styled-components";
import { Container, HeaderTitle } from "../globalStyle";
import GISList from "../components/List/GisList";
import Typography from "../components/Typography/Typography";

const GISFilesPage = () => {
  const headerTitle = ["کد کشاورزی", "کد بازدید", "فایل پیش تحلیل"];

  const dispatch = useDispatch();

  // gis selector
  const gisSelector = useSelector((state) => state.gis);
  const { giss } = gisSelector;

  useEffect(() => {
    dispatch(allGisFiles());
  }, [dispatch]);

  return (
    <Container>
      <Typography size="18px" weight="bold">
        لیست فایل های GIS
      </Typography>
      <GISList items={giss} gisFiles="true" headerTitle={headerTitle} />
    </Container>
  );
};

export default GISFilesPage;
