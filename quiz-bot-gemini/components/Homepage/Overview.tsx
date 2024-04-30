import PlaceholderVideo from "@/videos/login.mp4";
import NextVideo from "next-video";
import Image from "next/image";
import overview from "../../public/overview.png";

export default function Overview() {
  const sections = [
    {
      title: "Interactive Learning",
      description:
        "Combine learning with interactive quizzes to make education fun.",
    },
    {
      title: "Real-Time Feedback",
      description:
        "Receive immediate feedback on answers to enhance your understanding of concepts.",
    },
    {
      title: "Diverse Topics",
      description:
        "Explore and stay engaged with new quizzes on various subjects.",
    },
  ];

  return (
    <section className="py-40 px-4">
      <div className="max-w-9xl mx-auto">
        <h2 className="text-5xl font-bold mb-10 text-center">
          Your Educational Companion
        </h2>
        <div className="flex justify-center">
          {/* <NextVideo
            src={PlaceholderVideo}
            loop
            autoPlay
            muted
            className="max-w-[70vw] xl:max-w-[80vw]"
          /> */}
          <Image
            src={overview}
            alt="Quizzara's chat page overview"
            width={1500} 
            height={1000} 
            className="max-w-[70vw] xl:max-w-[80vw] border-4 border-purple-200"
          />
        </div>
        <div className="grid mt-10 md:grid-cols-3 gap-4 text-center">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-2 mt-6 text-center">
                {section.title}
              </h3>
              <p className="mt-2 text-center">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
