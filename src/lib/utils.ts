import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const validateString = (value: unknown, maxLength: number) => {
  if(!value || typeof value !== 'string') {
    return false;
  }
  if(value.length > maxLength) {
    return false;
  }
  return true;
}