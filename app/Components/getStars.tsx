import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
export const getStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - Math.ceil(rating);
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<BsStarFill className="h-[14px] text-[#2b2f38]" />);
    }

    if (halfStar) {
        stars.push(<BsStarHalf className="h-[14px] text-[#2b2f38]" />);
    }

    for (let i = 0; i < emptyStars; i++) {
        stars.push(<BsStar className="h-[14px] text-[#2b2f38]" />);
    }

    return stars;
};