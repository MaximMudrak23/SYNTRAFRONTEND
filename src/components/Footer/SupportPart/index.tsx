import zxc from './styles.module.scss'

export function SupportPart() {
    return (
        <div className={zxc.supportPart}>
            <div className={zxc.inscription}>
                <p>Нужна помощь?</p>
            </div>
            <div className={zxc.button}>
                <button>Служба поддержки</button>
            </div>
            <div className={zxc.description}>
                <p>Задавайте вопросы ИИ помощнику, так же если будут доступны наши операторы, вы сможете с ними связаться.</p>
            </div>
        </div>
    )
}