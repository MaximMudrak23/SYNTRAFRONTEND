import zxc from './styles.module.scss'
import { SupportPart } from './SupportPart'
import { ReferencePart } from './ReferencePart'
import { WAreSyntraPart } from './WAreSyntraPart'
import { YMLPart } from './YMLPart'
import { SocialPart } from './SocialPart'

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