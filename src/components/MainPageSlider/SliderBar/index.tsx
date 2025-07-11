import zxc from './styles.module.scss'

export function SliderBar({
    isActive
}: {
    isActive: boolean
}) {
    return (
        <div className={zxc.bar}>
            <div className={zxc.filter}>
                <div className={`${isActive ? zxc.fill : ''}`}/>
            </div>
        </div>
    )
}