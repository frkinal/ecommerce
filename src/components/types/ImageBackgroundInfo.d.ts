interface ImageBackgroundInfo {
  EnableBackHandler: boolean;
  imagelink_portrait: string;
  type: string;
  id: string;
  favourite: boolean;
  name: string;
  special_ingredient: string;
  ingredients: string;
  average_rating: number;
  ratings_count: string;
  roasted: string;
  BackHandler?: () => void;
  ToggleFavourite: (favourite: boolean, type: string, id: string) => void;
}
