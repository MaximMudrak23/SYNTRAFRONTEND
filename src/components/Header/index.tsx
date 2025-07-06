import zxc from './styles.module.scss'
import zxc1 from './aside.module.scss'
import { languageObj } from '../../other/languageData'
const selectedLanguage = 'ua';

export function Header() {
    return (
        <>
            <div className={zxc.header}>
                <div className={zxc.headerLeft}>
                    <div className={zxc.headerLeftS1}>
                        <div className={zxc.syntraInscription}>
                            <p>SYNTRA</p>
                        </div>
                    </div>
                    <div className={zxc.headerLeftS2}>
                        <div className={zxc.selectedOption}>
                            <p>{languageObj[selectedLanguage].man}</p>
                        </div>
                        <div className={zxc.option}>
                            <p>{languageObj[selectedLanguage].woman}</p>
                        </div>
                        <div className={zxc.option} style={{minWidth: '110px'}}>
                            <p>GET THE LOOK</p>
                        </div>
                    </div>
                    <div className={zxc.headerLeftS3}>
                        <div className={zxc.searchFolder}>
                            <div className={zxc.searchFolderSVG}>
                                <img src={`/svg/searchSVG.svg`} alt="SEARCH ICON" />
                            </div>
                            <div className={zxc.searchFolderInput}>
                                <p>{languageObj[selectedLanguage].searchThere}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={zxc.headerRight}>
                    <div className={zxc.headerRightS1}>
                        <div className={zxc.selectedCurrency}>
                            <p>UAH</p>
                        </div>
                        <div className={zxc.selectedLanguage}>
                            <p>УКР</p>
                        </div>
                    </div>
                    <div className={zxc.headerRightS2}>
                        <div className={zxc.logIn}>
                            <div className={zxc.logInIcon}>
                                <img src={`/svg/userSVG.svg`} alt="USER ICON" />
                            </div>
                            <div className={zxc.logInInscription}>
                                <p>{languageObj[selectedLanguage].logIn}</p>
                            </div>
                        </div>
                        <div className={zxc.cart}>
                            <div className={zxc.cartIcon}>
                                <img src={`/svg/cartSVG.svg`} alt="CART ICON" />
                            </div>
                            <div className={zxc.cartInscription}>
                                <p>{languageObj[selectedLanguage].cart}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={zxc1.buttonAside}>
                <img src={`/svg/asideSVG.svg`} alt="ASIDE ICON" />
            </div>
            <div className={zxc1.asideBackground}>
                <div className={zxc1.aside}>
                    <div className={zxc1.asideTop}>
                        <div className={zxc1.atSyntra}>
                            <div className={zxc1.atSyntraInscription}>
                                <p>SYNTRA</p>
                            </div>
                        </div>
                        <div className={zxc1.atSearchFolder}>
                            <div className={zxc1.atSearchDIV}>
                                <div className={zxc1.atSearchSVG}>
                                    <img src={`/svg/searchSVG.svg`} alt="SEARCH ICON" />
                                </div>
                                <div className={zxc1.atSearchInscription}>
                                    <p>{languageObj[selectedLanguage].searchThere}</p>
                                </div>
                            </div>
                        </div>
                        <div className={zxc1.atSelectedOption}>
                            <div className={zxc1.atOptionSVG}>
                                <img src={`/svg/manSVG.svg`} alt="MAN ICON" />
                            </div>
                            <div className={zxc1.atOptionInscription}>
                                <p>{languageObj[selectedLanguage].man}</p>
                            </div>
                        </div>
                        <div className={zxc1.atOption}>
                            <div className={zxc1.atOptionSVG}>
                                <img src={`/svg/womanSVG.svg`} alt="WOMAN ICON" />
                            </div>
                            <div className={zxc1.atOptionInscription}>
                                <p>{languageObj[selectedLanguage].woman}</p>
                            </div>
                        </div>
                        <div className={zxc1.atOption}>
                            <div className={zxc1.atOptionSVG}>
                                <img src={`/svg/hangerSVG.svg`} alt="HANGER ICON" />
                            </div>
                            <div className={zxc1.atOptionInscription}>
                                <p>GET THE LOOK</p>
                            </div>
                        </div>
                    </div>
                    <div className={zxc1.lineBetween}></div>
                    <div className={zxc1.asideMiddle}>
                        <div className={zxc1.amSelCurrAndLang}>
                            <div className={zxc1.amSelectedCurrency}>
                                <p>UAH</p>
                            </div>
                            <div className={zxc1.amSelectedLanguage}>
                                <p>УКР</p>
                            </div>
                        </div>
                    </div>
                    <div className={zxc1.lineBetween}></div>
                    <div className={zxc1.asideBottom}>
                        <div className={zxc1.abOption}>
                            <div className={zxc1.abOptionSVG}>
                                <img src={`/svg/cartSVG.svg`} alt="CART ICON" />
                            </div>
                            <div className={zxc1.abOptionInscription}>
                                <p>{languageObj[selectedLanguage].cart}</p>
                            </div>
                        </div>
                        <div className={zxc1.abOption}>
                            <div className={zxc1.abOptionSVG}>
                                <img src={`/svg/userSVG.svg`} alt="CART ICON" />
                            </div>
                            <div className={zxc1.abOptionInscription}>
                                <p>{languageObj[selectedLanguage].logIn}</p>
                            </div>
                        </div>
                        <div className={zxc1.abOptionMedia}>
                            <div className={zxc1.abOptionSVG}>
                                <img src={`/svg/closeSVG.svg`} alt="CART ICON" />
                            </div>
                            <div className={zxc1.abOptionInscription}>
                                <p>{languageObj[selectedLanguage].closeWindow}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}