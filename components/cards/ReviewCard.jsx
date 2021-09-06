import React from "react";
import clsx from "clsx";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import Image from "next/image";
import cardStyles from "./cards.module.css";

export default function ReviewCard({
  image,
  review,
  rating,
  author,
  size,
  renderContent,
  onClick,
}) {
  return (
    <div
      className={clsx(`col_${size}`, cardStyles.card, "card")}
      onClick={onClick ? onClick : undefined}
    >
      <div className="review__header">
        <div className="author_box">
          {image && (
            <Image
              src={image}
              alt="card image"
              width={100}
              height={100}
              className={cardStyles.round_image}
            />
          )}
          <h4>{author}</h4>
        </div>
        <FormatQuoteIcon className={cardStyles.quote__icon} />
      </div>
      {renderContent && renderContent()}
      <p>{review}</p>
      <div className="review__rating">
        {Array(5)
          .fill(0)
          .fill(2, 0, Math.floor(rating))
          .fill(
            Math.round(rating) === rating ? 0 : 1,
            Math.floor(rating),
            Math.round(rating)
          )
          .map((val, i) => {
            if (val === 2) return <StarIcon key={i} />;
            if (val === 1) return <StarHalfIcon key={i} />;
            return <StarBorderIcon key={i} />;
          })}
      </div>

      <style jsx>{`
        .card {
          box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
          padding: 20px;
          transition: transform 0.5s;
        }

        .card:hover {
          transform: translateY(-10px);
          cursor: pointer;
        }

        .review__rating {
          color: #ff523b;
          margin: 10px auto;
        }

        h4 {
          margin-top: 20px;
          text-transform: capitalize;
          font-weight: 400;
        }

        p {
          font-size: 14px;
          color: #777;
        }

        .author_box {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .review__header {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
}
