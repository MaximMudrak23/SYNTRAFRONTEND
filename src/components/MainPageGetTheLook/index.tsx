import zxc from './styles.module.scss'
import { GtlHeader } from './GtlHeader'
import { GtlGenCategories } from './GtlGenCategories'

export function MainPageGetTheLook() {
    return (
        <div className={zxc.getTheLook}>
            <GtlHeader />
            <GtlGenCategories />
        </div>
    )
}