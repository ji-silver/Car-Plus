
import CustomFilter from '@/components/CustomFilter'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>차량 검색</h1>
          <p>조건에 맞는 차종을 찾아보세요</p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  )
}
