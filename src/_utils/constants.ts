export const VALIDATION_MSG = {
  required: (fieldName: string) => `Please enter ${fieldName}.`,
  select: (fieldName: string) => `Please select ${fieldName}.`,
};

// TODO: Remove this it's just for demo purpose
export const COLOR_OPTION: { value: string; label: string }[] = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
];
