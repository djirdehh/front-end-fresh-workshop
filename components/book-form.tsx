"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";

function BookFormContent() {
  const searchParams = useSearchParams();
  const hasSpecialParam = searchParams.has("building-large-scale-apps");

  let bookButton = hasSpecialParam ? (
    <Link
      className="disabled:bg-gray-600 btn text-gray-100 bg-gray-900 hover:bg-gray-800 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-white w-full"
      href="#book"
    >
      Book now for $199&nbsp;
      <span className="line-through text-gray-100/50 dark:text-gray-800/50">
        $249
      </span>
    </Link>
  ) : (
    <Link
      className="disabled:bg-gray-600 btn text-gray-100 bg-gray-900 hover:bg-gray-800 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-white w-full"
      href="#book"
    >
      Book now for $249
    </Link>
  );

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <ul className="flex justify-center -space-x-2 mb-4">
            <li>
              <Image
                className="rounded-full"
                src={Avatar01}
                width={32}
                height={32}
                alt="Avatar 01"
              />
            </li>
            <li>
              <Image
                className="rounded-full"
                src={Avatar02}
                width={32}
                height={32}
                alt="Avatar 02"
              />
            </li>
            <li>
              <Image
                className="rounded-full"
                src={Avatar03}
                width={32}
                height={32}
                alt="Avatar 03"
              />
            </li>
            <li>
              <Image
                className="rounded-full"
                src={Avatar04}
                width={32}
                height={32}
                alt="Avatar 04"
              />
            </li>
            <li>
              <Image
                className="rounded-full"
                src={Avatar05}
                width={32}
                height={32}
                alt="Avatar 05"
              />
            </li>
          </ul>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">
              28
            </span>{" "}
            members joined our first cohort. Interested in hearing about when
            the next cohort opens up? Subscribe to our mailing list below!
          </p>
        </div>
      </div>
    </>
  );
}

export default function BookForm() {
  return (
    <Suspense>
      <BookFormContent />
    </Suspense>
  );
}
