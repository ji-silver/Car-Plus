"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import SearchManufacturer from "./SearchManufacturer"
import { RiCarFill } from 'react-icons/ri'
import { BiSearch } from 'react-icons/bi'

// 컴포넌트 따로 생성 안 하고 바로 함수로 JSX 생성
const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type="submit" className={`ml-3 z-10 ${otherClasses} w-5 h-5`}>
        <BiSearch className="w-full h-full" />
    </button>
)

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('')
    const [model, setModel] = useState('')
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // 검색창이 빈칸이면 alert return 
        if (manufacturer === '' && model === '') {
            return alert("빈칸을 입력해주세요.")
        }
        // 검색 버튼을 누르면 updateSearchParams() 함수 실행, manufacturer(제조사), model 소문자로 변경해서 넘겨주기
        updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
    }

    const updateSearchParams = (model: string, manufacturer: string) => {
        // 현재 URL에 대한 객체 생성하기 (? 물음표 다음에 오는 쿼리 부분 설정)
        const searchParams = new URLSearchParams(window.location.search);

        // 모델이 있으면 쿼리 매개변수로 현재 model 생성. 없으면 삭제
        if (model) {
            searchParams.set('model', model)
        } else {
            searchParams.delete('model')
        }

        // 제조사가 있으면 쿼리 매개변수로 manufacturer 생성, 없으면 삭제 
        if (manufacturer) {
            searchParams.set('manufacturer', manufacturer)
        } else {
            searchParams.delete('manufacturer')
        }

        // 새로운 URL 경로 생성 (현재 경로 + searchParams)
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

        // 새로운 경로로 페이지 이동
        router.push(newPathname)
    }

    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <div className="searchbar__item">
                <div className='flex items-center flex-1 max-sm:w-full'>
                    <div className='absolute w-5 h-5 text-[#515151] ml-4'>
                        <RiCarFill className="w-full h-full" />
                    </div>
                    <input type="text" name='model' value={model} onChange={(e) => setModel(e.target.value)} placeholder='Tiguan' className='searchbar__input' />
                    <SearchButton otherClasses="sm:hidden" />
                </div>
                <SearchButton otherClasses="max-sm:hidden" />
            </div>
        </form>
    )
}

export default SearchBar

