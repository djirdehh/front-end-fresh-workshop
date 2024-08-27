export const metadata = {
  title: "The Front-End Fresh Workshop",
  description:
    "A 4-week, once-a-week evening workshop on all things front-end and software engineering. By Hassan Djirdeh.",
};

import getAgenda from "@/lib/getAgenda";

import PageHeader from "@/components/page-header";
import BookForm from "@/components/book-form";
import BookSection from "@/components/book-section";
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
    text: "Yes, the program costs $249 USD for the full workshop.",
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

      <BookSection />

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
