import { Header } from "../components/Header"
import { AsideHeader } from "../components/AsideHeader"
import { MainPageSlider } from "../components/MainPageSlider"
import { MainPageRoller } from "../components/MainPageRoller"
import { MainPageClothesGender } from "../components/MainPageClothesGender"
import { MainPageGetTheLook } from "../components/MainPageGetTheLook"
import { MainPagePromoForGender } from "../components/MainPagePromoForGender"
import { MainPageYouMayLike } from "../components/MainYouMayLike"
import { MainPageMusicAD } from "../components/MainPageMusicAD"
import { MainPageSubscribe } from "../components/MainPageSubscribe"
import { Footer } from "../components/Footer"

export function MainPage() {
    return (
        <>
            <Header />
            {/* <AsideHeader /> */}
            <MainPageSlider />
            <MainPageRoller />
            <MainPageClothesGender />
            <MainPagePromoForGender />
            <MainPageGetTheLook />
            <MainPageYouMayLike />
            {/* <MainPageMusicAD /> */}
            {/* <MainPageSubscribe /> */}
            <Footer />
        </>
    )
}