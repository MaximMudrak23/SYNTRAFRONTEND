import zxc from './styles.module.scss'

const items = [
    {img: '/c1.png', text: 'SUMMER VIBES'},
    {img: '/c2.png', text: 'STREETWEAR'},
    {img: '/c3.png', text: 'CASUAL'},
    {img: '/c4.png', text: 'BASIC'}
];

export function MainPageGetTheLook() {
    return (
        <div className={zxc.getTheLook}>
            <div className={zxc.description}>
                <div className={zxc.descriptionL}><p>➜ GET THE LOOK</p></div>
                <div className={zxc.descriptionR}>
                    <p>надихайся нашою галереєю, ділись своїми образами та відмічай нас в соціальних мережах із тегами <span className={zxc.tag}>@syntra</span> та <span className={zxc.tag}>#syntrafashion</span></p>
                </div>
            </div>
            <div className={zxc.looksCategories}>
                {
                    items.map((item, index) => (
                        <div
                            className={zxc.categoriesCard}
                            key={index}
                            style={{backgroundImage: `url(${item.img})`}}
                        >
                            <p>{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}