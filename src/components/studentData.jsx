function StudentData(props) {
    return <tbody>
    <tr className="border-b-2 border-black">
        <td className="border-l-2 border-black text-center">{props.name}</td>
        <td className="border-l-2 border-black text-center">{props.address}</td>
        <td className="border-l-2 border-black text-center">{props.phone}</td>
        <td className="border-l-2 border-black text-center">{props.age}</td>
        <td className="border-l-2 border-black text-center">
            <div>
            <i className="fa-solid fa-pen-to-square text-2xl text-green-400"></i>
            <i onClick={props.delete} className="fa-solid fa-trash text-2xl text-red-600 pl-5"></i>
            </div>
        </td>
    </tr>
</tbody>
}

export default StudentData