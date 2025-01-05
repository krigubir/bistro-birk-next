type FilterButtonProps = {
  text: string
  isClicked: boolean
  onClick: () => void
}

export const FilterButton = ({
  text,
  isClicked,
  onClick,
}: FilterButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1 rounded-full border-2 border-black px-2 py-1 ${
        isClicked ? 'bg-primary text-white' : ''
      }`}
    >
      {text}
    </button>
  )
}
