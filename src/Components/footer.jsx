import FacebookIcon from "../assets/Svgs/facebook.svg";
import TwitterIcon from "../assets/Svgs/twitter.svg";

export default function Footer() {

    const svgIcons = [
        { icon: FacebookIcon, label: 'go to our facebook page' },
        { icon: TwitterIcon, label: 'go to out twitter page' }
    ]

  return (
    <>
        <div className='flex items-top justify-between'>
            <div><a href="#">Privacy Policy</a></div>
            <div className='flex inline-block justify-center'>
                <div><a href="#">Terms of services</a></div>
                <div>
                   {svgIcons.map((handle, index) => (
                        <a
                            href="#"
                            key={index}
                           
                        >
                            <img
                                src={handle.icon}
                                alt={handle.label}
                                className="w-8 h-8"
                            />
                        
                        </a>
                    ))}
                </div>
                <div><a href="#">&copy; 2025 FitnessHub. All rights reserved</a></div>
            </div>
            <div><a href="#">Contact Us</a></div>
        </div>
    </>
  )
}
