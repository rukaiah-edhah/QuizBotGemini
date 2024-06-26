export default function About() {
  return (
    <div className="flex-1 lg:flex lg:flex-col items-center justify-center px-6 py-14 text-center">
      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            From Students to Students: Driven by Our Passion for Education, We
            Design Customized Learning Journeys to Unlock Your Potential.
          </h1>
        </section>
        <section className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-3 text-purple-400">
              Our Vision
            </h2>
            <p className="text-lg leading-relaxed">
              Empowering learners through interactive, personalized quiz
              experiences that make education engaging and effective.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
