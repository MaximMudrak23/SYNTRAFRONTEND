import zxc from './styles.module.scss'

export function MainPageSubscribe() {
    return (
        <div className={zxc.subscribe}>
            <div className={zxc.title}>
                <p>ПІДПИШІТЬСЯ НА НАШУ РОЗСИЛКУ</p>
            </div>
            <div className={zxc.description}>
                <p>Дізнавайтесь першими про останні новини, про тренди, акції та багато іншого!</p>
            </div>
            <div className={zxc.button}>
                <button>Підписатись</button>
            </div>
        </div>
    )
}