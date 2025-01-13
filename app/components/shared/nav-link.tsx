import Link from 'next/link'
import Image from 'next/image'

type NavLinkProps = React.LinkHTMLAttributes<HTMLLinkElement> & {
  link: {
    title: string
    slug: string
    icon?: {
      base: string
      selected?: string
    }
  }
}

export const NavLink = ({ link, className, ...rest }: NavLinkProps) => {
  return (
    <Link
      href={`/recipes/${link.slug.toLowerCase()}`}
      key={link.title}
      className="text-black hover:underline"
    >
      <div className="flex gap-2">
        {link.icon && (
          <div className="flex items-center">
            <Image
              src={`/icons/${link.icon.base}`}
              alt={link.title}
              width={17}
              height={17}
              className="w-fit"
            />
          </div>
        )}

        <p>{link.title}</p>
      </div>
    </Link>
  )
}
