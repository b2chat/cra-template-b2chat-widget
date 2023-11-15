import { useB2ChatStore } from "@b2chatorg/chat-center-widget-sdk/dist/react";

function App() {
  const { state } = useB2ChatStore({});

  return (
    <div className="App">
      <code style={{ whiteSpace: "pre" }}>
        {JSON.stringify(state.activeChat, null, " ")}
      </code>
      <header className="Widget-header">
        <img className="icon" src="/icons/icon-256.png" alt="icon" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
