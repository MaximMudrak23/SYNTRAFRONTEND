import zxc from './styles.module.scss'

export function Card() {
    return (
        <div className={zxc.card}>
            <div className={zxc.cardIMG}>
                <img src="/z1.png" alt="CARD IMG" draggable={'false'} />
            </div>
            <div className={zxc.cardTXT}>
                <div className={zxc.text}>Очень длинное название, шоб аж не поместилось и пришлось несколько раз переносить Очень длинное название, шоб аж не поместилось и пришлось несколько раз переносить</div>
                <div className={zxc.price}>5,999 UAH</div>
            </div>
        </div>
    )
}