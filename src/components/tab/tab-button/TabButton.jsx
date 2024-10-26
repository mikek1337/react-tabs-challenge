import './TabButton.css'
export default function TabButton({tabs, activeTabIndex, onTabClick}){
    return(
        <div className='tab-button'>
            {
                tabs?.map((tab, index)=>(
                    <div className={'tab-title-container '+ (activeTabIndex === index?"active":"")} onClick={()=>{onTabClick && onTabClick(index)}} key={tab.id}>
                         <span>{tab.tabTitle}</span>
                    </div>
                ))
            }
        </div>
    )
}