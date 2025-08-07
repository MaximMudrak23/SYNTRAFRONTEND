import zxc from './styles.module.scss'
import { AsideHeader } from './asideHeader'
import { AsideBody } from './asideBody'

export function AllClothesAsideHeaderPannel() {
    return (
        <div className={zxc.asideHeaderPannel}>
            <AsideHeader />
            <AsideBody />
        </div>
    )
}