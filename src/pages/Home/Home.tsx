import style from './stlye.module.css'

const Home = () => {
    return (
        <div className='h-[calc(100vh-70px)]'>
            <div className="h-full flex flex-col justify-center items-center">

                <h1 className="text-6xl font-bold">Your Spark to Learn Languages</h1>
                <p className={style.des}>We believe in the power of language learning as a gateway to new opportunities and global communication.
                    Through our platform, you can learn English, German, Arabic, and many other languages with interactive courses
                    led by professional trainers
                </p>



            </div>
        </div>
    )
}
export default Home