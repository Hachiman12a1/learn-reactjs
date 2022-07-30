import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import { useEffect } from "react";
import categoryApi from "api/categoryApi";

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

function FilterByCategory(props) {
  const { onChange } = props;

  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const list = await categoryApi.getAll();
        setCategoryList(
          list.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
      } catch (error) {
        console.log("Failed to fetch category list", error);
      }
    })();
  }, []);

  const handeCategoryClick = (category) => {
    if (onChange) {
      onChange(category.id);
    }
  };

  return (
    <Box>
      <Typography>Danh mục sản phẩm</Typography>
      <ul>
        {categoryList.map((category) => (
          <li
            key={category.id}
            onClick={() => {
              handeCategoryClick(category);
            }}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
