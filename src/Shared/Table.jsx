import formatTimestamp from '@/js/convertTime';
import Dot from '@/ui/Dot';
import Info from '@/ui/Info';
import MapMarker from '@/ui/MapMarker';
import TableHead from '@/ui/TableHead';
import Link from 'next/link';
import React from 'react'

const Table = ({ tableHead, data, states, Button, bookMarks }) => {

    return (
        <div className="overflow-x-auto mt-10">
            <table className="table">
                {/* head */}
                <TableHead tableHead={tableHead} />
                <tbody>
                    {
                        data?.map(d => {
                            return (
                                <tr key={d._id}>
                                    <td>
                                        <p className=" text-[#667085] inter 2xl:text-base xl:text-base text-xs font-normal">{d?.businessName}</p>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-4">
                                            <MapMarker />
                                            <div>
                                                <h4 className="inter font-normal 2xl:text-lg xl:text-lg text-sm">{d?.city}</h4>
                                                <p className="text-[#72777A] 2xl:text-sm xl:text-sm text-xs">{d?.states}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="text-[#175CD3] bg-[#EFF8FF]  rounded-[18px] w-fit inter 2xl:text-sm xl:text-sm text-[10px] font-medium py-2 px-[10px]">{d?.opportunityType}</p>
                                    </td>
                                    <td className="">
                                        <p className=" text-[#667085] inter 2xl:text-base xl:text-base text-[10px] font-normal">{formatTimestamp(d?.uploadDate)}</p>
                                    </td>
                                    <td>
                                        <div className="flex items-center bg-[#F2F4F7] w-fit rounded-[20px] py-[6px] pl-[10px] pr-[20px]  ">
                                            {
                                                d?.sold ?
                                                    <>
                                                        <p className="text-red-600
                                     inter text-sm font-medium">Sold</p>
                                                    </>
                                                    :
                                                    <>
                                                        <Dot width={'w-[30px]'} />
                                                        <p className="text-[#027A48]
                                     inter text-sm font-medium">Available</p>
                                                    </>
                                            }
                                        </div>
                                    </td>
                                    <td>
                                        <div className="cursor-pointer">
                                            {
                                                bookMarks ?
                                                    <Link href={`/search/${d?.category}/${d?.states}/${d?._id}`}>
                                                        <Info />
                                                    </Link>
                                                    :
                                                    <Link href={`${d?.states}/${d?._id}`}>
                                                        <Info />
                                                    </Link>
                                            }
                                        </div>
                                    </td>
                                    {
                                        bookMarks && <td>
                                            <Button id={d?._id} />
                                        </td>
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;