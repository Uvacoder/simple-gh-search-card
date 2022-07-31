import sprite from "~/assets/icons-sprite.svg"

export const Icon = ({ iconName }) => {
  return (
    <svg className={`icon icon-${iconName}`}>
      <use xlinkHref={`${sprite}#${iconName}`} />
    </svg>
  )
}
