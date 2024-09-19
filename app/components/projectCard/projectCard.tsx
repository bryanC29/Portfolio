import Image from "next/image";

interface ProjectCardInterface {
    title: string;
    description: string;
    technologies: string;
    duration: string;
    image: string;
    altText: string;
    width: number;
    height: number;
}

const ProjectCard = ({title, description, technologies, duration, image, altText, width, height} : ProjectCardInterface) => {

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center">
            <div>
                <Image src={image} width={width} height={height} alt={altText} className="m-4 rounded-xl" />
            </div>
            <div className="flex w-full lg:w-2/3 items-start justify-center flex-col">
                <h1 className="text-2xl font-semibold">{title}</h1>
                <p className="italic my-2">Technologies Used: {technologies}</p>
                <p className="p-2">{description}</p>
                <p className="my-2">Duration: {duration}</p>
            </div>
        </div>
    )
}

export default ProjectCard;