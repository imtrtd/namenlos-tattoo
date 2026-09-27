import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "ru" | "en" | "de" | "uk";
export const LANGS: { id: Lang; label: string }[] = [
  { id: "en", label: "EN" },
  { id: "de", label: "DE" },
  { id: "ru", label: "RU" },
  { id: "uk", label: "UA" },
];

const KEY = "namenlos_lang";

function detectLang(): Lang {
  if (typeof window === "undefined") return "en";
  const saved = window.localStorage.getItem(KEY);
  if (saved === "ru" || saved === "en" || saved === "de" || saved === "uk") {
    return saved;
  }
  return "en";
}
