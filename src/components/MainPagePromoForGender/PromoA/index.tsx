import zxc from './styles.module.scss'
import { Inscription } from './Inscription';
import { Button } from './Button';
const imgURL = './promoGender/man/promo.png';

export function PromoA() {
    return (
        <div
            className={zxc.promoA}
            style={{backgroundImage:`url(${imgURL})`}}
        >
            <div className={zxc.contentWrapper}>
                <Inscription />
                <Button />
            </div>
        </div>
    )
}