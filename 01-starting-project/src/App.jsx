import Player from "./components/Player";
import Challenge from "./components/Challenge";

function App() {
  return (
    <div id="content">
      <Player />
      <section id="challenges">
        <Challenge title="Easy" targetTime={1} />
        <Challenge title="Not Easy" targetTime={5} />
        <Challenge title="Getting Tough" targetTime={10} />
        <Challenge title="Pros Only" targetTime={15} />
      </section>
    </div>
  );
}

export default App;

