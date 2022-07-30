import { Box } from "@material-ui/core";
import PropTypes from "prop-types";
import FilterByCategory from "./Filters/FilterByCategory";
import FilterByPrice from "./Filters/FilterByPrice";
import FilterByService from "./Filters/FilterByService";

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters(props) {
  const { filters, onChange } = props;

  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;

    const newFilters = {
      "category.id": newCategoryId,
    };

    onChange(newFilters);
  };

  const handleChange = (values) => {
    console.log(values);
    if (onChange) {
      onChange(values);
    }

  };

  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange}></FilterByCategory>

      <FilterByPrice onChange={handleChange}></FilterByPrice>
      <FilterByService filters = {filters}  onChange={handleChange}/>
    </Box>
  );
}

export default ProductFilters;
