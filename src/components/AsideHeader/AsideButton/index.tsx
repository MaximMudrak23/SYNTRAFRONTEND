import zxc from './styles.module.scss'

export function AsideButton({setIsAsideOpen}:{setIsAsideOpen: (val: boolean) => void}) {
    return (
        <div className={zxc.buttonAside} onClick={()=>setIsAsideOpen(true)}>
            <img src={`/svg/asideSVG.svg`} alt="ASIDE ICON" />
        </div>
    )
}