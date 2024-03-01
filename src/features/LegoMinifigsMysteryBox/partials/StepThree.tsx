import React from "react";
import { FormProvider, useFormContext } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { InputField } from "@/components/Field";
import { Button } from "@/components/Button";
import { Grid } from "@/components/Grid";
import { Sidebar } from "@/components/Sidebar";
import { useRebrickableData } from "@/features/LegoMinifigsMysteryBox/hooks/useRebrickableData";
import LegoParts from "@/components/LegoParts";
import { FORM_FIELDS } from "@/features/LegoMinifigsMysteryBox/consts/consts";

import ordersApiClient from "@/services/orders-api-client";
import { Container } from "@/components/Container";
import {
  PartsApiResponse,
  Minifig,
} from "@/features/LegoMinifigsMysteryBox/types";

const StepThree: React.FC = () => {
  const navigate = useNavigate();
  const methods = useFormContext();

  const selectedMinifigId = methods.watch(FORM_FIELDS.MINIFIG);

  const { data: minifigData } = useRebrickableData<Minifig>(
    `lego/minifigs/${selectedMinifigId}/`,
    true,
  );

  const {
    data: partsData,
    isLoading,
    error,
  } = useRebrickableData<PartsApiResponse>(
    `lego/minifigs/${selectedMinifigId}/parts/`,
    true,
  );

  if (minifigData === null) {
    return null;
  }

  return (
    <FormProvider {...methods}>
      <div>
        <form
          onSubmit={methods.handleSubmit(async (data) => {
            try {
              const response = await ordersApiClient.submit(data);
              console.log(response);
              methods.reset();
              navigate("/step/1");
            } catch (error) {
              alert("Something went wrong. Please try again.");
              methods.setError("root.serverError", {
                type: "unknown",
                message: "Something went wrong",
              });
            }
          })}
          noValidate
        >
          <Grid columns={2} gap={"50px"}>
            <Container>
              <h2>Shipping Details</h2>
              <Grid columns={2}>
                <InputField
                  name={FORM_FIELDS.FIRST_NAME}
                  label="First Name"
                  placeholder="John"
                />
                <InputField
                  name={FORM_FIELDS.LAST_NAME}
                  label="Last Name"
                  placeholder="Doe"
                />
              </Grid>
              <InputField
                name={FORM_FIELDS.PHONE}
                label="Phone Number"
                placeholder="+1 (555) 123-4567"
              />
              <InputField
                name={FORM_FIELDS.EMAIL}
                label="Email"
                placeholder="john.doe@example.com"
              />
              <InputField
                name={FORM_FIELDS.DOB}
                label="Date of Birth"
                placeholder="MM/DD/YYYY"
              />
              <InputField
                name={FORM_FIELDS.ADDRESS}
                label="Address"
                placeholder="1234 Main St"
              />
              <InputField
                name={FORM_FIELDS.CITY}
                label="City"
                placeholder="Anytown"
              />
              <Grid columns={2}>
                <InputField
                  name={FORM_FIELDS.STATE}
                  label="State"
                  placeholder="State"
                />
                <InputField
                  name={FORM_FIELDS.ZIP_CODE}
                  label="Zip Code"
                  placeholder="12345"
                />
              </Grid>
            </Container>
            <Sidebar>
              <h2>Summary</h2>
              <img
                style={{ maxWidth: "100px" }}
                src={minifigData?.set_img_url}
              />
              <h3>{minifigData?.name}</h3>
              {isLoading && <p>Loading parts...</p>}
              {error && <p>Error fetching parts: {error.message}</p>}
              {partsData && (
                <div>
                  <h4>There are {partsData.results.length} parts </h4>
                  <ul>
                    {partsData.results.map((part) => (
                      <LegoParts
                        key={part.inv_part_id}
                        partImgUrl={part.part.part_img_url}
                        partName={part.part.name}
                        partId={part.inv_part_id}
                        alt={part.part.name}
                      />
                    ))}
                  </ul>
                </div>
              )}
              <Button
                type="submit"
                disabled={
                  methods.formState.isSubmitting || !methods.formState.isValid
                }
              >
                {methods.formState.isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </Sidebar>
          </Grid>
        </form>
      </div>
    </FormProvider>
  );
};

export default StepThree;
