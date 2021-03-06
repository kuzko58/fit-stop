import React from "react";
import clsx from "clsx";
import Image from "next/image";
import cardStyles from "./cards.module.css";

export default function SimpleCard({
  image,
  title,
  size,
  renderContent,
  classes,
  onClick,
}) {
  return (
    <div
      className={clsx(`col_${size}`, cardStyles.card, classes)}
      onClick={onClick ? onClick : undefined}
    >
      {image && (
        <Image
          src={image}
          alt={title || "card image"}
          width={1500}
          height={1500}
        />
      )}
      {renderContent && renderContent()}
    </div>
  );
}
