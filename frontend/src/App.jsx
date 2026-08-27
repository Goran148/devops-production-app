import { useEffect, useState } from "react";
import "./App.css";

const API_URL = import.meta.env.VITE_API_URL || "/api";

function App() {
  const [apiStatus, setApiStatus] = useState("Checking...");
  const [databaseStatus, setDatabaseStatus] = useState("Checking...");

  useEffect(() => {
    fetch(`${API_URL}/health`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("API request failed");
        }

        return response.json();
      })
      .then((data) => {
        setApiStatus(data.status);
      })
      .catch((error) => {
        console.error("API error:", error);
        setApiStatus("unavailable");
      });

    fetch(`${API_URL}/database`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Database request failed");
        }

        return response.json();
      })
      .then((data) => {
        setDatabaseStatus(data.database);
      })
      .catch((error) => {
        console.error("Database error:", error);
        setDatabaseStatus("unavailable");
      });
  }, []);

  return (
    <div className="app">
      <h1>DevOps Production App</h1>

      <div className="card">
        <h2>System Status</h2>

        <p>
          API:
          <strong>{apiStatus}</strong>
        </p>

        <p>
          Database:
          <strong>{databaseStatus}</strong>
        </p>
      </div>
    </div>
  );
}

export default App;