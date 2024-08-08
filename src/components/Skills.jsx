export const Skills = () => {
    const skills = [
        'HTML', 'CSS', 'JavaScript', 'React', 'MySQL', 'MongoDB', 'C#', 'Xamarin', 'Tailwind CSS', 'Express', 'Node.js',
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">My Skills</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className="flex items-center justify-center p-4 bg-gray-200 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out"
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
};
