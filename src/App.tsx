import { NumberUpdater } from "./components/NumberUpdater";
import { StringUpdater } from "./components/StringUpdater";
import { ArrayUpdater } from "./components/ArrayUpdater";
import { Results } from "./components/Results";

function App() {
  return (
    <div className="min-h-screen bg-primary/40 py-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <NumberUpdater />
          <StringUpdater />
          <ArrayUpdater />
        </div>
        <Results />
      </div>
    </div>
  );
}

export default App;
