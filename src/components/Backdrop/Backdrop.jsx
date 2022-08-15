export const Backdrop = ({open, onClick}) => {
  return (
    <div
    className={['backdrop', open ? 'open' : ''].join(' ')}
    onClick={onClick}
  />
  )
}
