/** Express */
import { Request, Response } from "express";

/** Sequelize */
import sequelize from "../configs/db.config";

/** Models */
import Quote from "../models/quote.model";
import { Sequelize } from "sequelize";

export const getQuotes = async (req: Request, res: Response) => {
    const quotes = await Quote.findAll();

    res.status(200).json(quotes);
};

export const addQuote = async (req: Request, res: Response) => {
    const { quote } = req.body;

    if (!quote || quote?.length === 0)
        return res.status(400).json({ message: "Quote is required" });

    const newQuote = await Quote.create({ quote });

    res.status(201).json(newQuote);
};

export const getRandomQuote = async (req: Request, res: Response) => {
    const quote = await Quote.findOne({
        order: Sequelize.literal("NEWID()"),
    });

    res.status(200).json(quote);
};
