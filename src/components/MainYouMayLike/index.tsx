import zxc from './styles.module.scss'

const items = [
    {img: '/g1.png', text: 'Футболка1 мішкувата чи ні я хз', price: '300 UAH'},
    {img: '/g2.png', text: 'Футболка2 мішкувата чи ні я хз', price: '200 UAH'}
]

export function MainPageYouMayLike() {
    return (
        <div className={zxc.youMayLike}>
            <div className={zxc.description}>
                <p>➜ ТОБІ МОЖЕ СПОДОБАТИСЬ</p>
            </div>
            <div className={zxc.cardsContainer}>
                {
                    items.map((item, index) => (
                        <div
                            className={zxc.card}
                            key={index}
                            style={{backgroundImage: `url(${item.img})`}}
                        ></div>
                    ))
                }
            </div>
        </div>
    )
}