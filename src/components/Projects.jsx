import Title from "../ui/Title";

const Projects = () => {
    return ( 
        <div className="projects bg-slate-800 py-16">
            <Title>Featured Projects</Title>
            <ul className="flex justify-center items-center gap-8">
                <li className="text-yellow-300 font-bold">All</li>
                <li className="text-yellow-300 font-bold">Websites</li>
                <li className="text-yellow-300 font-bold">Tasks</li>
            </ul>
        </div>
     );
}
 
export default Projects;