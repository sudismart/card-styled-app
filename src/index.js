import React from "react";
import ReactDOM from "react-dom/client"; 
import { Card } from "sudipta-styled-card-component"

const App = () => {
    return (
      <div style={{ display: 'flex', gap: '1rem' }}>
        {/* Outlined Card */}
        <Card variant="outlined" elevation={2} padding="2rem" borderradius="12px" onClick={() => alert("Card clicked!")}>
          <h2>Outlined Card</h2>
          <p>This is a simple card with an outlined border.</p>
        </Card>

        {/* Elevated Card */}
        <Card variant="elevated" elevation={3} padding="1rem">
          <h3>Elevated Card</h3>
          <p>This is an elevated card with a subtle shadow.</p>
        </Card>

        {/* Flat Card */}
        <Card variant="flat" padding="1rem" borderradius="8px">
          <h3>Flat Card</h3>
          <p>This card has no shadow or border.</p>
        </Card>

        {/* Raised Card */}
        <Card variant="raised" elevation={5} padding="2rem" borderradius="10px">
          <h3>Raised Card</h3>
          <p>This card appears raised with a prominent shadow.</p>
        </Card>

        {/* Highlighted Card */}
        <Card variant="highlighted" color="green" padding="1.5rem" borderradius="10px">
          <h3>Highlighted Card</h3>
          <p>This card has a highlighted border with a custom color.</p>
        </Card>
      </div>
    );
  };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
