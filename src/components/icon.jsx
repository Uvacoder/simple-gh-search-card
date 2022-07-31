import sprite from "~/assets/icons-sprite.svg"

export const Icon = props => {
  return (
    <svg className={`icon icon-${props.iconName}`}>
      <use xlinkHref={`${sprite}#${props.iconName}`} />
    </svg>
  )
}
