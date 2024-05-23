import "bootstrap/dist/css/bootstrap.min.css"
import BootstrapClient from "@/components/BootstrapClient";
import "./globals.css"

export const metadata = {
    title: "SMG Cloud Application",
    icon: "/favicon.ico",
}

const RootLayout = ({children}) => {
  return (
    <html lang="en" data-bs-theme="dark">
        <body>
            {children}
            <BootstrapClient/>
        </body>
    </html>
  )
}

export default RootLayout