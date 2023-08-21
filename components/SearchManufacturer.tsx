import { use, useState, Fragment } from 'react'
import { SearchManufacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import { manufacturers } from '@/constants'
import { BiSearch } from 'react-icons/bi'
import Image from 'next/image'

// Type 가져오기
const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
    const [query, setQuery] = useState('')
    console.log(manufacturer)

    // 제조사 목록 필터링
    // 검색란이 비어있는 경우 manufacturers 목록 그대로 가져오기
    // 그렇지 않은 경우 입력 query와 일치하는 걸 필터링
    // 필터링은 query에서 대소문자, 공백 제거한 결과를 includes()를 이용해서 포함되는지 여부 확인하고 일치하면 filteredManufacturers 배열에 포함시키기
    const filteredManufacturers = query === "" ? manufacturers : manufacturers.filter((item) => (
        item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
    ))


    // bomobox에서 제조사를 선택하면 manufacturer 값으로 들어감
    return (
        <div className='search-manufacturer'>
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className='relative w-full'>
                    <Combobox.Button className="absolute top-[14px]">
                        <div className='ml-4 w-5 h-5 text-[#515151]'>
                            <BiSearch className="w-full h-full" />
                        </div>
                    </Combobox.Button>
                    <Combobox.Input className="search-manufacturer__input" placeholder='Kia' displayValue={(manufacturer: string) => manufacturer} onChange={(e) => setQuery(e.target.value)} />
                    <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-10' afterLeave={() => setQuery('')}>
                        <Combobox.Options>
                            {/* active 되면 스타일링 주기 */}
                            {
                                filteredManufacturers.map((item) => (
                                    <Combobox.Option key={item} className={({ active }) => `relative search-manufacturer__option ${active ? `bg-primary-blue text-white` : 'text-gray-900'}`} value={item}>{({ selected, active }) => (
                                        <>
                                            <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                {item}
                                            </span>
                                            {selected ? (
                                                <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-primary-blue"}`}
                                                ></span>
                                            ) : null}
                                        </>
                                    )}</Combobox.Option>
                                ))
                            }
                        </Combobox.Options>
                    </Transition>

                </div>
            </Combobox>

        </div>
    )
}

export default SearchManufacturer
