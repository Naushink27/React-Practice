import ItemList from "./itemList";

const RestaurantCategory=({data}) =>{
    // console.log(data)
return(
    <div className="Acco-body">
    <div className="Acco-header">

         <span className="Acco-title">
            {data.title} ({data?.itemCards?.length})
        </span>
        <span>⬇️</span>
        </div> 
        <ItemList item={data?.itemCards} />  
    
    </div>

)
}
export default RestaurantCategory;