import { act, renderHook } from '@testing-library/react-hooks'
import useStonkFeed from '../../hooks'

describe('useStonkFeed', () => {
 it('returns closing price when the market is closed', () => {
  const { result } = renderHook(() => useStonkFeed())
  
  expect(result.current).toBe('closing price')
 })

 it('returns stonk if the market is open', () => {
  const { result } = renderHook(() => useStonkFeed('GME'))
  
  console.log(result.current)
 })
})
