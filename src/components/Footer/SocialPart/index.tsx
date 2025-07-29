import zxc from './styles.module.scss'

export function SocialPart() {
    return (
        <div className={zxc.socialPart}>
            <div className={zxc.socialItem}>
                <img src="./socialMediaSVG/instagramSVG.svg" alt=" SVG" />
            </div>
            <div className={zxc.socialItem}>
                <img src="./socialMediaSVG/facebookSVG.svg" alt=" SVG" />
            </div>
            <div className={zxc.socialItem}>
                <img src="./socialMediaSVG/twitterSVG.svg" alt=" SVG" />
            </div>
            <div className={zxc.socialItem}>
                <img src="./socialMediaSVG/tiktokSVG.svg" alt=" SVG" />
            </div>
            <div className={zxc.socialItem}>
                <img src="./socialMediaSVG/snapchatSVG.svg" alt=" SVG" />
            </div>
            <div className={zxc.socialItem}>
                <img src="./socialMediaSVG/youtubeSVG.svg" alt=" SVG" />
            </div>
            <div className={zxc.socialItem}>
                <img src="./socialMediaSVG/pinterestSVG.svg" alt=" SVG" />
            </div>
            <div className={zxc.socialItem}>
                <img src="./socialMediaSVG/spotifySVG.svg" alt=" SVG" />
            </div>
        </div>
    )
}