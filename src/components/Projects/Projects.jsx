import React , {forwardRef} from 'react'
import musicPlayer from "../../assets/projectImage/musicPlayer.png"
import portfolio from "../../assets/projectImage/portfolio.png"

const Projects = forwardRef((props,ref)=> {
    const project = [
        {
            project: "Music Player",
            projectLink: "https://music-backend-alpha.vercel.app/",
            projectImg: musicPlayer,
            techUsed:"Ejs, Tailwind Css, Nodejs, Express js, Mongodb, Multer, Cloudinary"
        },
        {
            project: "React Calculator",
            projectLink: "https://github.com/Nikhil-Jha-03/ReactCalculator",
            projectImg: musicPlayer,
            techUsed:"Tailwind Css, React Js"

        },
        {
            project: "Portfolio",
            projectLink: "Music Player",
            projectImg: portfolio,
            techUsed:"Tailwind Css, React Js"

        }
    ]
    return (
        <div ref={ref} className="flex flex-col items-center justify-center py-32 select-none transition-all duration-300 ease-in-out">
    <h2 className="poppins-bold text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
        Projects
    </h2>

    <div className="Project flex gap-4 flex-wrap items-center justify-center mt-10 transition-all duration-300 ease-in-out">
        {project.map((items, key) => (
            <a href={items.projectLink} target="_blank" key={key} 
               className="cursor-pointer max-w-xl flex flex-col gap-2 p-5 border rounded-xl border-transparent 
               bg-gradient-to-br from-gray-900 to-gray-800 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 
               hover:border-blue-500 transition-all duration-300 ease-in-out">
                <img className="w-full rounded-xl transition-all duration-300 ease-in-out" src={items.projectImg} alt="" />
                <h1 className="text-white pt-5 poppins-regular text-xl">{items.project}</h1>
                <h6 className="text-zinc-400 poppins-regular">{items.techUsed}</h6>
            </a>
        ))}
    </div>
</div>

    )
})

export default Projects;