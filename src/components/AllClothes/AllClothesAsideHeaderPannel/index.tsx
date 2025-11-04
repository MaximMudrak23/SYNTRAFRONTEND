import zxc from './styles.module.scss'
import { AsideHeader } from './AsideHeader'
import { AsideBody } from './AsideBody'

export function AllClothesAsideHeaderPannel() {
    return (
        <div className={zxc.asideHeaderPannel}>
            <AsideHeader />
            <AsideBody />
        </div>
    )
}