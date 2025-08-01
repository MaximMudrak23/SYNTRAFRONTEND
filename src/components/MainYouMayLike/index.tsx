import zxc from './styles.module.scss'
import { YMLHeader } from './YMLHeader'
import { YMLBody } from './YMLBody'

export function MainPageYouMayLike() {
    return (
        <div className={zxc.youMayLike}>
            <YMLHeader />
            <YMLBody />
        </div>
    )
}