/** Components */
import NewQuoteInput from "./components/NewQuoteInput/NewQuoteInput";
import RandomQuote from "./components/RandomQuote/RandomQuote";

function App() {
    return (
        <div className="d-flex">
            <RandomQuote />
            <NewQuoteInput />
        </div>
    );
}

export default App;
