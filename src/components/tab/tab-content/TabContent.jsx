import useQuery from "../../hooks/useFetch";
import './TabContent.css';
export default function TabContent({tabs, activeTabIndex}){
    const {data, loading, error} = useQuery({
        url: 'https://loripsum.net/api/1',
        requestInfo:{
            headers:{
                'Content-Type': 'text/html'
            },
            method: 'GET',
            credintials: 'same-origin'
        },
        initialEnable: true,
        cache:{
            enabled: true,
            ttl: 20
        },
        key: ["tab", activeTabIndex]
    })
    const tab = tabs[activeTabIndex];
    return(
        <div className='tab'>
            
                    <div className='tab-content'>
                        <h2>{tab.title}</h2>
                        {loading && <p>Loading...</p>}
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non autem hoc: igitur ne illud quidem. An tu me de L. Quid ad utilitatem tantae pecuniae? Vide, quaeso, rectumne sit. Quae iam oratio non a philosopho aliquo, sed a censore opprimenda est. Certe non potest. </p>
                        <p>Duo Reges: constructio interrete. Haec et tu ita posuisti, et verba vestra sunt. 
                            Non dolere, inquam, istud quam vim habeat postea videro; Quamquam te quidem video minime 
                            esse deterritum. Quicquid porro animo cernimus, id omne oritur a sensibus; Faceres tu quidem, Torquate, haec omnia; In quo etsi est magnus, tamen nova pleraque et perpauca de moribus. Respondent extrema primis, media utrisque, omnia omnibus. </p>
\

                    </div>

            
        </div>
    )
}