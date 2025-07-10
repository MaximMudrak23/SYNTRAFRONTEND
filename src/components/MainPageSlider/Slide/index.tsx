import zxc from './styles.module.scss'

export function Slide({slideTxt, slideContent}: {slideTxt: string, slideContent: string}) {
    const isVideo = /\.(mp4|mov|avi|wmv|mkv)$/i.test(slideContent);
    return (
        <>
            <div className={zxc.slide}>
                {slideTxt &&
                <div className={zxc.contentInscription}>
                    <p>{slideTxt}</p>
                </div>}
                <div className={zxc.contentVisual}>
                    {isVideo ? (<video src={slideContent} autoPlay muted loop playsInline disablePictureInPicture />) : (
                        <img src={slideContent} alt="SLIDE CONTENT" />
                    )}
                </div>
            </div>
        </>
    )
}