import Title from "../ui/Title";

const About = () => {

    return ( 
        <section className="about bg-slate-950 py-32" id="about">
            <Title>About Me</Title>
            <div className="info grid grid-cols-10 text-start items-center">
                <div className="image col-start-2 col-end-10 lg:col-start-2 lg:col-span-2">
                    <img data-aos='zoom-in' src="my-pic.jpg" className={`mb-12 rounded-full max-w-xs m-auto`}></img>
                </div>
                <div data-aos='fade-up' className="text col-start-2 col-end-10 lg:col-end-10 lg:col-span-5 leading-8 flex flex-col text-slate-50">
                    <p>
                        <span className="text-yellow-300"> " </span>I'm a software engineer with 3+ years of experience in Front-End development.
                        I have experience with modern web technologies, 
                        so I can build the required software in a professional 
                        way with clean and reusable code.<span className="text-yellow-300"> " </span>
                    </p>
                    <hr className="my-8" />
                    <div className="personal-info">
                        <h2 className="text-yellow-300 text-xl font-bold">Personal Informations:</h2>
                        <ul>
                            <li className="py-3"><span className="text-yellow-300 mr-2">Name:</span>Mohamed Ahmed Elsaket.</li>
                            <li className="py-3"><span className="text-yellow-300 mr-2">Date Of Birth:</span>20 Nov 1999.</li>
                            <li className="py-3"><span className="text-yellow-300 mr-2">Address:</span>Al-Mahalla Al-Kubra, Gharbia, Egypt.</li>
                            <li className="py-3"><span className="text-yellow-300 mr-2">Email:</span>mohamedelsaket25@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default About;