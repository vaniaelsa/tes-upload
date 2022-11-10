const ListItem = (props) => {
  const { id, nama, umur, jenisKelamin } = props.data;
  return (
    <tr>
      <td>{nama}</td>
      <td>{umur}</td>
      <td>{jenisKelamin}</td>
      <td>
        <button onClick={() => props.hapusPengunjung(id)}>Hapus</button>
      </td>
    </tr>
  );
};

export default ListItem;
