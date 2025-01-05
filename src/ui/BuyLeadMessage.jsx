'use client';

import { FaArrowRight } from "react-icons/fa";
import Payment from "./Payment";

const BuyLeadMessage = ({ leads, appointmentDate, prize, isDisabled, product_Id }) => {
    const handleOpenModal = () => {
        if (typeof window !== 'undefined') {
            const modal = document.getElementById('my_modal_3');
            modal?.showModal();
        }
    };

    const handleCloseModal = () => {
        if (typeof window !== 'undefined') {
            const modal = document.getElementById('my_modal_3');
            modal?.close();
        }
    };

    return (
        <div className="xl:w-1/2 2xl:w-1/2 w-full mx-auto mt-16">
            <h3 className="poppins text-6xl font-semibold text-center">Buy This Lead ${prize}</h3>
            {
                !isDisabled ? (
                    <p className="poppins text-xl font-medium text-center mt-5">
                        The preset walkthrough date for this {leads} is {appointmentDate}. Walkthrough dates and times may possibly be changed after purchasing, but there is no guarantee.
                    </p>
                ) : (
                    <p className="poppins text-xl font-medium text-center mt-5">
                        Walkthrough dates have been passed <br />
                        <span className="text-center text-xl text-gray-600">To buy this lead please contact support</span>
                    </p>
                )
            }
            <div className="w-3/4 mx-auto mt-10">
                <button
                    onClick={handleOpenModal}
                    className={`flex items-center gap-2 justify-center w-full rounded-[16px] p-5 ${isDisabled ? 'bg-gray-400' : 'bg-primary'}`}
                    disabled={isDisabled}
                >
                    <p className="poppins text-lg font-medium text-white">Buy This Lead</p>
                    <FaArrowRight className="text-white" />
                </button>
            </div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={handleCloseModal}
                        >
                            ✕
                        </button>
                    </form>
                    <Payment price={prize} product_Id={product_Id} closeModal={handleCloseModal} />
                </div>
            </dialog>
        </div>
    );
};

export default BuyLeadMessage;
