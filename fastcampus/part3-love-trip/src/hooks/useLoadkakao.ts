import { useEffect } from 'react'

declare global {
  interface Window {
    Kakao: any
  }
}

function useLoadKakao() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
    script.async = true

    document.body.appendChild(script)

    script.onload = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(import.meta.env.VITE_KAKAO_API_KEY)
      }
    }
  }, [])
}

export default useLoadKakao
