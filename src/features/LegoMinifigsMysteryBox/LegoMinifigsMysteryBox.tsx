import React, { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import StepOne from "@/features/LegoMinifigsMysteryBox/partials/StepOne";
import StepTwo from "@/features/LegoMinifigsMysteryBox/partials/StepTwo";
import StepThree from "@/features/LegoMinifigsMysteryBox/partials/StepThree";
import { schemaByStep } from "@/features/LegoMinifigsMysteryBox/validation/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { FORM_FIELDS } from "./consts/consts";

const LegoMinifigsMysteryBox = () => {
  const { stepId = "1" } = useParams<{ stepId: string }>();
  const navigate = useNavigate();

  const schema = schemaByStep.get(stepId);

  const methods = useForm({
    mode: "onChange",
    resolver: schema && yupResolver(schema),
    defaultValues: {
      [FORM_FIELDS.MINIFIG]: sessionStorage.getItem("selectedLegoName") || "",
    },
  });

  useEffect(() => {
    const step = stepId ? parseInt(stepId, 10) : 1;
    if (!(step >= 1 && step <= 3)) {
      navigate("/step/1", { replace: true });
    }
  }, [stepId, navigate]);

  const renderStep = () => {
    const step = parseInt(stepId);
    switch (step) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      default:
        return <div>Unknown step</div>;
    }
  };

  return <FormProvider {...methods}>{renderStep()}</FormProvider>;
};

export default LegoMinifigsMysteryBox;
