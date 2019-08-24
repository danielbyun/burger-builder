import React from "react";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <h1>This is a test</h1>
        <p>so everything in here prints in the Layout children component</p>
        <p>Test</p>
      </Layout>
    </div>
  );
}

export default App;
