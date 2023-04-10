import { useEffect, useRef } from "react"


export const useScrollTo = (shouldScroll: boolean)=> {
    const elToScroll = useRef<null | HTMLDivElement>(null)
    // const hasScrolled = useRef(false)
    
    useEffect(() => {
        if (!shouldScroll) return
        const timer = setTimeout(() => {
          elToScroll?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        //   hasScrolled.current = true
        }, 500)
        return () => clearTimeout(timer)
    }, [shouldScroll])

    return elToScroll

}