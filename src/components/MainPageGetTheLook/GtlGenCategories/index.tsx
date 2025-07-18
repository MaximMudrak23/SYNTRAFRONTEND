import zxc from './styles.module.scss'
import { getTheLookIMG } from '../../../other/getTheLookData'

export function GtlGenCategories() {
    return (
        <div className={zxc.gtlGenCategories}>
            {
                getTheLookIMG.map((item,index) => (
                    <div
                        key={index}
                        className={zxc.item}
                        style={{backgroundImage:`url(${item.url})`}}
                    >
                        <p>{item.txt}</p>
                    </div>
                ))
            }
        </div>
    )
}