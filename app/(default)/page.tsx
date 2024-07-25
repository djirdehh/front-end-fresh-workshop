export const metadata = {
  title: "The Front-End Fresh Workshop",
  description:
    "A 4-week, once-a-week evening workshop on all things front-end and software engineering. By Hassan Djirdeh.",
};

import PageHeader from "@/components/page-header";
import SubscribeForm from "@/components/subscribe-form";
import Accordion from "@/components/accordion";
import Cta from "@/components/cta";

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
