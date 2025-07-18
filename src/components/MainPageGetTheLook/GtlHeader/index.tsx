import zxc from './styles.module.scss'

export function GtlHeader() {
    return (
        <div className={zxc.gtlHeader}>
            <div className={zxc.gtlHeaderFirst}>
                <div className={zxc.gtlArrowInscription}>
                    <div className={zxc.gtlArrInsIMG}>
                        <img src="./svg/arrowSVG.svg" alt="ARROW SVG" />
                    </div>
                    <div className={zxc.gtlArrInsTXT}>
                        <span>GET THE LOOK</span>
                    </div>
                </div>
                <div className={zxc.gtlLittleInscription}>
                    <div className={zxc.gtlLittleInsTXT}>
                        <p>Надихайся нашою галереєю та ділись своїми образами в <br /> соціальних мережах із тегами <span>@syntra</span> та <span>#syntrastyle</span>.</p>
                    </div>
                </div>
            </div>
            <div className={zxc.gtlHeaderSecond}>
                <div className={zxc.gtlButton}>
                    <button>Переглянути усі стилі</button>
                </div>
            </div>
        </div>
    )
}