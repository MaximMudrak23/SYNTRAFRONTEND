import zxc from './styles.module.scss'
import { rollerObj } from '../../other/rollerData'
const selectedLanguage = 'en';

export function MainPageRoller() {
    const rollerStr = rollerObj[`${selectedLanguage}`];
    return (
        <div className={zxc.roller}>
            <div className={zxc.rollerWrapper}>
                {[...rollerStr,...rollerStr].map((txt, index) => (
                    <p key={index}>{txt}</p>
                ))}
            </div>
        </div>
    )
}