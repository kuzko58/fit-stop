import React from "react";
import Link from "next/link";
import clsx from "clsx";
import miniGalleryStyles from "./mini-gallery-styles.module.css";

export default function MiniGallery({ title, children, button, classes }) {
  return (
    <div className={clsx(miniGalleryStyles.gallery, classes)}>
      <div className={miniGalleryStyles.gallery__container}>
      {title && <h2 className={miniGalleryStyles.gallery__header}>{title}</h2>}
      <div className="row">{children}</div>
      <div className={miniGalleryStyles.gallery__footer}>
        {button && (
          <Link href={button.link || ""}>
            <a className="btn_tr">{button?.text} &#8594;</a>
          </Link>
        )}
      </div>
      </div>
    </div>
  );
}
