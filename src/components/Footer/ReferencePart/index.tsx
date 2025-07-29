import zxc from './styles.module.scss'

export function ReferencePart() {
    return (
        <div className={zxc.referencePart}>
            <div className={zxc.title}>
                <p>Справка</p>
            </div>
            <div className={zxc.content}>
                <ul>
                    <li>Оплата</li>
                    <li>Доставка</li>
                    <li>Возврат</li>
                    <li>Электронный чек</li>
                    <li>Подписка на рассылку</li>
                </ul>
            </div>
        </div>
    )
}