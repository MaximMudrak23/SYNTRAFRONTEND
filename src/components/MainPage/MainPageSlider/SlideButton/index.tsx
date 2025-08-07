import zxc from './styles.module.scss'

export function SlideButton({
    isDurationActivated,
    setIsDurationActivated
}: {
    isDurationActivated: boolean,
    setIsDurationActivated: (value: boolean) => void
}) {
    return (
        <div className={`${zxc.slideButton} ${isDurationActivated ? '' : zxc.closed}`} onClick={() => setIsDurationActivated(!isDurationActivated)}>
            <img src={`/svg/scrollSVG.svg`} alt="SCROLL ICON" />
        </div>
    )
}