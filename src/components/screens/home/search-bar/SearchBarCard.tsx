"use client"

import { ChangeEvent, FC, useState } from 'react'
import styles from './SearchBarCard.module.scss'
import { ArrowDownUp, LayoutTemplate, Search } from 'lucide-react'
import { useActions } from '@/hooks/useActions'
import { useSelector } from 'react-redux'

interface SearchBarCardProps {

}

export type sortBySelectOption = 'relevance' | 'newest'

const SearchBarCard: FC<SearchBarCardProps> = ({ }) => {

  const [queryInput, setQueryInput] = useState<string>('');

  // const [sortBy, setSortBy] = useState('newest');
  // const [pageSize, setPageSize] = useState(10);
  const { sortBy, perPage } = useSelector(state => state.news)
  const { search, changeSortBy, changePerPage } = useActions()

  const getResults = () => {
    search({ query: queryInput.trim(), sortBy, perPage })
  }

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    changeSortBy(event.target.value as sortBySelectOption)

    search({ query: queryInput.trim(), sortBy: event.target.value as sortBySelectOption, perPage })
  };

  const handlePageSizeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    changePerPage(event.target.value as unknown as number)
    search({ query: queryInput.trim(), sortBy, perPage: event.target.value as unknown as number })
  };

  return <div className={styles.card}>
    <div className={styles.inputrow}>
      <Search className={styles.searchicon} />
      <input value={queryInput} onChange={e => setQueryInput(e.target.value)} type="text" className={styles.searchinput} />
      <button onClick={() => getResults()} className={styles.findbutton}>Find</button>
    </div>
    <div className={styles.filterrow}>
      <ArrowDownUp className={styles.searchicon} />
      <select
        className={styles.sort}
        value={sortBy}
        onChange={e => handleSortChange(e)}
      >
        <option value="newest">Sort by Newest</option>
        <option value="relevance">Sort by Relevance</option>
      </select>
      <LayoutTemplate className={styles.searchicon} />
      <select
        className={styles.page}
        value={perPage}
        onChange={handlePageSizeChange}
      >
        {[10, 20, 30, 40, 50].map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  </div >
}

export default SearchBarCard