import {useCallback} from 'react'

//Use Materialize framework to show errors
export const useMessage = () => {
  //useCallback - to prevent the react from entering the recursion
  return useCallback(text => {
    if (window.M && text) {
      window.M.toast({ html: text })
    }
  }, [])
}