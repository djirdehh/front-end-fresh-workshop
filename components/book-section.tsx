"use client";

import { useSearchParams } from 'next/navigation';
import PageHeader from "@/components/page-header";
import Link from "next/link";
import { Suspense } from 'react';

const STRIPE_LINKS = {
  default: "https://book.stripe.com/7sI4ii94JaRRddm6oo",
  earlyBird: "https://book.stripe.com/4gw5mmbcRf87flucMN"
};

const PAYPAL_LINK = "https://www.paypal.com/paypalme/djirdehh";
const EMAIL_LINK = "mailto:hassan.djirdeh@gmail.com";

function BookSectionContent() {
  const searchParams = useSearchParams();
  const hasSpecialParam = searchParams.has('building-large-scale-apps');
  const bookLink = hasSpecialParam ? STRIPE_LINKS.earlyBird : STRIPE_LINKS.default;

  return (
    <div className="pt-12 pb-12 md:pb-20" id="book">
      <div className="px-4 sm:px-6">
        <PageHeader
          className="mb-12 md:mb-20"
          title="Book Your Spot"
          description="Secure your spot and join the workshop when we begin!"
        >
          Early bird registration
        </PageHeader>

        <div className="relative flex items-center justify-center gap-10 before:h-px before:w-full before:border-b before:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.8),transparent)1] dark:before:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] before:shadow-sm before:shadow-white/20 dark:before:shadow-none after:h-px after:w-full after:border-b after:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.8),transparent)1] dark:after:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] after:shadow-sm after:shadow-white/20 dark:after:shadow-none mb-16 pb-3">
          <div className="w-full max-w-[350px] mx-auto shrink-0">
            <div className="relative flex flex-col h-full p-5 rounded-2xl bg-gradient-to-tr from-white/100 to-white/60 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40">
              <div className="mb-4">
                <div className="flex justify-between">
                  <div className="font-medium underline underline-offset-4 decoration-gray-300 text-gray-800 dark:text-gray-200 mb-1">
                    One-time payment
                  </div>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                    Early bird pricing
                  </span>
                </div>
                <div className="flex items-baseline pb-4 mb-4 border-b border-gray-500 dark:border-gray-200 border-dashed">
                  <span className="text-2xl text-gray-900 dark:text-gray-100 line-through font-bold">
                    $
                  </span>
                  <span className="text-4xl mr-2 text-gray-900 dark:text-gray-100 line-through font-bold tabular-nums">
                    249
                  </span>
                  <span className="text-2xl text-gray-900 dark:text-gray-100 font-bold">
                    $
                  </span>
                  <span className="text-4xl text-gray-900 dark:text-gray-100 font-bold tabular-nums">
                    199
                  </span>
                  <span className="text-sm text-gray-900 dark:text-gray-100 pl-1">
                    USD
                  </span>
                </div>
                <div className="grow text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Book now to take advantage of this early bird price and
                  secure your spot in the workshop.
                </div>
              </div>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 grow">
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>
                    4 live online lectures on Wednesdays at 7:00 PM ET (first
                    lecture on Sept 25)
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Cohort-based learning + private Slack community</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Lecture slides, Google Docs, and code examples</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Instructor mentorship throughout the 4 weeks</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>And more!</span>
                </li>
              </ul>
              <div className="mt-6">
                <a
                  className="btn-sm py-1.5 rounded-lg text-white bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow w-full"
                  href={bookLink}
                  target="_blank"
                >
                  Book now
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 xl:gap-9 xl:mx-8 max-md:-mx-3">
          <div className="flex flex-col rounded-lg bg-gradient-to-tr from-white/80 to-white/60 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 p-5">
            <div className="grow mb-3">
              <p className="font-inter-tight text-lg font-semibold text-gray-700 dark:text-gray-200 mb-1">
                What happens after I book?
              </p>
              <p className="text-md text-gray-700 dark:text-gray-300">
                We'll send you an email shortly and add you to the workshop
                Slack community. The Slack community is where you'll be able
                to ask questions, follow along on all workshop details and
                additional communication from us, and where you'll connect
                with fellow attendees.
              </p>
            </div>
          </div>
          <div className="flex flex-col rounded-lg bg-gradient-to-tr from-white/80 to-white/60 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 p-5">
            <div className="grow mb-3">
              <p className="font-inter-tight text-lg font-semibold text-gray-700 dark:text-gray-200 mb-1">
                Do you support PayPal?
              </p>
              <p className="text-md text-gray-700 dark:text-gray-300">
                If you'd like to make a full payment through PayPal, send the
                payment using this{" "}
                <a
                  href={PAYPAL_LINK}
                  target="_blank"
                  className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  PayPal link
                </a>
                . Once complete, send us an email us at{" "}
                <a
                  href={EMAIL_LINK}
                  target="_blank"
                  className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  hassan.djirdeh@gmail.com
                </a>{" "}
                mentioning your name and email and confirming the payment was
                sent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookSection() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookSectionContent />
    </Suspense>
  );
}