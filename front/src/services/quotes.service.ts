/** Services */
import ApiService from "./api.service";

/** Constants */
import { API_ENDPOINTS } from "../constants/urls.constants";

class QuotesService extends ApiService {
    /** Get */
    public getAllQuotes = () => this.get(API_ENDPOINTS.quotes.getAll);
    public getRandomQuote = () => this.get(API_ENDPOINTS.quotes.getRandomQuote);

    /** Post */
    public addQuote = (data: { quote: string }) =>
        this.post(API_ENDPOINTS.quotes.addQuote, data);
}

const QuotesServiceInstance = new QuotesService();

export default QuotesServiceInstance;
