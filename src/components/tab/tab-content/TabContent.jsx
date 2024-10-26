import useQuery from "../../hooks/useFetch";
import './TabContent.css';
export default function TabContent({tabs, activeTabIndex}){
    const {data, loading, error} = useQuery({
        url: '/api/1',
        requestInfo:{
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain',
                'Accept-Encoding': 'gzip'
            }
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


                    </div>

            
        </div>
    )
}