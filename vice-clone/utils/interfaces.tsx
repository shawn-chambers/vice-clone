export interface MenuProps {
  menu: boolean
  displayMenu: (value: boolean | ((prevState: boolean) => boolean)) => void;
}

export interface MainArticle {
    category: string
    teaser: string
    quote: string
    author: string
    url: string
    data: string
}

export interface MainArticleProps {
  mainArticle: MainArticle
}

export interface CircleProps {
  text: string
  arc: number
  radius: number
}