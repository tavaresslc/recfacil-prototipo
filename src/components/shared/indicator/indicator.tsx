import { FIELD_LABELS } from "@/constants/fields";
import type { FieldName } from "@/types/user";
import { AlertTriangle, ArrowDown, ArrowUp, Check } from "lucide-react";

const COLORS = {
  error: {
    base: "bg-red-600",
    hover: "hover:bg-red-700",
  },
  warning: {
    base: "bg-yellow-600",
    hover: "hover:bg-yellow-700",
  },
  info: {
    base: "bg-blue-600",
    hover: "hover:bg-blue-700",
  },
  success: {
    base: "bg-green-600",
    hover: "hover:bg-green-700",
  },
} as const;

export function Indicator({
  direction,
  field,
  message,
  onClick,
  type,
}: {
  direction: "up" | "down";
  field?: FieldName;
  message?: string | null;
  onClick?: () => void;
  type: "error" | "warning" | "info" | "success";
}) {
  let Icon = direction === "up" ? ArrowUp : ArrowDown;

  if (type === "warning") {
    Icon = AlertTriangle;
  } else if (type === "success") {
    Icon = Check;
  }

  const clickable = !!onClick;
  const colors = COLORS[type];

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!clickable}
      tabIndex={clickable ? 0 : -1}
      aria-live="polite"
      className={`absolute left-1/2 z-20 -translate-x-1/2 flex max-w-9/10 items-center justify-center gap-2 rounded-full px-4 py-3 text-xs font-medium text-white shadow-lg transition-colors animate-in fade-in duration-200 disabled:opacity-100 ${
        colors.base
      } ${clickable ? `cursor-pointer ${colors.hover}` : "cursor-default"} ${
        direction === "up"
          ? "top-3 slide-in-from-top-2"
          : "bottom-3 slide-in-from-bottom-2"
      }`}
    >
      <Icon className="size-4 shrink-0 animate-bounce -mb-0.5" />
      {type === "error" && field ? (
        <span className="truncate">
          Erro em <strong>{FIELD_LABELS[field]}</strong>
          {message ? ` - ${message}` : ""}
        </span>
      ) : (
        <span className="truncate">{message ? message : ""}</span>
      )}
    </button>
  );
}
