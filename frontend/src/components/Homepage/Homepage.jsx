import { Navbar } from "../Navbar/Navbar"
import video from '../../assets/video/video.mp4'

export default function Header() {
    return (
        <div className='homepage relative h-[836px] overflow-hidden w-full max-lg:h-[600px]'>
            <Navbar />
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 z-[-1]"></div>
            <video src={video} autoPlay muted loop className=" absolute top-0 z-[-2] h-full w-full left-0 top-0 object-cover bg-cover " />
        </div>
    )
}