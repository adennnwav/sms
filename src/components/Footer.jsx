import GetTime from "./GetTime"
import pjson from "../../package.json"

const Footer = () => {
    return (
        <div class="px-3 py-2 border-top bg-dark shadow-sm mt-3">
            <div class="container-fluid text-secondary">  
                <p class="lh-0 m-0 p-0 fs-7"><GetTime/>&nbsp;|&nbsp;<a href="mailto:support@societasmusic.com" class="text-secondary">Contact Support</a>&nbsp;|&nbsp;<a href="https://www.societasmusic.com/privacy-policy" target="_blank" class="text-secondary">Privacy Policy</a>&nbsp;|&nbsp;<a href="https://www.societasmusic.com/terms-of-service" target="_blank" class="text-secondary">Terms of Service</a>&nbsp;|&nbsp;<a href="#" class="text-secondary">Back to Top</a></p>
                <p class="lh-0 m-0 p-0 fs-7">Powered by <a href="https://www.societasmusic.com" target="_blank" class="text-secondary">SMG</a>. Copyright © 2024 Societas Music Group Corporation - sms.societasmusic.com - Release: {pjson.version}. Built on 2024-05-21 with NodeJS.</p>
            </div>
        </div>
    )
}

export default Footer