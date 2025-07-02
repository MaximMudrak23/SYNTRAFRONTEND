import zxc from './styles.module.scss'
import { languageObj } from '../../other/languageData'
const selectedLanguage = 'ua';

export function Header() {
    return (
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
                    <div className={zxc.option}>
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
    )
}