export const metadata = {
  title: "The Front-End Fresh Workshop",
  description:
    "A 4-week, once-a-week evening workshop on all things front-end and software engineering. By Hassan Djirdeh.",
};

import getAgenda from "@/lib/getAgenda";

import PageHeader from "@/components/page-header";
import SubscribeForm from "@/components/subscribe-form";
import Accordion from "@/components/accordion";
import Cta from "@/components/cta";
import Posts from "@/components/posts";
import Image from "next/image";

const faqs = [
  {
    title: "What is this?",
    text: "This is a workshop bootcamp designed by Hassan Djirdeh, expected to begin in a few months. This landing page is for gathering interest and keeping you informed about the event.",
    active: true,
  },
  {
    title: "Is this a paid program?",
    text: "Yes, the program will cost between $199 - $299 for the full four-week workshop. Pricing details are still being finalized.",
    active: false,
  },
  {
    title: "What is the commitment to the workshop?",
    text: "The commitment involves 1 to 2 hours of live online sessions at around 7 PM EST each week. Additionally, there will be self-paced learning and reading between sessions to reinforce and expand on the topics covered.",
    active: false,
  },
  {
    title: "When does this start?",
    text: "The workshop is expected to start in a few months if we get enough sign-ups/interest. Exact dates will be communicated to those on the waitlist.",
    active: false,
  },
  {
    title: "What happens if I add my email to the waitlist?",
    text: "You’ll receive updates about the workshop, including start dates, pricing, and other important details. You'll also be the first to know when registration opens.",
    active: false,
  },
  {
    title: "When can I hear more?",
    text: "Expect more details in the coming weeks.",
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
              <span className="text-lg text-gray-700 dark:text-gray-400">
                A 4-week, once-a-week evening workshop on all things front-end
                and software engineering. By{" "}
                <a
                  className="font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                  href="https://www.linkedin.com/in/hassandjirdeh/"
                  target="_blank"
                >
                  Hassan Djirdeh
                </a>
                .
              </span>
            }
          >
            Launching Q3 2024
          </PageHeader>

          <SubscribeForm />
        </div>
      </div>

      <div className="pt-8 pb-8 md:pb-20" id="topics">
        <div className="px-4 sm:px-6">
          <PageHeader
            className="mb-12"
            title="Topics"
            description="Covering a breadth of essential front-end engineering skills and knowledge."
          >
            What's in this workshop?
          </PageHeader>
        </div>
        <div className="px-4 sm:px-6">
          <div className="max-w-xs md:max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 xl:gap-9 xl:mx-8 max-md:-mx-3">
              <div className="flex flex-col rounded-lg bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 p-5">
                <div className="grow mb-3">
                  <div className="font-inter-tight font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    Front-end engineering in 2024 and beyond
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    Explore the latest trends, tools, and technologies shaping
                    the future of front-end development. Stay ahead with
                    insights into what’s next.
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 p-5">
                <div className="grow mb-3">
                  <div className="font-inter-tight font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    Building Large-Scale Web Apps
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    Learn best practices for building scalable, maintainable web
                    applications. From architecture to deployment, gain hands-on
                    tips for managing complex projects.
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 p-5">
                <div className="grow mb-3">
                  <div className="font-inter-tight font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    Breaking into FAANG
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    Get tips on how to break into top tech companies like Meta,
                    Amazon, Apple, Netflix, and Google. Understand the
                    recruitment process, required skills, and how to stand out.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 xl:gap-9 xl:mx-8 max-md:-mx-3 mt-12">
              <div className="flex flex-col rounded-lg bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 p-5">
                <div className="grow mb-3">
                  <div className="font-inter-tight font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    Levelling Up from Junior to Senior to Staff
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    Discover strategies to advance your software engineering
                    career. Learn how to transition from junior developer to
                    senior roles and beyond with practical advice and real-world
                    examples.
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 p-5">
                <div className="grow mb-3">
                  <div className="font-inter-tight font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    Mastering React and Advanced JavaScript
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    Dive deep into advanced React concepts and JavaScript
                    techniques. Enhance your skills with sessions on hooks,
                    state management, performance optimization, and more.
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 p-5">
                <div className="grow mb-3">
                  <div className="font-inter-tight font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    Building a Personal Brand
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
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
            className="mb-12 md:mb-20"
            title="Instructor"
            description={
              <span>
                Hi 👋🏾! I'm <b>Hassan</b> — a senior software engineer and I've
                have had the opportunity to build large production web
                applications at organizations like Doordash, Instacart, and
                Shopify. I'm also a{" "}
                <a
                  className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                  href="https://largeapps.dev/"
                  target="_blank"
                >
                  published author and course instructor
                </a>{" "}
                where I've helped thousands of students learn in-depth front-end
                engineering skills.
                <br />
                <br />
                My passion is to help front-end software engineers level up
                their skill sets, from mastering core concepts to tackling
                advanced topics. This workshop is designed to empower you with
                the knowledge and confidence to excel in your career, whether
                you're aiming to make a significant impact in your current role
                or break into top-tier tech companies.
              </span>
            }
          >
            Hassan Djirdeh
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
            description="A 4-week, once-a-week evening workshop to level up your front-end and software engineering skills."
          >
            Workshop Details
          </PageHeader>
        </div>
        <Posts posts={agenda} />
      </div>

      <div className="pt-12 pb-12 md:pb-20" id="join">
        <div className="px-4 sm:px-6">
          <PageHeader
            className="mb-12 md:mb-20"
            title="Join the workshop"
            description="Pick your package"
          >
            Pay once or in instalments
          </PageHeader>

          <div className="relative flex items-center justify-center gap-10 before:h-px before:w-full before:border-b before:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.8),transparent)1] dark:before:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] before:shadow-sm before:shadow-white/20 dark:before:shadow-none after:h-px after:w-full after:border-b after:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.8),transparent)1] dark:after:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] after:shadow-sm after:shadow-white/20 dark:after:shadow-none mb-16 pb-3">
            <div className="w-full max-w-xs mx-auto shrink-0">
              <form className="relative">
                <div
                  className="absolute -inset-3 bg-gradient-to-tr from-white/70 to-white/50 dark:bg-transparent dark:bg-gradient-to-b dark:from-gray-700/80 dark:to-gray-700/70 rounded-lg -z-10 before:absolute before:inset-y-0 before:left-0 before:w-[15px] before:bg-[length:15px_15px] before:[background-position:top_center,bottom_center] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1.5px,transparent_1.5px)] dark:before:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px)] after:absolute after:inset-y-0 after:right-0 after:w-[15px] after:bg-[length:15px_15px] after:[background-position:top_center,bottom_center] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1.5px,transparent_1.5px)] dark:after:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px)]"
                  aria-hidden="true"
                />
                <div className="space-y-5 py-4 pt-6 px-2">
                  <div className="space-y-3">
                    <h2 className="font-inter-tight text-5xl leading-6 font-semibold text-gray-800 dark:text-gray-300">
                      $199.99<sub className="text-xs tracking-normal">USD</sub>
                    </h2>
                  </div>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 leading-normal text-gray-800 dark:text-gray-300"
                  >
                    <li className="flex">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        className="h-4 w-4 flex-none relative top-[0.2rem] fill-current"
                      >
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27   c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0   L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"
                        />
                      </svg>
                      <span className="ml-4 text-sm">
                        Weekly 1 hour and 30 min of live online classes
                      </span>
                    </li>

                    <li className="flex">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        className="h-4 w-4 flex-none relative top-[0.2rem] fill-current"
                      >
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27   c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0   L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"
                        />
                      </svg>
                      <span className="ml-4 text-sm">
                        Cohort-based learning + private Slack community
                      </span>
                    </li>

                    <li className="flex">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        className="h-4 w-4 flex-none relative top-[0.2rem] fill-current"
                      >
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27   c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0   L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"
                        />
                      </svg>
                      <span className="ml-4 text-sm">
                        Lecture Slides + Google Docs + Code Examples
                      </span>
                    </li>

                    <li className="flex">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        className="h-4 w-4 flex-none relative top-[0.2rem] fill-current"
                      >
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27   c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0   L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"
                        />
                      </svg>
                      <span className="ml-4 text-sm">
                        Instructor mentorship throughout the 4 weeks
                      </span>
                    </li>
                  </ul>
                  <div>
                    <button className="btn text-gray-100 bg-gray-900 hover:bg-gray-800 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-white w-full">
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
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
    </section>
  );
}
