import { detailsTable } from "../utils/movieDetailsTableInterface";

interface myProps {
  movieProp: detailsTable;
}

const DetailsTable: React.FC<myProps> = ({ movieProp }) => {
  return (
    <table className="">
      {Object.entries(movieProp).map(([key, value]) => (
        <tr key={key} className="my-6">
          <td className="px-1 py-1 text-end">{key} </td>
          <td className="py-1">{"   :   "}</td>
          <td className="px-1 py-1 text-start">
            {Array.isArray(value)
              ? value
                  .map((el) => {
                    return el.name;
                  })
                  .join(", ")
              : value}
          </td>
        </tr>
      ))}
    </table>
  );
};

export default DetailsTable;
