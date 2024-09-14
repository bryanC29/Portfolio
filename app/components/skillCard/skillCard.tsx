import Image from "next/image"

interface SkillCardProps {
    url: string,
    altText: string,
    width: number,
    height: number,
    body: string,
}

const SkillCard = ({url, altText, width, height, body}: SkillCardProps) => {
    return (
        <div className="bg-gray-800 text-white p-6 rounded-md hover:bg-yellow-300 hover:text-black hover:scale-110 transition-all m-4">
            <Image src={url} alt={altText} width={width} height={width} quality={100} className="text-center mx-auto w-1/2 bg-white p-2 rounded-lg mb-4" />
            <p className="text-center">{body}</p>
        </div>
    )
}

export default SkillCard;