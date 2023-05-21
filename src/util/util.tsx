export function getRndInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const ButtonTailwindCSS: string =
  "p-0.5 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-2 focus:ring-blue-400";
export const ButtonSpanTailwindCSS: string =
  "relative transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0";
