import zxc from './styles.module.scss'

export function Slide({slideTxt, slideUrl}: {slideTxt: string, slideUrl: string}) {
    const isVideo = /\.(mp4|mov|avi|wmv|mkv)$/i.test(slideUrl);
    return (
        <div className={zxc.slide}>
            {slideTxt && <div className={zxc.contentInscription}>
                <p>{slideTxt}</p>
            </div>}
            <div className={zxc.contentVisual}>
                {isVideo ? (<video src={slideUrl} autoPlay muted loop playsInline disablePictureInPicture draggable='false' />) : (
                    <img src={slideUrl} alt="SLIDE CONTENT" draggable='false' />
                )}
            </div>
        </div>
    )
}