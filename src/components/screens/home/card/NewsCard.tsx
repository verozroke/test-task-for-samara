import { FC } from 'react'
import styles from './NewsCard.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { formatDate } from './../../../../helpers/formatDate';


interface NewsCardProps {
  newsItem: any
}

const fallbackImage = 'https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg'

const NewsCard: FC<NewsCardProps> = ({ newsItem }) => {
  const { webPublicationDate, webTitle, id: newsItemId, fields } = newsItem

  return <div className={styles.card}>
    <Image alt='image' width={400} height={300} src={fields ? fields.thumbnail : fallbackImage} className={styles.image}></Image>
    <div className={styles.cardtext}>
      <p className={styles.cardtime}>{formatDate(webPublicationDate)}</p>
      <h3 className={styles.cardtitle}>{webTitle}</h3>
      <div className={styles.actions}>
        <Link href={`/news/${newsItemId}`} className={styles.detailbutton}>
          Details
          <ArrowRight className={styles.arrowright} />
        </Link>
      </div>
    </div>
  </div>
}

export default NewsCard