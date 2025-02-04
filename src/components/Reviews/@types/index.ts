interface Review {
    name: string;
    comment: string;
    location: string;
    avatar: string;
    rating: number;
}

type ReviewsProps = {
    reviews: Review[];
};
export type { Review, ReviewsProps };
