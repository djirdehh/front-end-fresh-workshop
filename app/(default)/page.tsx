export const metadata = {
  title: "The Front-End Fresh Workshop",
  description:
    "A 4-week, once-a-week evening workshop on all things front-end and software engineering. By Hassan Djirdeh.",
};

import getAgenda from "@/lib/getAgenda";

import PageHeader from "@/components/page-header";
import BookForm from "@/components/book-form";
import SubscribeForm from "@/components/subscribe-form";
import Accordion from "@/components/accordion";
import Cta from "@/components/cta";
import Posts from "@/components/posts";
import Image from "next/image";

const faqs = [
  {
    title: "What is this?",
    text: "This is a workshop bootcamp designed by Hassan Djirdeh, slated to begin on Sept 25th.",
    active: true,
  },
  {
    title: "Is this a paid program?",
    text: "Yes, the program currently costs $199 USD for early bird registration. The price will increase to $249 USD shortly, so secure your spot now!",
    active: false,
  },
  {
    title: "What is the commitment to the workshop?",
    text: "The commitment involves 1 to 2 hours of live online sessions at around 7 PM EST each week. Additionally, there will be self-paced learning and reading between sessions to reinforce and expand on the topics covered.",
    active: false,
  },
  {
    title: "When does this start?",
    text: "The workshop is expected to start on Sept 25th and end on the week of Oct 16th.",
    active: false,
  },
  {
    title: "What happens after I book?",
    text: "We'll send you an email shortly and add you to the workshop Slack community. The Slack community is where you'll be able to ask questions, follow along on all workshop details and additional communication from us, and where you'll connect with fellow attendees.",
    active: false,
  },
  {
    title: "What if I don't learn much from the workshop?",
    text: "If you're unhappy with the workshop for any reason, just reach out to us and we'll give you a full refund. No questions asked.",
    active: false,
  },
  {
    title: "Can I contact you?",
    text: "Yes, you can contact us for inquiries or additional information at hassan.djirdeh@gmail.com.",
    active: false,
  },
];

export default function Home() {
  const agenda = getAgenda();

  return (
    <section>
      <div className="pt-32 pb-12 md:pt-44 md:pb-20" id="home">
        <div className="px-4 sm:px-6">
          <PageHeader
            className="mb-12"
            title="The Front-End Fresh Workshop"
            description={
              <span className="text-lg text-gray-700 dark:text-gray-300">
                Secure your spot for the 4-week, once-a-week evening workshop on
                front-end and software engineering. By{" "}
                <a
                  className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                  href="https://www.linkedin.com/in/hassandjirdeh/"
                  target="_blank"
                >
                  Hassan Djirdeh
                </a>
                .
              </span>
            }
          >
            Beginning Sept 25th 2024
          </PageHeader>

          <BookForm />
        </div>
      </div>

      <div className="pt-8 pb-8 md:pb-20" id="topics">
        <div className="px-4 sm:px-6">
          <PageHeader
            className="mb-12"
            title="Topics"
            description="Covering a breadth of essential front-end engineering skills and knowledge."
          >
            What You'll Learn
          </PageHeader>
        </div>
        <div className="px-4 sm:px-6">
          <div className="max-w-xs md:max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 xl:gap-9 xl:mx-8 max-md:-mx-3">
              <div className="flex flex-col rounded-lg bg-gradient-to-tr from-white/80 to-white/60 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 p-5">
                <div className="grow mb-3">
                  <div className="font-inter-tight font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    Front-end engineering in 2024 and beyond
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Explore the latest trends, tools, and technologies shaping
                    the future of front-end development. Stay ahead with
                    insights into what’s next.
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg bg-gradient-to-tr from-white/80 to-white/60 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 p-5">
                <div className="grow mb-3">
                  <div className="font-inter-tight font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    Building Large-Scale Web Apps
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Learn best practices for building scalable, maintainable web
                    applications. From architecture to deployment, gain hands-on
                    tips for managing complex projects.
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg bg-gradient-to-tr from-white/80 to-white/60 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 p-5">
                <div className="grow mb-3">
                  <div className="font-inter-tight font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    Breaking into FAANG
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Get tips on how to break into top tech companies like Meta,
                    Amazon, Apple, Netflix, and Google. Understand the
                    recruitment process, required skills, and how to stand out.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 xl:gap-9 xl:mx-8 max-md:-mx-3 mt-12">
              <div className="flex flex-col rounded-lg bg-gradient-to-tr from-white/80 to-white/60 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 p-5">
                <div className="grow mb-3">
                  <div className="font-inter-tight font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    Levelling Up from Junior to Senior to Staff
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Discover strategies to advance your software engineering
                    career. Learn how to transition from junior developer to
                    senior roles and beyond with practical advice and real-world
                    examples.
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg bg-gradient-to-tr from-white/80 to-white/60 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 p-5">
                <div className="grow mb-3">
                  <div className="font-inter-tight font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    Mastering React and Advanced JavaScript
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Dive deep into advanced React concepts and JavaScript
                    techniques. Enhance your skills with sessions on hooks,
                    state management, performance optimization, and more.
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg bg-gradient-to-tr from-white/80 to-white/60 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 p-5">
                <div className="grow mb-3">
                  <div className="font-inter-tight font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    Building a Personal Brand
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Understand the importance of building a personal brand,
                    networking in the tech industry, and learn how to create an
                    impactful online presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 pb-12 md:pb-20" id="instructor">
        <div className="px-4 sm:px-6">
          <PageHeader
            className="max-w-5xl mb-8"
            title="Hi 👋🏾!"
            description={
              <span>
                I'm <b>Hassan</b>. As a{" "}
                <a
                  className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                  href="https://largeapps.dev/"
                  target="_blank"
                >
                  published author
                </a>
                , course instructor, and senior software engineer with
                experience at DoorDash, Instacart, and Shopify, I have a passion
                for teaching and sharing my knowledge. Join me in this workshop
                to take your front-end engineering skills to the next level.
                Register today to secure your spot, receive updates, and to join
                the workshop when we begin on Sept 25th!
              </span>
            }
          >
            Instructor
          </PageHeader>

          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              <ul className="flex justify-center -space-x-2 mb-4">
                <li>
                  <Image
                    className="rounded-full"
                    src={`/images/hassan.jpeg`}
                    width={158}
                    height={158}
                    alt="Hassan"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 pb-12 md:pb-20" id="agenda">
        <div className="px-4 sm:px-6">
          <PageHeader
            className="mb-12 md:mb-20"
            title="Agenda"
            description={
              <span className="text-lg text-gray-700 dark:text-gray-300">
                A 4-week, once-a-week evening workshop to level up your
                front-end and software engineering skills.{" "}
                <span className="font-semibold">
                  Each session will be a 1 hour and 30 minute live lecture
                  starting at approximately 7:00 PM ET.
                </span>
              </span>
            }
          >
            Workshop Details
          </PageHeader>
        </div>
        <Posts posts={agenda} />
      </div>

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
                      4 live online lectures on Wednesdays at 7:30 PM ET (first
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
                    href="https://book.stripe.com/7sI4ii94JaRRddm6oo"
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
                    href="https://www.paypal.com/paypalme/djirdehh"
                    target="_blank"
                    className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    PayPal link
                  </a>{" "}
                  and email us at{" "}
                  <a
                    href="mailto:hassan.djirdeh@gmail.com"
                    target="_blank"
                    className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    hassan.djirdeh@gmail.com
                  </a>{" "}
                  your name and email confirming the payment was sent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 pb-12 md:pb-20" id="faq">
        <div className="px-4 sm:px-6">
          <PageHeader
            className="mb-12 md:mb-20"
            title="FAQ"
            description="Got questions? We've got answers."
          >
            Quick Answers
          </PageHeader>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-1">
              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  title={faq.title}
                  id={`faqs-${index}`}
                  active={faq.active}
                >
                  {faq.text}
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SubscribeForm />
    </section>
  );
}
