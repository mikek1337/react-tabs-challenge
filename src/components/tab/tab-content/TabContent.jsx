import useQuery from "../../hooks/useFetch";
import './TabContent.css';
export default function TabContent({tabs, activeTabIndex}){
    //in normal 
    const {data, loading, error} = useQuery({
        url: '/api/1',
        requestInfo:{
            method: 'GET',
        },
        initialEnable: true,
        cache:{
            enabled: true,
            ttl: 20
        },
        key: ["tab", activeTabIndex]
    })
    const tab = tabs[activeTabIndex];
    const div = document.createElement('div');
    div.innerHTML = data;
    const extractedText = div.textContent || div.innerText || '';
    return(
        <div className='tab'>
            
                    <div className='tab-content'>
                        <h2>{tab.title}</h2>
                        {loading && <p>Loading...</p>}
                        {!loading && data && <p>{extractedText}</p>}
                        {error && <p>{error}, please reload the page!</p>}
                    </div>

            
        </div>
    )
}