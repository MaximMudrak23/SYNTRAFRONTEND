import zxc from './styles.module.scss'

type Props = {
    imgIndex: number;
}

export function Card({imgIndex}: Props) {
    return (
        <div className={zxc.card}>
            {/* <div className={zxc.locked}></div> */}
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