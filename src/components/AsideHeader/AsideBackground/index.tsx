import zxc from './styles.module.scss'

type AsidePanelProps = {
  isAsideOpen: boolean;
  setIsAsideOpen: (val: boolean) => void;
};

export function AsideBackground({ isAsideOpen, setIsAsideOpen }: AsidePanelProps) {
    return (
        <div className={`${zxc.asideBackground} ${isAsideOpen ? zxc.open : ''}`} onClick={()=>setIsAsideOpen(false)}></div>
    )
}