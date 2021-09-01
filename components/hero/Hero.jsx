import React from "react";
import clsx from 'clsx';
import Link from "next/link";
import Image from "next/image";
import heroStyles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={heroStyles.hero}>
      <div className={clsx('row', heroStyles.row)}>
        <div className="col_2">
          <h1>
            Give Your Workout
            <br />A New Style
          </h1>
          <p>
            Success isn&apos;t always about greatness. It&apos;s about
            consistency. Consistent
            <br />
            hard work gains success. Greatness will come.
          </p>
          <Link href="/">
            <a className="btn">Explore Now &#8594;</a>
          </Link>
        </div>
        <div className="col_2">
          <Image
            src="/images/image1.png"
            alt="banner"
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
  );
}
