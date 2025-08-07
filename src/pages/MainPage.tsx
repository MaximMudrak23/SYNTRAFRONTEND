import { Header } from "../components/Header"
import { AsideHeader } from "../components/AsideHeader"
import { MainPageSlider } from "../components/MainPage/MainPageSlider"
import { MainPageRoller } from "../components/MainPage/MainPageRoller"
import { MainPageClothesGender } from "../components/MainPage/MainPageClothesGender"
import { MainPageGetTheLook } from "../components/MainPage/MainPageGetTheLook"
import { MainPagePromoForGender } from "../components/MainPage/MainPagePromoForGender"
import { MainPageYouMayLike } from "../components/MainPage/MainYouMayLike"
import { MainPageMusicAD } from "../components/MainPage/MainPageMusicAD"
import { MainPageSubscribe } from "../components/MainPage/MainPageSubscribe"
import { Footer } from "../components/Footer"

export function MainPage() {
    return (
        <>
            <Header />
            <AsideHeader />
            <MainPageSlider />
            <MainPageRoller />
            <MainPageClothesGender />
            <MainPagePromoForGender />
            {/* <MainPageClothesRoller /> як з обувью робив */}
            <MainPageGetTheLook />
            <MainPageYouMayLike />
            <MainPageMusicAD />
            <MainPageSubscribe />
            <Footer />
        </>
    )
}