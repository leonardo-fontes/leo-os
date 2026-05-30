import { useState } from "react";
import { BootSequenceScreen } from "@/modules/boot-sequence";
import { HomeSystemScreen } from "@/modules/home-system";

function App() {
  const [screen, setScreen] = useState<"boot" | "home">("boot");

  if (screen === "boot") {
    return <BootSequenceScreen onComplete={() => setScreen("home")} />;
  }

  return <HomeSystemScreen />;
}

export default App;
