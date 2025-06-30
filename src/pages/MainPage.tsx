import { Header } from "../components/Header"
import { MainPageBanner } from "../components/MainPageBanner"
import { MainPageRoller } from "../components/MainPageRoller"
import { MainPageClothesGender } from "../components/MainPageClothesGender"
import { MainPageGetTheLook } from "../components/MainPageGetTheLook"
import { MainPageAdForGender } from "../components/MainPageAdForGender"
import { MainPageYouMayLike } from "../components/MainYouMayLike"
import { MainPageMusicAD } from "../components/MainPageMusicAD"
import { MainPageSubscribe } from "../components/MainPageSubscribe"
import { Footer } from "../components/Footer"

export function MainPage() {
    return (
        <>
            <div style={{display: "flex", flexDirection: "column", gap: '12px'}}>
                <Header />
                <MainPageBanner />
                <MainPageRoller />
                <MainPageClothesGender />
                <MainPageGetTheLook />
                <MainPageAdForGender />
                <MainPageYouMayLike />
                <MainPageMusicAD />
                <MainPageSubscribe />
                <Footer />
            </div>
        </>
    )
}