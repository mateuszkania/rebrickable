import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Minifig } from "@/features/LegoMinifigsMysteryBox/types";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Grid } from "@/components/Grid";
import { Button } from "@/components/Button";
import { FORM_FIELDS } from "../consts/consts";

const StepTwo: React.FC = () => {
  const navigate = useNavigate();
  const {
    watch,
    setValue,
    getValues,
    trigger,
    formState: { isValid },
  } = useFormContext();

  const selectedMinifig = watch(FORM_FIELDS.MINIFIG);

  const randomMinifigs = React.useMemo(() => {
    const savedMinifigs = sessionStorage.getItem("randomMinifigs");
    return savedMinifigs ? JSON.parse(savedMinifigs) : [];
  }, []);

  useEffect(() => {
    const selected = getValues("selectedMinifig");
    if (selected) {
      sessionStorage.setItem("selectedMinifig", JSON.stringify(selected));
    }
  }, [getValues]);

  const selectMinifig = (minifig: Minifig["set_num"]) => {
    setValue(FORM_FIELDS.MINIFIG, minifig, { shouldValidate: true });
  };

  const proceedToShipment = async () => {
    const result = await trigger(FORM_FIELDS.MINIFIG);
    if (result) {
      navigate("/step/3");
    }
  };

  return (
    <Container>
      <h2>Choose Your Minifig</h2>
      <Grid>
        {randomMinifigs.map((minifig: Minifig) => (
          <Card
            key={minifig.set_num}
            minifig={minifig}
            isSelected={selectedMinifig === minifig.set_num}
            onSelect={() => selectMinifig(minifig.set_num)}
          />
        ))}
      </Grid>
      <Button disabled={!isValid} onClick={proceedToShipment}>
        Proceed to Shipment
      </Button>
    </Container>
  );
};

export default StepTwo;
