export const FruitsList = ({fruits}) => {

    return (
        <>
            <h1 className="text-center">Fruits List</h1>
            <div className="mx-5">
                <ul className="list-group">
                    {fruits.map(item=>( <li key = { item } className="nav-item">
                                    <a className="nav-link active" aria-current="page">
                                        {item}
                                    </a>
                                </li>))}
                </ul>
            </div>
        </>
    )
}