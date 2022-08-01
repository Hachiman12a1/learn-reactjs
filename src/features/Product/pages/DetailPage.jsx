import React from "react";
import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import ProductThumbnail from "../components/ProductThumbnail";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import useProductDetail from "../hooks/useProductDetail";
import ProductInfo from "../components/ProductInfo";
import AddToCartForm from "../components/AddToCartForm";
import ProductMenu from "../components/ProductMenu";
import ProductDescription from "../components/ProductDescription";
import ProductAdditional from "../components/ProductAdditional";
import ProductReviews from "../components/ProductReviews";

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: "400px",
    padding: theme.spacing(1.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`,
  },
  right: {
    flex: "1 1 0",
    padding: theme.spacing(1.5),
  },
}));

function DetailPage() {
  const classes = useStyles();

  const {
    params: { productId },
    url,
  } = useRouteMatch();

  const { product, loading } = useProductDetail(productId);

  if (loading) {
    // TODO : make this beautiful
    return <Box>Loading</Box>;
  }

  const handleAddToCartSubmit = (formValues) => {
    console.log("Form submit", formValues);
  };
  return (
    <Box className={classes.root}>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item className={classes.right}>
              <ProductInfo product={product} />
              <AddToCartForm onSubmit={handleAddToCartSubmit} />
            </Grid>
          </Grid>
        </Paper>
        <ProductMenu />
        <Switch>
          <Route exact path={url}>
            <ProductDescription product={product} />
          </Route>

          <Route path={`${url}/additional`} component={ProductAdditional} />
          <Route path={`${url}/reviews`} component={ProductReviews} />
        </Switch>
      </Container>
    </Box>
  );
}

export default DetailPage;
