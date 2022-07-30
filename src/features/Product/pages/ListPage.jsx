import React, { useEffect } from "react";
import { Box, Container, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import productApi from "api/productApi";
import { useState } from "react";
import ProductSkeletonList from "../components/ProductSkeletonList";
import ProductList from "../components/ProductList";

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: "250px",
  },
  right: {
    flex: "1 1 0",
  },
}));

function ListPage(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await productApi.getAll({ _page: 1, _limit: 10 });
        setProductList(data);
      } catch (error) {
        console.log("Fail to fetch product list", error);
      }
        setLoading(false);
    })();
  }, []);

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left Column</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
                {loading ? <ProductSkeletonList/> : <ProductList data={productList}/>}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
