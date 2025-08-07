import zxc from './styles.module.scss'
import { Card } from './Card'
const arr = new Array(4).fill('');

export function AllClothesGoodsContainer() {
    return (
        <div className={zxc.goodsContainer}>
            {
                arr.map((_, i) => (
                    <Card key={i} />
                ))
            }
        </div>
    )
}