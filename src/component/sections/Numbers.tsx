import Container from "../shared/Container";

export const Numbers = () => {
  return (

    // Shows number and percentage of different categories
    <section className="relative mt-12 md:mt-16">
      <Container className="flex justify-center items-center">
        <div className="mx-auto p-5 sm:p-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg border border-box-border shadow-lg shadow-box-shadow grid grid-cols-2 md:grid-cols-4 md:divide-x divide-box-border">
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              200+
            </h2>
            <p className="mt-2 text-heading-3">AI Models Implemented</p>
          </div>

          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              270+
            </h2>
            <p className="mt-2 text-heading-3">Enterprise Clients</p>
          </div>

          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              99.9%
            </h2>
            <p className="mt-2 text-heading-3">Uptime Guarantee</p>
          </div>

          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              5+
            </h2>
            <p className="mt-2 text-heading-3">Years of Innovation</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Numbers;
