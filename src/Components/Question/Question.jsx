import { Accordion } from "flowbite-react";

const Question = () => {
  return (
    <div id="faq" className="mt-0 mb-20 md:mt-24 md:mb-10">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white lg:text-4xl">Frequently Asked <span className="text-red-500">Questions</span></h2>
        <p className="w-auto md:w-[580px] text-center mx-auto mt-4 mb-8 text-neutral-600 dark:text-gray-600">Explore our FAQ section for quick answers to common questions about our blog. Find information on subscriptions, guest contributions, commenting, and more. Have a question? Check here first!</p>

        <Accordion collapseAll>
            <Accordion.Panel>
                <Accordion.Title className="text-black font-medium text-xl">How can I subscribe to your blog for updates?</Accordion.Title>
                <Accordion.Content>
                    <p className=" mb-2 text-neutral-600 dark:text-gray-400">You can subscribe to our blog by entering your email address in the subscription form located on the sidebar or footer of our website. You&apos;ll receive notifications whenever we publish new articles or updates.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
                <Accordion.Title className="text-black font-medium text-xl">Are comments allowed on your blog posts</Accordion.Title>
                <Accordion.Content>
                    <p className=" mb-2 text-neutral-600 dark:text-gray-400">Yes, we welcome comments on our blog posts. We believe in fostering an open and engaging community where readers can share their thoughts, ask questions, and interact with each other. Simply scroll to the bottom of any blog post to leave a comment.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
                <Accordion.Title className="text-black font-medium text-xl">Can I contribute content to your blog as a guest writer</Accordion.Title>
                <Accordion.Content>
                    <p className=" mb-2 text-neutral-600 dark:text-gray-400">Absolutely! We&apos;re always looking for talented guest writers to contribute high-quality content to our blog. Please visit our &apos;Add Blog&apos; page for guidelines on guest posting and information on how to submit your article.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
                <Accordion.Title className="text-black font-medium text-xl">Do you have a specific posting schedule for your blog?</Accordion.Title>
                <Accordion.Content>
                    <p className=" mb-2 text-neutral-600 dark:text-gray-400">While we strive to publish new content regularly, our posting schedule may vary depending on the availability of our writers and the complexity of the topics we cover. However, you can expect new articles to be published at least [frequency] times per week.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
                <Accordion.Title className="text-black font-medium text-xl">How do you choose the topics for your blog posts?</Accordion.Title>
                <Accordion.Content>
                    <p className=" mb-2 text-neutral-600 dark:text-gray-400">We carefully curate our blog topics based on relevance, audience interest, and industry trends. Our goal is to provide valuable and informative content that addresses the needs and interests of our readers. If you have a suggestion for a topic you&apos;d like to see covered, feel free to reach out to us!
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    </div>
  );
};

export default Question;
