import zxc from './styles.module.scss'
import { ymlData } from '../../../other/ymlData'
const selectedLanguage = 'ua';

export function YMLHeader() {
    return (
        <header className={zxc.ymlHeader}>
            <div className={zxc.gtlArrowInscription}>
                <div className={zxc.gtlArrInsIMG}>
                    <img src="./svg/arrowSVG.svg" alt="ARROW SVG" />
                </div>
                <div className={zxc.gtlArrInsTXT}>
                    <span>{ymlData[selectedLanguage].txt}</span>
                </div>
            </div>
        </header>
    )
}