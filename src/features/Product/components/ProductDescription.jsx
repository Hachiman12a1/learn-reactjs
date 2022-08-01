import React from "react";
import PropTypes from "prop-types";
import { Paper } from "@material-ui/core";
import DOMPurify from 'dompurify';


ProductDescription.propTypes = {
  product: PropTypes.object,
};

function ProductDescription({ product = {} }) {
    const saveDescription = DOMPurify.sanitize(product.description)
  return (
    <Paper elevation={0} style={{ padding: "15px" }}>
      <div dangerouslySetInnerHTML={{ __html: saveDescription }} />
    </Paper>
  );
}

export default ProductDescription;
