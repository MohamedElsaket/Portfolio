import Title from "../ui/Title";

const About = () => {
  return (
    <section
      className="about bg-slate-950 py-32 px-6 sm:px-12 lg:px-32"
      id="about"
    >
      <Title>About Me</Title>
      <div className="info grid grid-cols-6 gap-12 text-start items-center">
        <div className="image col-span-6 sm:col-span-2">
          <img
            data-aos="zoom-in"
            src="my-pic.jpg"
            className={`mb-8 rounded-full w-full mx-auto`}
          ></img>
        </div>

        <div
          data-aos="fade-up"
          className="text col-span-6 sm:col-span-4 leading-8 flex flex-col text-slate-50"
        >
          <p>
            <span className="text-yellow-300"> " </span>I am Mohamed, a
            front-end developer with expertise in ( React.js | Next.js ), and
            creating responsive, user-friendly web applications. My skills
            include state management tools like Redux, modern CSS frameworks
            such as Tailwind and Bootstrap, and a solid understanding of Git
            workflows. I am committed to writing clean, maintainable code and
            continuously enhancing my skills to contribute to impactful
            projects.
            <span className="text-yellow-300"> " </span>
          </p>
          <hr className="my-8" />
          <div className="personal-info">
            <h2 className="text-yellow-300 text-xl font-bold">
              Personal Informations:
            </h2>
            <ul>
              <li className="py-3">
                <span className="text-yellow-300 mr-2">Name:</span>Mohamed Ahmed
                Elsaket.
              </li>
              <li className="py-3">
                <span className="text-yellow-300 mr-2">Date Of Birth:</span>20
                Nov 1999.
              </li>
              <li className="py-3">
                <span className="text-yellow-300 mr-2">Address:</span>Al-Mahalla
                Al-Kubra, Gharbia, Egypt.
              </li>
              <li className="py-3">
                <span className="text-yellow-300 mr-2">Email:</span>
                mohamedelsaket25@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
