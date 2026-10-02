const isExternal = (href) => /^https?:/.test(href) || /\.pdf$/.test(href)

export default function Button({ href, variant = 'primary', arrow, children, ...rest }) {
  const external = isExternal(href)
  return (
    <a className={`btn btn--${variant}`} href={href} {...(external && { target: '_blank', rel: 'noreferrer' })} {...rest}>
      {children}
      {arrow && <span className="btn-arrow" aria-hidden="true">{arrow}</span>}
    </a>
  )
}
