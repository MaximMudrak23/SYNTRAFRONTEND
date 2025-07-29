import zxc from './styles.module.scss'

export function YMLPart() {
    return (
        <div className={zxc.ymlPart}>
            <div className={zxc.title}>
                <p>Тебя может заинтересовать</p>
            </div>
            <div className={zxc.content}>
                <ul>
                    <li>Жакети та піджаки</li>
                    <li>Сукні та комбінезони</li>
                    <li>Топи та боді</li>
                    <li>Джинси</li>
                    <li>Штани</li>
                    <li>Футболки</li>
                    <li>Світшоти</li>
                    <li>Светри та кардигани</li>
                    <li>Взуття</li>
                </ul>
            </div>
        </div>
    )
}