/** React */
import { useState } from "react";

/** Hooks */
import useResource from "../../hooks/useResource";

/** Services */
import QuotesServiceInstance from "../../services/quotes.service";

/** Styles */
import styles from "./styles.module.scss";

/** Components */
import Button from "../Button/Button";

/** Types */
import type { Quote } from "../../types/quotes.types";

const RandomQuote = () => {
    const [resetToken, setResetToken] = useState(new Date());

    const { data, isLoading } = useResource<Quote | null>(
        QuotesServiceInstance.getRandomQuote,
        null,
        [],
        [resetToken]
    );

    const handleGetQuote = () => setResetToken(new Date());

    if (isLoading)
        return <h1 className={styles["loading-header"]}>Loading...</h1>;

    return (
        <div className="d-flex flex-direction-column justify-content-start align-items-center width-full">
            <h1 className={styles["title"]}>
                Random Quote: {data?.quote ? data.quote : "No quotes yet :("}
            </h1>

            <Button onClick={handleGetQuote} name="Get quote" />
        </div>
    );
};

export default RandomQuote;
