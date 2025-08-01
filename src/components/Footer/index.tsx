import zxc from './styles.module.scss'
import { SupportPart } from './SupportPart'
import { ReferencePart } from './ReferencePart'
import { WAreSyntraPart } from './WAreSyntraPart'
import { YMLPart } from './YMLPart'
import { SocialPart } from './SocialPart'

// Сделать, чтобы переносилось все по очереди, сначала 1, потом второй и так по очереди, наверное это делается с помощью мин вайд, и флекс врап врап или медиа и флекс басис 100%

export function Footer() {
    return (
        <div className={zxc.footer}>
            <SupportPart />
            <ReferencePart />
            <WAreSyntraPart />
            <YMLPart />
            <SocialPart />
        </div>
    )
}