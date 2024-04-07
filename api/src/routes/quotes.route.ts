/** Express */
import { Router } from "express";

/** Controllers */
import {
    getQuotes,
    addQuote,
    getRandomQuote,
} from "../controllers/quotes.controller";

/** Routes */
const router = Router();

/** Get */
router.get("/all", getQuotes);
router.get("/random", getRandomQuote);

/** Post */
router.post("/add", addQuote);

export default router;
