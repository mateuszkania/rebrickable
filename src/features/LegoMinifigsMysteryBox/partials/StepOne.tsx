import React, { useEffect } from "react";
import { useRebrickableData } from "@/features/LegoMinifigsMysteryBox/hooks/useRebrickableData";
import { Button } from "@/components/Button";
import { useNavigate } from "react-router-dom";
import { Minifig } from "@/features/LegoMinifigsMysteryBox/types";
import { Container } from "@/components/Container";

const STORAGE_KEYS = {
  RANDOM_MINIFIGS: "randomMinifigs",
};

const StepOne: React.FC = () => {
  const { isLoading, error, refetch } = useRebrickableData<{
    results: Minifig[];
  }>("lego/minifigs/?in_theme_id=246", false);
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleStart = () => {
    refetch().then((response) => {
      const freshData = response.data;
      if (freshData && freshData.results.length > 0) {
        const randomMinifigs = selectRandomMinifigs(freshData.results, 3);
        sessionStorage.setItem(
          STORAGE_KEYS.RANDOM_MINIFIGS,
          JSON.stringify(randomMinifigs),
        );
        navigate("/step/2");
      }
    });
  };

  const selectRandomMinifigs = (
    minifigs: Minifig[],
    count: number,
  ): Minifig[] => {
    const shuffled = [...minifigs].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <Container>
      <h1>Lego Minifigs Mystery Box</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching data: {error.message}</p>}
      {!isLoading && !error && <Button onClick={handleStart}>Lets Go</Button>}
    </Container>
  );
};

export default StepOne;
