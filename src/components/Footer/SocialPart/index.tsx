import zxc from './styles.module.scss'

export function SocialPart() {
    return (
        <div className={zxc.socialPart}>
            <div className={zxc.socialItem}>
                <img src="/socialMediaSVG/instagramSVG.svg" alt="INSTAGRAM SVG" />
            </div>
            <div className={zxc.socialItem}>
                <img src="/socialMediaSVG/facebookSVG.svg" alt="FACEBOOK SVG" />
            </div>
            <div className={zxc.socialItem}>
                <img src="/socialMediaSVG/twitterSVG.svg" alt="TWITTER SVG" />
            </div>
            <div className={zxc.socialItem}>
                <img src="/socialMediaSVG/tiktokSVG.svg" alt="TIKTOK SVG" />
            </div>
            <div className={zxc.socialItem}>
                <img src="/socialMediaSVG/snapchatSVG.svg" alt="SNAPCHAT SVG" />
            </div>
            <div className={zxc.socialItem}>
                <img src="/socialMediaSVG/youtubeSVG.svg" alt="YOUTUBE SVG" />
            </div>
            <div className={zxc.socialItem}>
                <img src="/socialMediaSVG/pinterestSVG.svg" alt="PINTEREST SVG" />
            </div>
            <div className={zxc.socialItem}>
                <img src="/socialMediaSVG/spotifySVG.svg" alt="SPOTIFY SVG" />
            </div>
        </div>
    )
}