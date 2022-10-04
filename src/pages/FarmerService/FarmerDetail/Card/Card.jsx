import Typography from "../../../../components/Typography/Typography";
import { Badge } from "../farmerDetailStyle";
import { CardFooter, CardStyle, CardTitle } from "./cardStyle";

const Card = ({ title, date, status, Qcode }) => {
  return (
    <CardStyle>
      <CardTitle>
        <Typography>{title}</Typography>
        <Typography>{Qcode}</Typography>
      </CardTitle>
      <CardFooter>
        <Badge bgColor="#43855C">
          <Typography size="12px" color="#fff">
            {status}
          </Typography>
        </Badge>
        <Typography>{date}</Typography>
      </CardFooter>
    </CardStyle>
  );
};

export default Card;
