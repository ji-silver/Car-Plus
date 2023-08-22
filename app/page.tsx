
import CarCard from '@/components/CarCard'
import CustomFilter from '@/components/CustomFilter'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default async function Home() {
  const allCars = await fetchCars();

  // 배열이 아니거나, 1개보다 적거나, 값이 없을 경우
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

  console.log(allCars)
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
        {/* 데이터 여부 분기처리 */}
        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => <CarCard car={car} />)}
            </div>
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>검색 결과가 없습니다.</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  )
}
