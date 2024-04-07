/** Config */
import app from "../configs/app.config";

/** Routes */
import quotesRouter from "./quotes.route";

app.use("/quotes", quotesRouter);
