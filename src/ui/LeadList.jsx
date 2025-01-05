'use client'
import useAuth from "@/Hooks/useAuth";

const LeadList = ({ leadList }) => {
    const { user } = useAuth();

    const handleDelete = async (id) => {
        fetch(`https://clean-job-backend-final.vercel.app/leadlist/${id}`, {
            method: 'DELETE',
        })
            .then(res => {
                console.log(res);

            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <div>
                <h2 className="text-5xl inter font-bold">Hi! {user?.displayName}</h2>
                <p className="text-secondary text-base mt-6 nunito">A lead list helps you keep track of all the potential clients you want to connect with.</p>
            </div>
            <div className="overflow-x-auto mt-6">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-[#FCFCFD]">
                            <th className="text-center text-[#667085] font-medium text-sm inter">List Name</th>
                            <th className="text-center text-[#667085] font-medium text-sm inter">List State</th>
                            <th className="text-center text-[#667085] font-medium text-sm inter">Email Template</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            leadList.map((lead, index) => (
                                <tr key={index}>
                                    <td className="text-center poppins text-base">{lead.listName}</td>
                                    <td className="text-center poppins text-base">{lead.state}</td>
                                    <td className="text-center poppins text-base">{lead.emailTemplate}</td>
                                    <td>
                                        <button onClick={() => handleDelete(lead._id)} className="btn btn-outline text-primary text-lg rounded-lg hover:bg-primary hover:text-white">Delete</button>
                                        <button className="btn btn-outline text-red-500 text-lg rounded-lg ml-5 hover:text-white hover:bg-red-500">Edit</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default LeadList;