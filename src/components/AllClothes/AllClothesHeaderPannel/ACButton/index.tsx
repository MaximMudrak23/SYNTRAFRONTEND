import zxc from './styles.module.scss'

export function ACButton({text, isFilter = false}: {text: string, isFilter?: boolean}) {
    return (
        <button className={zxc.acButton}>
            {isFilter && <img src={'/svg/filterSVG.svg'} alt="FILTER SVG" />}
            <span>{text}</span>
        </button>
    )
}