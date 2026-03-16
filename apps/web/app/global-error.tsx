"use client"

import GlobalErrorView from "@/views/screens/global-error"

type Props = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError(props: Props) {
  const { error, reset } = props
  return <GlobalErrorView error={error} reset={reset} />
}
