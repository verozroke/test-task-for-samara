import Home from "@/components/screens/home/Home";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home page',
  description: 'Search your news and will show your results',
}


export default function HomePage() {
  return <Home />
}
