// Importing necessary components and context
import GameBoard from "./components/GameBoard";
import GameOverModal from "./components/GameOverModal";
import HangmanIllustration from "./components/HangmanIllustration";
import { GameProvider } from "./context/GameContext";

// Main application component
export default function App() {
  return (
    // Wrapping the app with GameProvider for state management
    <GameProvider>
      <div className="flex flex-col gap-16 items-center  px-3 h-screen">
          <h2 id="title" className="mt-16 text-center text-7xl font-bold max-md:hidden text-blue-200">Hangman Word</h2>
        <div className="border-2 border-light_brown flex w-[850px] items-end justify-between gap-16 rounded-lg bg-white px-4 py-4 shadow-xl max-md:flex-col max-md:items-center max-md:px-2.5 max-md:py-8">
          <div className="border-2 border-dashed border-light_green h-full w-full flex items-end justify-between gap-16 rounded-lg px-6 py-10 max-md:flex-col max-md:items-center">
              <HangmanIllustration />
              <GameBoard />
          </div>
        </div>
        <GameOverModal />
      </div>
    </GameProvider>
  );
}
