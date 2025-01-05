import { CaretDownFillIcon, CaretRightIcon } from '@navikt/aksel-icons'

type DropdownButtonProps = {
  text: string
  isOpen: boolean
  onClick: () => void
}

export const DropdownButton = ({
  text,
  isOpen,
  onClick,
}: DropdownButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between gap-2 rounded-full border-2 border-black px-2 py-1 ${
        isOpen ? 'bg-primary text-white' : ''
      }`}
    >
      {text}
      {isOpen ? <CaretDownFillIcon /> : <CaretRightIcon />}
    </button>
  )
}
