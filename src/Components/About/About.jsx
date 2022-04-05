import { Container, Typography } from "@mui/material";
import React from "react";
import "./About.css";

const AboutInf = () => {
  return (
    <div>
      <Container>
        <Typography variant="h2" component="h2">
          About us
        </Typography>
        <Typography variant="subtitle1" component="div">
          JS_FS_18 was founded in March 1992. Currently, it is a dynamically
          developing book trade and publishing enterprise. The company's
          bookstores are located in the central part of the capital of
          Kyrgyzstan - the city of Bishkek. Spacious bright halls, original
          commercial equipment, free display of books, an interior made in the
          Kyrgyz national style, the hospitality of sellers is the hallmark of
          the company.
        </Typography>
        <Typography variant="subtitle1" component="div">
          In the shop, located on Ala-Too Square, guests can also visit the
          museum for free - a permanent exhibition of applied art of the Kyrgyz
          people or buy a souvenir in a shop stylized as a traditional Kyrgyz
          yurt.
        </Typography>
        <Typography variant="subtitle1" component="div">
          The range of literature offered by the shops will satisfy all tastes
          and needs of book lovers. The permanent assortment of the store is
          cultural and historical publications, photo albums about the nature,
          history and ethnography of Kyrgyzstan, as well as tourist maps and
          postcards with views of the most beautiful places in Kyrgyzstan.
        </Typography>
        <Typography variant="subtitle1" component="div">
          In addition to the retail book trade, the Firm fulfills orders from
          organizations and educational institutions for the acquisition of
          their libraries.
        </Typography>
      </Container>
    </div>
  );
};

export default AboutInf;
