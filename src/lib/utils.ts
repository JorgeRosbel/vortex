import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function cls(...args: ClassValue[]) {
    return twMerge(clsx(args))
}



export function slugify(text:string) {
  return text
    .toString()                     
    .normalize('NFD')               
    .replace(/[\u0300-\u036f]/g, '') 
    .toLowerCase()                 
    .trim()                         
    .replace(/\s+/g, '-')         
    .replace(/[^\w-]+/g, '')       
    .replace(/--+/g, '-');         
}