import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const apiUrl = `http://localhost:8080/api/meal`;
    let mealsArray = [];

    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        res.map((meal) =>
          mealsArray.push([
            meal.user.name,
            meal.name,
            "R$" + meal.price.toString(),
          ])
        );

        setMeals(mealsArray);
      });
  }, []);

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Sugestões</h4>
            <p className={classes.cardCategoryWhite}>
              Aqui estão algumas sugestões de acordo com suas preferências:
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Restaurante", "Prato", "Preço"]}
              tableData={meals}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
