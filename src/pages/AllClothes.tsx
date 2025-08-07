import { Header } from "../components/Header"
import { AsideHeader } from "../components/AsideHeader"
import { Footer } from "../components/Footer"
import { AllClothesGoodsContainer } from "../components/AllClothes/AllClothesGoodsContainer"
import { AllClothesHeaderPannel } from "../components/AllClothes/AllClothesHeaderPannel"
import { AllClothesAsideHeaderPannel } from "../components/AllClothes/AllClothesAsideHeaderPannel"

export function AllClothes() {
    return (
        <>
            <Header />
            <AsideHeader />
            <AllClothesHeaderPannel />
            <AllClothesAsideHeaderPannel />
            <AllClothesGoodsContainer />
            <Footer />
        </>
    )
}