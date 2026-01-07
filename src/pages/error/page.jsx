import ContentImage1 from "../../assets/images/imgc4.jpg";

export default function Error() {
    return(
        <>
        <div className="bg-[#ded6c9] w-screen h-screen flex flex-col items-center justify-center">
            <img src={ContentImage1} alt="error" />
            <p className="text-xl text-black font-medium font-display">No Page Found. Explore <a href="/" className="underline">Home</a></p>
        </div>
        </>
    )
}