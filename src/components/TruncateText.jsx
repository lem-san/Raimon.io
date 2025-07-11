import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function TruncateText({ text, charLimit = 100 }) {
  const [expanded, setExpanded] = useState(false)
  const shouldTruncate = text.length > charLimit
  const visibleText = expanded || !shouldTruncate ? text : text.slice(0, charLimit)
  const { t, i18n } = useTranslation()

  return (
    <p className="leading-6 inline font-family-ibm font-light">
      {visibleText}
      {shouldTruncate && !expanded && (
        <span
          onClick={() => setExpanded(true)}
          className="font-family-ibm font-bold text-xs cursor-pointer inline dark:text-gray-100 "
        >
          {' '}{t("readMore")}
        </span>
      )}
    </p>
  )
}
