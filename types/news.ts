export interface News {
    title:       string;
    description: string;
    link:        string;
    time:        Date;
}

export interface NewsResponse {
    news: News[];
}
