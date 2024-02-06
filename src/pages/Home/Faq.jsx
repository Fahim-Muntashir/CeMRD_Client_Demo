import CommonHeading from "../../components/Shared/CommonHeading";
import Container from "../../components/Shared/Container";

const Faq = () => {
  return (
    <Container>
      <div>
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
            <CommonHeading
              title={"Frequently Asked Questions"}
              description={
                "Explore quick and clear answers to commonly asked questions across diverse topics. Simplify your quest for information with our concise and informative Frequently Asked Questions section."
              }
            ></CommonHeading>
            <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-700">
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  What is the mission of the Center for Multidisciplinary
                  Research and Development (CeMRD)?
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    The mission of CeMRD is to propel innovation and advance
                    knowledge across various fields. Founded by Mr. Mahmudul
                    Hasan, the organization is committed to solving complex
                    problems, fostering collaboration, and contributing valuable
                    insights that drive societal progress.
                  </p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  How does CeMRD contribute to the global scientific community?
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    CeMRD actively contributes to the global scientific
                    community by engaging in cutting-edge exploration,
                    multidisciplinary collaboration, and rigorous methodologies.
                    The organization aims to address pressing challenges, foster
                    scientific breakthroughs, and enhance global understanding.
                  </p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  What are some key focus areas of CeMRD's research initiatives?
                </summary>
                <div className="px-4 pb-4 space-y-2">
                  <p>
                    CeMRD focuses on various research initiatives aimed at
                    advancing knowledge and innovation. Some key areas include
                    collaborative exploration, transformative research, and
                    making a positive impact on society through groundbreaking
                    discoveries.
                  </p>
                  <p>
                    The organization actively collaborates with the Ministry of
                    Science and Technology, Bangladesh, and Team Big Data on
                    projects such as predicting carbon emissions and deep
                    learning-based foreign currency exchange rate prediction.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default Faq;
