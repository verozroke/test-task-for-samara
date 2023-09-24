import { newsServices } from '@/services/news.service'
import { FC } from 'react'
import style from './newsPage.module.scss'
import './text.scss'
import { formatDate } from '@/helpers/formatDate'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, Newspaper } from 'lucide-react'
interface pageProps {
  params: {
    slug: string[]
  }
}

function createMarkup(c: string) {
  return { __html: c };
}

const page: FC<pageProps> = async ({ params }) => {
  const newsId = params.slug.join('/')

  const { content } = await newsServices.getNewsData(newsId)



  return <div className={style.newspage}>
    <div className={style.linkrow}>
      <Link href='/' className={style.back}>
        <ChevronLeft className={style.left} />
        Back
      </Link>
    </div>
    <div className={style.card}>
      <h1 className={style.title}>{content.webTitle}</h1>
      <div className={style.subtitle}>
        <p>{formatDate(content.webPublicationDate)}</p>
        <a href={content.webUrl}> <Newspaper className={style.left} /> Read on Guardian</a>
      </div>

      <Image width={800} height={300} className={style.image} src={content.fields.thumbnail} alt='Image'></Image>
      <h2 className={style.headline}>{content.fields.headline}</h2>

      <div dangerouslySetInnerHTML={createMarkup(content.fields.body)}>
      </div>
      <cite>{content.fields.trailText}</cite>
    </div>
  </div>
}

export default page