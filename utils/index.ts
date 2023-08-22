import axios from "axios";

// API 데이터 가져오기
export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "c772aaab69mshd4dfa71fad83c53p1723efjsndfde46c4acda",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  try {
    const res = await axios.get(
      "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
      {
        headers: headers,
      }
    );

    const result = res.data;
    return result;
  } catch (error) {
    console.error(error);
  }
}

// 렌트비 계산하기 (연비, 연식이 높을 수록 대여료 증가)
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 30000; // 하루 대여
  const mileageFactor = 200; // 주행 거리에 따른 추가 금액
  const ageFactor = 50; // 차량 연식 추가 금액 (1년 증가 시 추가)

  // 주행 거리에 대한 금액 계산 (주행 연비 * 주행 거리 금액)
  const mileageRate = city_mpg * mileageFactor;
  // 차량 연식에 대한 추가 금액 계산 (현재 - year * 차량 연식 금액 추가)
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // 하루 대여료 계산 (기본 대여료 + 주행 거리 금액 + 차량 연식 금액)
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  // 대여료 반올림 하기
  return rentalRatePerDay.toFixed(0);
};
