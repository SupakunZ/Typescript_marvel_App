import { useEffect, useState } from "react";
import { Heroes } from "../interfaces";
import data from '../data/heroes.json'

export const useHeroes = () => {
  const [heroes, setHeroes] = useState<Heroes[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const getHeroesByName = (nameHeroes: string) => {
    return heroes.find((data) => data.hero === nameHeroes) ?? ({} as Heroes) //ถ้าไม่มีให้ return เป็น {}
    //find return ออกมาเป็นค่าแรกที่ตรงกับเงื่อนไข
  }

  useEffect(() => {
    setTimeout(() => {
      setHeroes(data)
      setLoading(false)
    }, 300)
  }, [])

  return {
    heroes, loading, getHeroesByName // return ออกไปเป็น Object {heroes, loading, getHeroesByName}
  }

}
