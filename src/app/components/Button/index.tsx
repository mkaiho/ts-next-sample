import { FC, MouseEvent, ReactNode } from "react"

interface Props {
  children?: ReactNode
  type?: "button" | "reset" | "submit"
  onClick?: (
    event?: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => void
}

const Button: FC<Props> = ({ children, type, onClick }: Props) => {
  const handleClick = (
    event?: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    if (onClick) {
      onClick(event)
    }
  }

  return (
    <>
      <button
        className="rounded-sm bg-blue-500 px-4 py-2 text-white"
        type={type}
        onClick={(e) => handleClick(e)}
      >
        {children}
      </button>
    </>
  )
}

export default Button
