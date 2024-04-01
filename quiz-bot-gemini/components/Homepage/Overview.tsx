export default function Overview() {
  return (
    <section className="bg-black text-white py-80 px-4">
      <div className="max-w-9xl mx-auto">
        <h2 className="text-5xl font-bold mb-6 text-center">
          Overview of QuizBot Gemini
        </h2>
        <div className="">{/* Placeholder for video */}</div>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Educational Fun</h3>
            <p>Combine learning with entertaining quizzes.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Real-Time Feedback</h3>
            <p>
              Receive immediate feedback on answers to enhance your
              understanding of concepts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Various Subjects</h3>
            <p>Stay engaged with new quizzes on various subjects.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
