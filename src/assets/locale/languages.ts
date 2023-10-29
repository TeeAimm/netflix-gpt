import { bengali } from "./bengali";
import { english } from "./en";
import { hindi } from "./hindi";

type LanguageObject = {
    [key: string]: any;
};

const languages: LanguageObject = {
    en: english,
    bengali: bengali,
    hindi: hindi,
};

export default languages;
