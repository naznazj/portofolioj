import Lottie from "lottie-react";
import animationData from "../assets/about.json";

export const About = () => {
    return (
        <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 text-black flex flex-col justify-center px-4 md:px-8">
                <h1 className="text-4xl md:text-7xl text-right text-black font-serif font-extrabold mt-7">About</h1>
                <p className="text-right text-xl md:text-2xl font-serif mt-4">
                    Hi, I’m Joe Michael Tanilon, currently pursuing a Bachelor of Science in Information Technology at Cebu Eastern College. I have a strong passion for designing and building websites, and I thoroughly enjoy the creative and technical aspects involved. With a solid understanding of web development and a knack for learning quickly, I’m always eager to enhance my skills and stay up-to-date with the latest trends in the field.
                </p>
            </div>
            <div className="w-full md:w-1/2 text-white flex items-center justify-center">
                <Lottie animationData={animationData} />
            </div>
        </div>
    );
};
