import { Fragment } from "react"
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "../../../components/Button/Button";
import { openExpertModal, openFactorModal, openModal } from "../../../redux/action/modal";
import { removeVisitRequest, sendQuestion } from "../../../redux/action/visit";

import {PersonalInfo,
    PublicInfo,
    Wrapper,
    Item,
    Title,
    SubTitle} from '../FirstSpport/firstSupportStyle'

const ThirdTab=({visit})=>{
    const dispatch = useDispatch();
    const { parentId } = useParams();

    return(
        <Fragment>
             {visit?.map((item, index) => (
        <PublicInfo key={index}>
          <Wrapper>
            <Item>
              <Title>نوع کشت :</Title>
              <SubTitle>{item.product}</SubTitle>
            </Item>
            <Item>
              <Title>مساحت :</Title>
              <SubTitle>{item.area}</SubTitle>
            </Item>

            <Item>
              <Title>آدرس :</Title>
              <SubTitle>{`${item.province} , ${item.city}  `}</SubTitle>
            </Item>
            <Item>
              <Title>فاصله :</Title>
              <SubTitle>{item.distance} کیلومتر</SubTitle>
            </Item>
            <Item>
              <Title>قیمت :</Title>
              <SubTitle>{item.cost} ریال</SubTitle>
            </Item>
          </Wrapper>
          <Wrapper>

            <Item>
              <Button
                small
                color="#51D451"
                onClick={() => {
                  dispatch(openExpertModal(item._id));
                  console.log("item?.id", item._id);
                }}
              >
                تعیین کارشناس
              </Button>
            </Item>
            <Item>
              <Button
                small
                color="#F81C0B"
                onClick={() =>
                  dispatch(removeVisitRequest(parentId, item?.visitCode))
                }
              >
                حذف
              </Button>
            </Item>
          </Wrapper>
        </PublicInfo>
      ))}
        </Fragment>
    )
}

export default ThirdTab