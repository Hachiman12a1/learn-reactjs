import { Box, Button, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { PropTypes } from "prop-types";

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

function FilterByPrice(props) {
  const { onChange } = props;

  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });
  const handlSubmit = () => {
    if (onChange) onChange(values);

    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <Box>
      <Typography variant="subtitle2">GIÁ</Typography>
      <Box>
        <TextField
          name="salePrice_gte"
          value={values.salePrice_gte}
          onChange={handleChange}
        />
        <span>-</span>
        <TextField
          name="salePrice_lte"
          value={values.salePrice_lte}
          onChange={handleChange}
        />
      </Box>

      <Button variant="outlined" color="primary" onClick={handlSubmit}>
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;
