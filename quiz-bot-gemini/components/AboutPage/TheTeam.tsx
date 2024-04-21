"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Team() {
  const teamMembers = [
    {
      name: "Shaad",
      role: "Full Stack Developer",
      imageUrl: "/team/shaad.png",
      linkedInUrl: "https://www.linkedin.com/in/rleehue-joseph/",
    },
    {
      name: "Rukaiah",
      role: "Full Stack, PM",
      imageUrl: "/team/rukaiah.png",
      linkedInUrl: "https://www.linkedin.com/in/rukaiah-edhah",
    },
    {
      name: "Bethvour",
      role: "Backend Developer",
      imageUrl: "/team/bethvour.png",
      linkedInUrl: "https://www.linkedin.com/in/bethvour-chike/",
    },
    {
      name: "Andrew",
      role: "Frontend Developer",
      imageUrl: "/team/andrew.png",
      linkedInUrl: "https://www.linkedin.com/in/andrew-may-36047atq/",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <main className="container mx-auto">
        <section className="text-center mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-purple-800 p-6 rounded-lg">
                <Link
                  href={member.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div whileHover={{ scale: 1.08 }}>
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="rounded-full mb-4 object-cover"
                      priority={true}
                    />
                  </motion.div>
                </Link>
                <h3 className="text-2xl font-semibold">{member.name}</h3>
                <p className="text-md mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
