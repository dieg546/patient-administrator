import type { ReactNode } from "react"

type ErrorProps={

    children: ReactNode

}


export default function Error({children}: ErrorProps) {
  return (
    <p className=" text-center my-4 bg-red-600 text-sm uppercase font-bold text-white p-3">{children}</p>
  )
}
