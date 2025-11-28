type ClassValue =
  | string
  | number
  | null
  | undefined
  | boolean
  | ClassValue[]
  | Record<string, boolean | undefined | null>;

const isObject = (
  value: ClassValue
): value is Record<string, boolean | undefined | null> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = [];

  const append = (value: ClassValue) => {
    if (!value && value !== 0) {
      return;
    }

    if (typeof value === "string" || typeof value === "number") {
      classes.push(String(value));
      return;
    }

    if (Array.isArray(value)) {
      value.forEach(append);
      return;
    }

    if (isObject(value)) {
      Object.entries(value).forEach(([key, condition]) => {
        if (condition) {
          classes.push(key);
        }
      });
    }
  };

  inputs.forEach(append);
  return classes.join(" ");
}

