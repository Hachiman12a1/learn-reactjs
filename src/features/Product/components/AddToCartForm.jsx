import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@material-ui/core";
import InputField from "components/form-controls/InputField";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";

AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AddToCartForm(props) {
  const { onSubmit = null } = props;

  const schema = yup.object().shape({
    quantity: yup
      .number()
      .min(1, "Please enter at least 1")
      .required("Please enter quantity"),
  });

  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="quantity" label="Quantity" form={form} />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        size="large"
      >
        Buy
      </Button>
    </form>
  );
}

export default AddToCartForm;
