/** React */
import { useState } from "react";

/** Styles */
import styles from "./styles.module.scss";

/** Components */
import Button from "../Button/Button";
import Input from "../Input/Input";
import QuotesServiceInstance from "../../services/quotes.service";

const NewQuoteInput = () => {
    const [isFetching, setIsFetching] = useState(false);
    const [quote, setQuote] = useState("");

    const handleQuoteChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setQuote(e.target.value);
    const handleAddQuote = () => {
        setIsFetching(true);
        QuotesServiceInstance.addQuote({ quote })
            .then(() => setQuote(""))
            .finally(() => setIsFetching(false));
    };

    return (
        <div className={styles["new-quote"]}>
            <Input
                type="text"
                onChange={handleQuoteChange}
                placeholder="Write tour quote"
                maxLength={100}
                value={quote}
                disabled={isFetching}
            />
            <Button
                onClick={handleAddQuote}
                name="Add quote"
                style={{ marginLeft: "8px" }}
                disabled={isFetching}
            />
        </div>
    );
};

export default NewQuoteInput;
