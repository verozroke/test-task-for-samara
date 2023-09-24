import { sortBySelectOption } from '@/components/screens/home/search-bar/SearchBarCard'
import axios from 'axios'

export const newsServices = {
  async search({ query, sortBy, perPage }: {
    query: string, sortBy: sortBySelectOption, perPage: number
  }) {
    const { data } = await axios.get(`https://content.guardianapis.com/search?q=${query}&show-fields=thumbnail&order-by=${sortBy}&page-size=${perPage}&api-key=${process.env.NEXT_PUBLIC_GUARDIAN_API_KEY}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return data
  },
  async getNewsData(newsId: string) {
    const { data } = await axios.get(`https://content.guardianapis.com/${newsId}?api-key=${process.env.NEXT_PUBLIC_GUARDIAN_API_KEY}&show-fields=thumbnail,body,trailText,headline`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return data.response
  }
}