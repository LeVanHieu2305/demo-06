"use client"

import { useStore } from '@/lib/store'
import { useEffect, useCallback } from 'react'

// Hook useScroll
export function useScroll(callback, deps = []) {
  const lenis = useStore(({ lenis }) => lenis)

  // Sử dụng useCallback để đảm bảo callback không thay đổi thường xuyên
  const memoizedCallback = useCallback(callback, [callback, ...deps])

  useEffect(() => {
    if (!lenis) return
    lenis.on('scroll', memoizedCallback)
    lenis.emit()

    return () => {
      lenis.off('scroll', memoizedCallback)
    }
  }, [lenis, memoizedCallback]) // Dependency array đơn giản hơn
}
