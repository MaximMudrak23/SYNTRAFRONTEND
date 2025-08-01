import zxc from './styles.module.scss'

export function Card({imgIndex}: {imgIndex: number}) {
    return (
        <div className={zxc.card}>
            <div className={zxc.cardIMG}>
                <img src={`./z${imgIndex+1}.png`} alt="CARD IMG" draggable='false' />
            </div>

            <div className={zxc.cardTXT}>
                <div className={zxc.name}>
                    <p>Тут типу назва товару і все таке і вона довговата</p>
                </div>
                <div className={zxc.price}>
                    <p>5,999 UAH</p>
                </div>
            </div>
        </div>
    )
}