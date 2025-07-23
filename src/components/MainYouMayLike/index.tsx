import zxc from './styles.module.scss'
import { YMLHeader } from './YMLHeader'
import { YMLGoods } from './YMLGoods'

export function MainPageYouMayLike() {
    return (
        <div className={zxc.youMayLike}>
            <YMLHeader />
            <YMLGoods />
        </div>
    )
}