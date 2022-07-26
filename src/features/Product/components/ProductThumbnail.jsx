import { Box } from "@material-ui/core";
import { THUMBNAIL_PLACEHOLDER } from 'constants/common';
import { STATIC_HOST } from 'constants/index';
import PropTypes from "prop-types";

ProductThumbnail.propTypes = {
  product: PropTypes.object,
};

function ProductThumbnail(props) {
  const { product } = props;

  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;

  return (
    <Box>
      <img src={thumbnailUrl} alt={product.name} width="100%" />
    </Box>
  );
}

export default ProductThumbnail;
