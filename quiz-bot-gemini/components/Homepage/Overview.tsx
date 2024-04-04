export default function Overview() {
  const sections = [
    {
      title: "Educational Fun",
      description: "Combine learning with entertaining quizzes."
    },
    {
      title: "Real-Time Feedback",
      description: "Receive immediate feedback on answers to enhance your understanding of concepts."
    },
    {
      title: "Various Subjects",
      description: "Stay engaged with new quizzes on various subjects."
    }
  ];

  return (
    <section className="py-80 px-4">
      <div className="max-w-9xl mx-auto">
        <h2 className="text-5xl font-bold mb-6 text-center">
          Overview of QuizBot Gemini
        </h2>
        <div className="">{/* Placeholder for video */}</div>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
              <p>{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
