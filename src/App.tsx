import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "@/styles/GlobalStyle";
import theme from "@/styles/theme";
import LegoMinifigsMysteryBox from "@/features/LegoMinifigsMysteryBox/LegoMinifigsMysteryBox";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

const ErrorFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Routes>
            <Route path="/step/:stepId" element={<LegoMinifigsMysteryBox />} />
            <Route path="/" element={<LegoMinifigsMysteryBox />} />
            <Route path="*" element={<div>not found</div>} />
          </Routes>
        </ErrorBoundary>
      </Router>
    </ThemeProvider>
  );
};

export default App;
