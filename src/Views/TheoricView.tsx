/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { fetchOneTheoric, theoricTemplate } from "../app/Reducers/theoricSlice";
import { Theoric } from "../app/interface";
import { Link, useParams } from "react-router-dom";
/*-----------IMPORT MUI & CSS-----------*/
import { List, Stack, Grid, Paper, Box } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import {
  StyledBox,
  StyledBox2,
  StyledTypography,
  StyledTypography2,
  StyledTypography3,
  StyledPaper,
  StyledGrid,
} from "../Components/Theoric/StyledComponents";

/*--------------------------------------------------------*/

export default function TheoricView() {
  const [theoric, setTheoric] = useState<Theoric>(theoricTemplate);
  const { id } = useParams();
  useEffect(() => {
    if (id && typeof id === "string") {
      fetchOneTheoric(id).then((res) => setTheoric(res));
    }
  }, []);

  console.log(theoric);
  return (
    <StyledGrid>
      <StyledBox>
        <StyledTypography>{theoric.title}</StyledTypography>
        <StyledTypography2>Por: {theoric.author}</StyledTypography2>
      </StyledBox>
      <StyledPaper>{theoric.content}</StyledPaper>

      <StyledBox2>
        {theoric.comments.length > 0 &&
          theoric.comments.map((com: string) => {
            return <StyledTypography3> {com} </StyledTypography3>;
          })}
        <LocalOfferIcon />
      </StyledBox2>

      <img src={theoric.images} alt="not found" />
    </StyledGrid>
  );
}
