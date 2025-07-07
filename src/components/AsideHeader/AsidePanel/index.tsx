import zxc from './styles.module.scss'
import { languageObj } from '../../../other/languageData'
const selectedLanguage = 'ua';

export function AsidePanel({ isAsideOpen }: {isAsideOpen: boolean}) {
    return (
        <div className={`${zxc.aside} ${isAsideOpen ? zxc.open : ''}`}>
            <div className={zxc.asideTop}>
                <div className={zxc.atSyntra}>
                    <div className={zxc.atSyntraInscription}>
                        <p>SYNTRA</p>
                    </div>
                </div>
                <div className={zxc.atSearchFolder}>
                    <div className={zxc.atSearchDIV}>
                        <div className={zxc.atSearchSVG}>
                            <img src={`/svg/searchSVG.svg`} alt="SEARCH ICON" />
                        </div>
                        <div className={zxc.atSearchInscription}>
                            <p>{languageObj[selectedLanguage].searchThere}</p>
                        </div>
                    </div>
                </div>
                <div className={zxc.atSelectedOption}>
                    <div className={zxc.atOptionSVG}>
                        <img src={`/svg/manSVG.svg`} alt="MAN ICON" />
                    </div>
                    <div className={zxc.atOptionInscription}>
                        <p>{languageObj[selectedLanguage].man}</p>
                    </div>
                </div>
                <div className={zxc.atOption}>
                    <div className={zxc.atOptionSVG}>
                        <img src={`/svg/womanSVG.svg`} alt="WOMAN ICON" />
                    </div>
                    <div className={zxc.atOptionInscription}>
                        <p>{languageObj[selectedLanguage].woman}</p>
                    </div>
                </div>
                <div className={zxc.atOption}>
                    <div className={zxc.atOptionSVG}>
                        <img src={`/svg/hangerSVG.svg`} alt="HANGER ICON" />
                    </div>
                    <div className={zxc.atOptionInscription}>
                        <p>GET THE LOOK</p>
                    </div>
                </div>
            </div>

            <div className={zxc.lineBetween}></div>

            <div className={zxc.asideMiddle}>
                <div className={zxc.amSelCurrAndLang}>
                    <div className={zxc.amSelectedCurrency}>
                        <p>UAH</p>
                    </div>
                    <div className={zxc.amSelectedLanguage}>
                        <p>УКР</p>
                    </div>
                </div>
            </div>

            <div className={zxc.lineBetween}></div>
            
            <div className={zxc.asideBottom}>
                <div className={zxc.abOption}>
                    <div className={zxc.abOptionSVG}>
                        <img src={`/svg/cartSVG.svg`} alt="CART ICON" />
                    </div>
                    <div className={zxc.abOptionInscription}>
                        <p>{languageObj[selectedLanguage].cart}</p>
                    </div>
                </div>
                <div className={zxc.abOption}>
                    <div className={zxc.abOptionSVG}>
                        <img src={`/svg/userSVG.svg`} alt="CART ICON" />
                    </div>
                    <div className={zxc.abOptionInscription}>
                        <p>{languageObj[selectedLanguage].logIn}</p>
                    </div>
                </div>
                <div className={zxc.abOption}>
                    <div className={zxc.abOptionSVG}>
                        <img src={`/svg/closeSVG.svg`} alt="CART ICON" />
                    </div>
                    <div className={zxc.abOptionInscription}>
                        <p>{languageObj[selectedLanguage].closeWindow}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}