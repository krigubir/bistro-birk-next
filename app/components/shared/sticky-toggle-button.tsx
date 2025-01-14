export const StickyToggleButton = () => {
  return (
    <div className="sticky left-0 top-[70px] z-40 flex w-full">
      <button
        type="button"
        className="flex flex-grow items-center justify-between border-b-2 border-primary bg-secondary p-2"
        onClick={handleClick}
      >
        Kategori{' '}
        <ChevronDownIcon
          title="Open category nav"
          fontSize="1.5rem"
          className={`transition-transform ${isNavOpen ? 'rotate-0 duration-500' : 'rotate-180 duration-300'}`}
        />
      </button>
    </div>
  )
}
