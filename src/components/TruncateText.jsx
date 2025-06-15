import { useState } from "react"

export default function TruncateText({ text, charLimit = 100 }) {
  const [expanded, setExpanded] = useState(false)
  const shouldTruncate = text.length > charLimit
  const visibleText = expanded || !shouldTruncate ? text : text.slice(0, charLimit)

  return (
    <p className="leading-6 inline">
      {visibleText}
      {shouldTruncate && !expanded && (
        <span
          onClick={() => setExpanded(true)}
          className="font-bold text-xs cursor-pointer inline"
        >
          {' '}.. Read more
        </span>
      )}
    </p>
  )
}
