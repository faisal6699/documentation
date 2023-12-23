import '@/styles/globals.css'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import TopBar from "@/components/Topbar";
import NavigationWrapper from "@/components/NavigationWrapper";

export default function MyApp({ Component, pageProps}) {
    return (
        <div className={'bg-gray-100 h-screen '}>
            <TopBar />
            <div className={'grid grid-cols-4 gap-4 p-4'}>
                <div>
                    <NavigationWrapper />
                </div>
                <div className={'col-span-3'}>
                    <Component {...pageProps} />
                </div>
            </div>
        </div>

    )
}