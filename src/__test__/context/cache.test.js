import { render, renderHook } from '@testing-library/react';
import CacheProvider, {useCache} from '../../components/context/CacheContext';


const TestComponent = () => {
  const cache = useCache();
  cache.setCache('key', 'value', 10);
  const value = cache.getCache('key');
  return <div>{value}</div>
}

describe("Cache Provider", ()=>{
  test('provides expected cache', ()=>{
    const {container} = render(
      <CacheProvider>
        <TestComponent />
      </CacheProvider>
    );
    expect(container).toHaveTextContent('value');
  })
  test('check if useCache is defined',()=>{
    expect(useCache).toBeDefined();
  })
  test('check if cache expires',()=>{
    const {container} = render(
      <CacheProvider>
        <TestComponent />
      </CacheProvider>
    )
    setTimeout(()=>{
      expect(container).toHaveTextContent('');
    }, 10000)
  })
 
  
})
