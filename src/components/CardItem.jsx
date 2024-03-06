function CardItem({title,imgURL,isVisited,color,strumento,musica,documento,children}){

    const visitedLabel = isVisited ? "V visitata" : "X non visitata";
    const description= "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quisquam aperiam enim, tempora aliquid omnis quas inventore provident autem ratione ipsa itaque assumenda harum similique consequatur sequi veniam eveniet recusandae.";
    
    return(
    <div className="rounded-md w-50 bg-zinc-950">
        <img src={imgURL} alt=""/>
        <div className="flex flex-col p-4">
            <h2 className="text-2xl text-white font-bold">{title}</h2>
            <p className="text-gray-200">
                {children}
            </p>
            <p style={{backgroundColor:color}}>
                {color}
            </p>
            <p className="text-gray-200">
                {strumento}
            </p>
            <p className="text-gray-200">{musica}</p>
            <p className="text-gray-200">Documento</p>
            <span className="text-gray-200">{visitedLabel}</span>
            {isVisited && <span className="text-gray-200">V visitata</span>}
            {!isVisited && <span className="text-gray-200">X non visitata</span>}
        </div>
        </div>
    )
}
export default  CardItem;