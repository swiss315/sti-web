import React from "react";

export const PolicyLoader = ({ columns=7}) => {
    return (
        <div className="motor p-6 animate-pulse">
            {/* Policy Heading Skeleton */}
            <div className="policy_heading flex justify-between mb-6">
                <div className="policy_text space-y-2">
                    <div className="h-6 w-40 bg-gray-300 rounded"></div>
                    {/* h3 */}
                    <div className="h-4 w-28 bg-gray-200 rounded"></div>
                    {/* p */}
                </div>
                <div className="w-full h-36 bg-gray-300 rounded"></div>
                {/* image */}
            </div>

            {/* Table Heading */}
            <div className="h-5 w-36 bg-gray-300 rounded mb-4"></div>

            {/* Table Skeleton */}
            <table className="transaction-table w-full">
                <thead>
                <tr>
                    {[...Array(columns)].map((_, i) => (
                        <th key={i}>
                            <div className="h-4 w-20 bg-gray-300 rounded"></div>
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {Array.from({length: 6}).map((_, i) => (
                    <tr key={i}>
                        <td className="p-3" colSpan={columns}>
                            <div className="h-4 w-full bg-gray-200 rounded "></div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
