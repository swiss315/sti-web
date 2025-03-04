const TableSkeleton = ({rows = 5, columns = 4}) => {
    return (
        <div className="w-full border border-gray-200 shadow rounded-lg overflow-hidden">
            <div className="w-full bg-gray-100 p-2 font-semibold">Loading...</div>
            <table className="w-full border-collapse">
                <thead>
                <tr>
                    {[...Array(columns)].map((_, index) => (
                        <th key={index} className="p-3 bg-gray-200"></th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {[...Array(rows)].map((_, rowIndex) => (
                    <tr key={rowIndex} className="animate-pulse">
                        {[...Array(columns)].map((_, colIndex) => (
                            <td key={colIndex} className="p-3">
                                <div className="h-4 bg-gray-300 rounded w-full"></div>
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableSkeleton;
