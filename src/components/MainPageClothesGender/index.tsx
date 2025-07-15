import zxc from './styles.module.scss'
import { clothesManGenderData } from '../../other/clothesGenData';
const selectedLanguage = 'ua';

export function MainPageClothesGender() {
    return (
        <div className={zxc.clothesGender}>
            {clothesManGenderData[`${selectedLanguage}`].map((item, index) => (
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