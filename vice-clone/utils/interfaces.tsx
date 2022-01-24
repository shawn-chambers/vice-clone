export interface MenuProps {
  menu: boolean
  displayMenu: (value: boolean | ((prevState: boolean) => boolean)) => void;
}

export interface MainArticle {
    category: string
    teaser: string
    quote: string
    url: string
}

export interface MainArticleProps {
  mainArticle: MainArticle
}