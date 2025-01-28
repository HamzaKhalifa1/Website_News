import { TextEncoder, TextDecoder as NodeTextDecoder } from 'util';
import '@testing-library/jest-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        debug: false,
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    language: "Language",
                    homePage: "Home Page",
                    createNewBlogs: "Create new Blogs",
                    currentlyBrowsingDesign: "Currently Browsing: Design",
                    hamzaKhalifa: "Hamza Khalifa",
                    jeninHaifaStreet: "Jenin/Haifa Street",
                    title: "Title:",
                    enterTitle: "Enter title",
                    description: "Description:",
                    enterDescription: "Enter description",
                    imageUrl: "Image URL:",
                    enterImageUrl: "Enter image URL",
                    submit: "Submit",
                    titleIsRequired: "Title is required.",
                    titleMustStartWithACapitalLetterAndEnglishWords: "Title must start with a capital letter and English words.",
                    titleMustStartWithAnArabicLetter: "Title must start with an Arabic letter.",
                    titleCannotExceed50Characters: "Title cannot exceed 50 characters.",
                    descriptionIsRequired: "Description is required.",
                    descriptionCanOnlyContainEnglishLettersAndSpaces: "Description can only contain English letters and spaces.",
                    descriptionCanOnlyContainArabicLettersAndSpaces: "Description can only contain Arabic letters and spaces.",
                    descriptionCannotExceed1000Characters: "Description cannot exceed 1000 characters.",
                    pleaseEnterAValidUrl: "Please enter a valid URL."
                }
            },
            ar: {
                translation: {
                    language: "ألغة",
                    homePage: "الصفحة الرئيسية",
                    createNewBlogs: "إنشاء مدونات جديدة",
                    currentlyBrowsingDesign: "تصفح حاليًا: تصميم",
                    hamzaKhalifa: "حمزة خليفة",
                    jeninHaifaStreet: "جنين/شارع حيفا",
                    title: "العنوان:",
                    enterTitle: "أدخل العنوان",
                    description: "الوصف:",
                    enterDescription: "أدخل الوصف",
                    imageUrl: "عنوان URL للصورة:",
                    enterImageUrl: "أدخل عنوان URL للصورة",
                    submit: "إرسال",
                    titleIsRequired: "العنوان مطلوب.",
                    titleMustContainsArabicLetter: "يجب أن يحتوي العنوان على حروف عربية.",
                    titleMustStartWithACapitalLetterAndEnglishWords: "يجب أن يبدأ العنوان بحرف كبير وكلمات إنجليزية.",
                    titleCannotExceed50Characters: "لا يمكن أن يتجاوز العنوان 50 حرفًا.",
                    descriptionIsRequired: "الوصف مطلوب.",
                    descriptionCanOnlyContainEnglishLettersAndSpaces: "يمكن أن يحتوي الوصف فقط على حروف إنجليزية ومسافات.",
                    descriptionCanOnlyContainArabicLettersAndSpaces: "يمكن أن يحتوي الوصف فقط على حروف عربية ومسافات.",
                    descriptionCannotExceed1000Characters: "لا يمكن أن يتجاوز الوصف 1000 حرف.",
                    pleaseEnterAValidUrl: "الرجاء إدخال عنوان URL صحيح."
                }
            }
        }
    });

export default i18n;


const TextDecoder = NodeTextDecoder as unknown as {
    new (label?: string, options?: TextDecoderOptions): TextDecoder;
    prototype: TextDecoder;
};

if (typeof global.TextEncoder === 'undefined') {
    global.TextEncoder = TextEncoder;
}

if (typeof global.TextDecoder === 'undefined') {
    global.TextDecoder = TextDecoder;
}
