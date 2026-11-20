import { useEffect, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

function readValue<T>(
  key: string,
  fallback: T,
  isValid: (value: unknown) => value is T,
): T {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) {
      return fallback;
    }
    const parsed: unknown = JSON.parse(raw);
    return isValid(parsed) ? parsed : fallback;
  } catch {
    // повреждённый JSON или недоступный localStorage: берём значение по умолчанию
    return fallback;
  }
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  isValid: (value: unknown) => value is T,
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() =>
    readValue(key, initialValue, isValid),
  );

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // хранилище переполнено или недоступно: приложение продолжает работать без сохранения
    }
  }, [key, value]);

  return [value, setValue];
}