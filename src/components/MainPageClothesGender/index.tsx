import zxc from './styles.module.scss'

const items = [
    {img: '/i1.png', text: 'ФУТБОЛКИ'},
    {img: '/i2.png', text: 'ДЖИНСИ'},
    {img: '/i3.png', text: 'СОРОЧКИ'},
    {img: '/i4.png', text: 'ШОРТИ'},
    {img: '/i5.png', text: 'ТРИКОТАЖ'},
    {img: '/i6.png', text: 'АКСЕСУАРИ'}
]

export function MainPageClothesGender() {
    return (
        <div className={zxc.clothesGender}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={zxc.clothesCard}
                    style={{backgroundImage: `url(${item.img})`}}
                >
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    )
}