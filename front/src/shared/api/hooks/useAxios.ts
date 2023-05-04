import React, { useState, useContext, useMemo, useRef, useEffect } from 'react'
import axios from 'axios'
import { AxiosContext } from '../components/axiosInstanceProvider'

export const useAxios = (url: string, method: string, payload: any) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [isLoaded, setLoaded] = useState(false)
  const contextInstance = useContext(AxiosContext)
  const instance = useMemo(() => {
    return contextInstance || axios
  }, [contextInstance])
  const controllerRef = useRef(new AbortController())
  const cancel = () => {
    controllerRef.current.abort()
  }

  useEffect(() => {
    ;(async () => {
      try {
        const response = await instance.request({
          signal: controllerRef.current.signal,
          data: payload,
          method,
          url,
        })
        setData(response.data)
      } catch (Err: any) {
        setError(Err.message)
      } finally {
        setLoaded(true)
      }
    })()
  }, [])

  return { cancel, data, error, isLoaded }
}
