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
      className="flex w-full py-2 text-black hover:underline"
    >
      <div className="flex gap-4">
        {link.icon && (
          <div className="flex flex-1 items-center">
            <Image
              src={`/icons/${link.icon.base}`}
              alt={link.title}
              width={25}
              height={25}
            />
          </div>
        )}

        <p className="flex-2 text-xl">{link.title}</p>
      </div>
    </Link>
  )
}
