import ArtInfo from "./ArtInfo";
import styles from "../../styles/article.module.scss";

import { MainArticleProps } from "../../utils/interfaces";
import ArtPic from "./ArtPic";

const Article = ({ mainArticle }: MainArticleProps) => {
  return (
    <div className={styles.article}>
      <ArtPic />
      <ArtInfo mainArticle={mainArticle} />
    </div>
  )
}

export default Article;