export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
  }
};


export const IMG_URL_CDN= "https://image.tmdb.org/t/p/w500"

export const IMG_BACKGROUND="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"

export const SUPPORTED_LANG =[{identifier:"en",name:"English"},{identifier:"hindi",name:"Hindi"},{identifier:"spanish",name:"Spanish"}]