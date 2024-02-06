import Container from "../../components/Shared/Container";

const States = () => {
  return (
    <Container>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leadi lg:text-6xl">50+</p>
            <p className="text-sm sm:text-base">Clients</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leadi lg:text-6xl">89K</p>
            <p className="text-sm sm:text-base">Followers on social media</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leadi lg:text-6xl">3</p>
            <p className="text-sm sm:text-base">Published books</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leadi lg:text-6xl">8</p>
            <p className="text-sm sm:text-base">TED talks</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leadi lg:text-6xl">22</p>
            <p className="text-sm sm:text-base">Years of experience</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leadi lg:text-6xl">10+</p>
            <p className="text-sm sm:text-base">Workshops</p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default States;
