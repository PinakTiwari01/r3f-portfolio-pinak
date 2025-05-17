import { ValidationError, useForm } from "@formspree/react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import { ref, push } from "firebase/database";
import { database } from "./firebase"; // Adjust the path as needed
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa"; // Import icons from react-icons



const Section = (props) => {
  const { children, mobileTop } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start
  ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;
  return (
    <Section mobileTop>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-snug mt-8 md:mt-0">
        Hi, I'm
        <br />
        <span className="bg-white px-1 italic">Pinak Tiwari</span>
      </h1>
      <motion.p
  className="text-lg text-black font-bold mt-4 max-w-2xl"
  initial={{
    opacity: 0,
    y: 25,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 1,
    delay: 1.5,
  }}
>
  Hi, I'm Pinak Tiwari. I'm a Data Analyst, AI/ML enthusiast  
  <br />
  and Web/App Developer. Focused on solving real-world  
  <br />
  challenges with data and intelligent algorithms. 
  <br />
  Let’s connect and explore how we can collaborate!
</motion.p>
      <div className="flex space-x-4 mt-4">
        <a href="www.linkedin.com/in/pinak-tiwari-8600922aa" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} className="text-indigo-600 hover:text-indigo-800" />
        </a>
        <a href="pinakofficial44@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={30} className="text-indigo-600 hover:text-indigo-800" />
        </a>
        <a href="https://www.instagram.com/pinak_12" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} className="text-indigo-600 hover:text-indigo-800" />
        </a>
      </div>
      <motion.button
        onClick={() => setSection(3)}
        className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-4 md:mt-16"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Contact me
      </motion.button>
    </Section>
  );
};


const skills = [
  {
    title: "Nextjs",
    level: 90,
  },
  {
    title: "React Native",
    level: 90,
  },
  {
    title: "HTML-CSS-JS",
    level: 90,
  },
  {
    title: "Appwrite",
    level: 60,
  },
  {
    title: "FireBase",
    level: 80,
  },
  {
    title: "Power-BI",
    level: 95,
  },
  {
    title: "AI/ML",
    level: 85,
  },
  {
    title: "Streamlit",
    level: 60,
  },
  
];
const languages = [
  {
    title: "Python",
    level: 100,
  },
  {
    title: "JavaScript",
    level: 80,
  },
  // {
  //   title: "",
  //   level: 20,
  // },
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div className="w-full" whileInView={"visible"}>
        <h2 className="text-3xl md:text-5xl font-bold text-white">Skills</h2>
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-full md:w-64" key={index}>
              <motion.h3
                className="text-lg md:text-xl font-bold text-gray-100"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mt-10 text-white">
            Languages
          </h2>
          <div className="mt-8 space-y-4">
            {languages.map((lng, index) => (
              <div className="w-full md:w-64" key={index}>
                <motion.h3
                  className="text-lg md:text-xl font-bold text-gray-100"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                >
                  {lng.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full "
                    style={{ width: `${lng.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex w-full h-full gap-8 items-center justify-center">
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-3xl md:text-5xl font-bold">Projects</h2>
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
    </Section>
  );
};

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mayzgjbd");

  // Handle Firebase submit logic
  const handleFirebaseSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const data = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
      timestamp: new Date().toISOString(),
    };

    // Send data to Firebase Realtime Database
    try {
      await push(ref(database, "contacts"), data);
      console.log("Message submitted to Firebase");
    } catch (error) {
      console.error("Error submitting to Firebase:", error);
    }

    // Call Formspree submit after Firebase submit
    handleSubmit(e);
  };

  return (
    <Section>
      <h2 className="text-3xl md:text-5xl font-bold">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-white bg-opacity-50 w-96 max-w-full">
        {state.succeeded ? (
          <p className="text-gray-900 text-center">Thanks for your message!</p>
        ) : (
          <form onSubmit={handleFirebaseSubmit}>
            <label htmlFor="name" className="font-medium text-gray-900 block mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <label htmlFor="email" className="font-medium text-gray-900 block mb-1 mt-8">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="message" className="font-medium text-gray-900 block mb-1 mt-8">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError className="mt-1 text-red-500" errors={state.errors} />
            <button
              disabled={state.submitting}
              className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </Section>
  );
};