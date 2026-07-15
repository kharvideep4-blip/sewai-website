import { useState, useEffect, useCallback, useRef } from 'react'

export function useSlideshow(images, intervalTime = 5000) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const timerRef = useRef(null)

  const goToSlide = useCallback((index) => {
    const newIndex = (index + images.length) % images.length
    setCurrentIndex(newIndex)
  }, [images.length])

  const next = useCallback(() => goToSlide(currentIndex + 1), [currentIndex, goToSlide])
  const prev = useCallback(() => goToSlide(currentIndex - 1), [currentIndex, goToSlide])

  useEffect(() => {
    timerRef.current = setInterval(next, intervalTime)
    return () => clearInterval(timerRef.current)
  }, [next, intervalTime])

  return { currentIndex, goToSlide, next, prev }
}