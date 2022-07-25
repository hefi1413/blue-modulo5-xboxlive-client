
export interface GameCardItem {
    id?: string;
    title: string;
    CoverImageUrl: string;
    Description: string;
    Year :string;
    ImdbScore :string;
    TrailerYouTubeUrl? :string;
    GameplayYouTubeUrl? :string;
    genres: Object[];
}