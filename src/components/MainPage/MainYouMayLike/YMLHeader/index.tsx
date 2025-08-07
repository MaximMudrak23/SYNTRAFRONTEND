import zxc from './styles.module.scss'

export function YMLHeader() {
    return (
        <div className={zxc.ymlHeader}>
            <img src="./svg/arrowSVG.svg" alt="ARROW SVG" />
            <span>{`${'Багато хто купує'.toUpperCase()}`}</span>
        </div>
    )
}