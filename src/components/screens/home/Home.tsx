"use client"

import { FC, useEffect } from 'react'
import styles from './Home.module.scss'
import SearchBarCard from './search-bar/SearchBarCard'
import NewsCard from './card/NewsCard'
import { useSelector } from 'react-redux'
import { useActions } from '@/hooks/useActions'
import { Loader2 } from 'lucide-react'

interface HomeProps {

}

const Home: FC<HomeProps> = ({ }) => {
  const { isLoading, error, news } = useSelector(state => state.news)

  const { sortBy, perPage } = useSelector(state => state.news)
  const { search } = useActions()

  useEffect(() => {
    search({ query: '', sortBy, perPage })
  }, [])

  return <div className={styles.home}>
    <SearchBarCard />
    <div className={styles.cardsrow}>
      {isLoading ? <Loader2 className={styles.loader} /> :
        (news.length > 0 ? news.map(newsItem => {
          return <NewsCard key={newsItem.id} newsItem={newsItem} />
        }) : 'No news found. Try again.')
      }

    </div>
  </div>
}

export default Home

