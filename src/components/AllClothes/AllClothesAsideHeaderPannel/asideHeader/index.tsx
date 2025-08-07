import zxc from './styles.module.scss'

export function AsideHeader() {
    return (
        <div className={zxc.asideHeader}>
            <div className={zxc.closeDIV}>
                <img src="/svg/closeSVG.svg" alt="CLOSE SVG" />
            </div>
            <p>Фільтрувати</p>
        </div>
    )
}