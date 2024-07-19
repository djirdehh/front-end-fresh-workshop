export const metadata = {
  title: "Home",
  description: "Page description",
};

import PageHeader from "@/components/page-header";
import SubscribeForm from "@/components/subscribe-form";
import Accordion from "@/components/accordion";
import Cta from "@/components/cta";

const faqs = [
  {
    title: "What is this?",
    text: "This is a workshop bootcamp designed by Hassan Djirdeh that's expected to begin in a few months. This landing page aims to just gather interest and keep you informed about the upcoming event.",
    active: true,
  },
  {
    title: "Is this a paid program?",
    text: "Yes, this will be a paid program. The cost will be between $99 - $199 for a full four-week workshop.",
    active: false,
  },
  {
    title: "When does this start?",
    text: "This is expected to start in a few months. Exact dates will be communicated to those who join the waitlist.",
    active: false,
  },
  {
    title: "What happens if I add my email to the waitlist?",
    text: "By adding your email to the waitlist, you'll receive updates about the workshop, including the start date, pricing, and other important details. You'll be the first to know when registration opens.",
    active: false,
  },
  {
    title: "When can I hear more?",
    text: "You can expect to hear more about the workshop in the coming weeks. We will send out regular updates to keep you informed about the progress and important announcements.",
    active: false,
  },
  {
    title: "Can I contact you?",
    text: "Absolutely. You can contact us for any inquiries or additional information by emailing us at hassan.djirdeh@gmail.com.",
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
            description="A 4 week, once a week, evening workshop on all things front-end engineering. By Hassan Djirdeh."
          >
            Coming Soon
          </PageHeader>

          <SubscribeForm />
        </div>
      </div>

      <div className="pt-8 pb-8 md:pb-20" id="faq">
        <div className="px-4 sm:px-6">
          <div className="max-w-xs md:max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 xl:gap-9 xl:mx-8 max-md:-mx-3">
              <div className="flex flex-col rounded-lg bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 p-5">
                <div className="grow mb-3">
                  <div className="font-inter-tight font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    A 4-week (once-a-week) workshop
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    This workshop spans over four weeks with one session each
                    week. It is designed to help you gain in-depth knowledge and
                    hands-on experience in front-end development.
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 p-5">
                <div className="grow mb-3">
                  <div className="font-inter-tight font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    Pricing Details
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    The cost for the full four-week workshop will be between
                    $199 — $299. This includes live lessons, all materials, and
                    access to exclusive resources.
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 p-5">
                <div className="grow mb-3">
                  <div className="font-inter-tight font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    Led by Hassan Djirdeh
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    Learn from Hassan Djirdeh, an expert in front-end
                    development with extensive experience in building
                    large-scale web applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 xl:gap-9 xl:mx-8 max-md:-mx-3 mt-12">
              <div className="flex flex-col rounded-lg bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 p-5">
                <div className="grow mb-3">
                  <div className="font-inter-tight font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    Join the Waitlist
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    Add your email to the waitlist to receive updates about the
                    workshop, including the start date, pricing, and other
                    important details.
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 p-5">
                <div className="grow mb-3">
                  <div className="font-inter-tight font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    Workshop Start Date
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    The workshop is expected to start in a few months. Exact
                    dates will be communicated to those who join the waitlist.
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 p-5">
                <div className="grow mb-3">
                  <div className="font-inter-tight font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    Stay Informed
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    You can expect to hear more about the workshop in the coming
                    weeks. We will send out regular updates to keep you informed
                    about the progress and important announcements.
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
