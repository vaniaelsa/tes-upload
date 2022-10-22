import ListItem from "./ListItem";
const ListPassenger = props => {
   
    return (
        <div>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                <thead bgcolor="red">
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                </thead>
                <tbody>

                {/* <tbody> */}
                    {/* {data.map((passenger) => <ListItem key={passenger.id} item={passenger} hapusPengunjung={hapusPengunjung}/>)} */}

                {/* </tbody> */}
                {props.data.map(item => (
                    <ListItem 
                    key={item.id}
                    data={item}
                    hapusPengunjung={props.hapusPengunjung}
                    />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListPassenger;