import zxc from './styles.module.scss'
import { ACButton } from './ACButton'

export function AllClothesHeaderPannel() {
    return (
        <div className={zxc.headerPannel}>
            <div className={zxc.acButtonsFolder}>
                <ACButton text='Переглянути все' />
                <ACButton text='Базові речі' />
                <ACButton text='Поло' />
                <ACButton text='Без рукавів' />
            </div>
            <div className={zxc.acButtonFilter}>
                <ACButton text='Фільтри' isFilter={true} />
            </div>
        </div>
    )
}