import { Poppins ,Tac_One} from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const strasua = Tac_One({
  weight:'400',
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Tac_One",
});
