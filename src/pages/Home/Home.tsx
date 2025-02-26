import './style.module.css'
const Home = () => {
    return (
        <div className="h-[calc(100vh-70px)] flex items-center justify-center text-center px-4 bg-gray-100">
            <div className="max-w-3xl">
                <h1 className=" md:text-5xl font-bold text-gray-900">
                    Your Spark to Learn Languages
                </h1>
                <p className="mt-4 text-base text-gray-700 leading-relaxed" >
                    We believe in the power of language learning as a gateway to new opportunities and global communication.
                    Through our platform, you can learn English, German, Arabic, and many other languages with interactive courses
                    led by professional trainers.
                </p>
                <button className="mt-6 px-7 py-3 bg-yellow-300 text-black font-semibold text-lg rounded-2xl shadow-md hover:bg-yellow-500 transition duration-300">
                    <em>Start Learning!</em>
                </button>
            </div>
        </div>
    );
};

export default Home;
