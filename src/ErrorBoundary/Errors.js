import React from "react";
import Hero from "./Hero";
import ErrorBoundary from "./ErrorBoundary";

function Errors() {
  return (
    <div>
      <ErrorBoundary>
        <Hero heroName="Bataman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
    </div>
  );
}

export default Errors;
