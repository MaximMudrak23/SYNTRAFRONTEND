import zxc from './styles.module.scss'

type Props = {
    isLocked: boolean;
}

export function YMLCard({isLocked}: Props) {
    return (
        <div className={zxc.card}>
            <div className={zxc.cardIMG}>
                <img src={'./youMayLikeItExamples/example1.png'} alt="GOODS IMG" draggable='false' />
            </div>
            <div className={zxc.cardInfo}>
                <div className={zxc.cardInfoName}><p>Футболка з принтом і короткими рукавами</p></div>
                <div className={zxc.cardInfoPrice}><p><span>1,499</span> UAH</p></div>
            </div>
            {isLocked && <div className={zxc.cardLocked} draggable='false'></div>}
        </div>
    )
}