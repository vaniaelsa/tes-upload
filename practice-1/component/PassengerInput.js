import { useState } from 'react';
function PassengerInput (props)  {
    const [data, setData] = useState({
        nama: "",
        umur: "",
        jenisKelamin: "Pria"})
    
    const [editing, setEditing] = useState(true)    

// Event handlers

    const onChange = e => {
        setData({
            ...data,
            [e.target.name]:e.target.value,
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        if(data.nama.trim() && data.umur && data.jenisKelamin){
            const umur = data.umur;
            if(umur >= 75 || umur <= 12){
                alert("Umur tidak sesuai")
            } else {
                const newData = {
                    nama: data.nama,
                    umur: data.umur,
                    jenisKelamin: data.jenisKelamin,
                    }
                    props.tambahPengunjung(newData);
                    setData({
                        nama: "",
                        umur: "",
                        jenisKelamin: "Pria"
                    });
            }
        }
        else{
            alert("Data masih ada yang kosong yak!")
        };  
    } 
    
    const handleBukaInput = () => {
        setEditing(false);
    }
    
    const handleTutupInput = () => {
        setEditing(true);
    }
        
        
        // console.log("PassengerInput", this.props);
        const viewMode = {}
        const editMode = {}
        
        if (editing) {
            viewMode.display = 'none';
        }
        else {
            editMode.display = 'none';
        }
        
        return(
            <div>
                <div onSubmit={handleSubmit} style={viewMode} >
                    <p>Masukkan Nama Anda</p>
                    <input type="text" placeholder='Nama Anda..' value={data.nama} name="nama" onChange={onChange}/>
                    
                    <p>Masukkan Umur Anda</p>
                    <input type="text" placeholder='Umur Anda..' value={data.umur} name="umur" onChange={onChange}/>
                    
                    <p>Masukkan Jenis Kelamin Anda</p>
                    <select onChange={onChange} name="jenisKelamin" value={data.jenisKelamin}>
                        <option value="Pria" selected>Pria</option>
                        <option value="Wanita">Wanita</option>
                    </select>

                    <button onClick={handleSubmit}>Submit</button>
                    <button onClick={handleTutupInput}>Selesai</button>
                </div>
                <button onClick={handleBukaInput} style={editMode}>Masukan nama Penumpang</button>
            </div>

)

}



export default PassengerInput;


// const formIsNotEmpty = this.state.nama && this.state.umur && this.state.jenisKelamin
// console.log(formIsNotEmpty);
// "" => false
// "232" => true
// if(formIsNotEmpty) {
//     const newData = {
//         nama: this.state.nama,
//         umur: this.state.umur,
//         jenisKelamin: this.state.jenisKelamin,
//     }