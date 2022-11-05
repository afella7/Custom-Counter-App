import React from "react";
import { Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import CustomCounter from "./components/CustomCounter";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorPage from "./components/ErrorPage";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <section>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<CustomCounter />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/errorpage" element={<ErrorPage heroName="Joker" />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ErrorBoundary>
    </section>
  );
}

export default App;
