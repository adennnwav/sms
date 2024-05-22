import GetTime from "./GetTime"
import pjson from "../../package.json"
import ColorSwitcher from "./ColorSwitcher"

const Footer = () => {
    return (
        <div className="px-3 py-2 border-top bg-dark shadow-sm mt-3">
            <div className="container-fluid text-secondary d-flex justify-content-between align-items-center"> 
                <div>    
                    <p className="lh-0 m-0 p-0 fs-7"><GetTime/>&nbsp;|&nbsp;<a href="mailto:support@societasmusic.com" className="text-secondary">Contact Support</a>&nbsp;|&nbsp;<a href="https://www.societasmusic.com/privacy-policy" target="_blank" className="text-secondary">Privacy Policy</a>&nbsp;|&nbsp;<a href="https://www.societasmusic.com/terms-of-service" target="_blank" className="text-secondary">Terms of Service</a>&nbsp;|&nbsp;<a href="#" className="text-secondary">Back to Top</a></p>
                    <p className="lh-0 m-0 p-0 fs-7">Powered by <a href="https://www.societasmusic.com" target="_blank" className="text-secondary">SMG</a>. Copyright © 2024 Societas Music Group Corporation - sms.societasmusic.com - Release: {pjson.version}. Built on 2024-05-21 with NodeJS.</p>
                </div>
                <ColorSwitcher/>
            </div>
        </div>
    )
}

export default Footer