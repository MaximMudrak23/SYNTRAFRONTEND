import zxc from './styles.module.scss'

export function WAreSyntraPart() {
    return (
        <div className={zxc.wAreSyntraPart}>
            <div className={zxc.title}>
                <p>We Are SYNTRA</p>
            </div>
            <div className={zxc.content}>
                <ul>
                    <li>Про SYNTRA</li>
                    <li>Вакансии</li>
                    <li>Сотрудничество</li>
                </ul>
            </div>
        </div>
    )
}