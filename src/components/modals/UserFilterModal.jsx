import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { faStar, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
// import { AdapterDayjs, DateRangePicker, LocalizationProvider } from '@mui/x-date-pickers-pro';

const UserFilterModal = ({ isOpen, setIsOpen }) => {
    library.add(faStar, faCaretRight);
    const [value, setValue] = React.useState([null, null]);
    const formClose = () => { setIsOpen(false) };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => formClose()}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100" 
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-trans-card bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel
                                className="w-full max-w-[700px] transform overflow-hidden 
                rounded-2xl bg-white p-6 text-left align-middle shadow-xl shadow-item-shadow transition-all"
                            >
                                <div
                                    onClick={() => formClose()}
                                    className="absolute right-[-1rem] cursor-pointer top-[.5rem] w-[25px]
                   h-[25px] flex items-center justify-center border-2 p-2 border-gray rounded-full mr-[2rem]"
                                >
                                    <figure>
                                        <img src="../assets/icons/cross.png" alt="cancel form" />
                                    </figure>
                                </div>
                                <div>
                                    <form
                                    // method="POST" 
                                    // onSubmit={handleFilter}
                                    >
                                        <div className="relative">
                                            {/* <LocalizationProvider
                                                dateAdapter={AdapterDayjs}
                                                localeText={{ start: 'First-Date', end: 'Last-Date' }}
                                            >
                                                <DateRangePicker
                                                    value={value}
                                                    onChange={(newValue) => {
                                                        setValue(newValue);
                                                    }}
                                                    renderInput={(startProps, endProps) => (
                                                        <React.Fragment>
                                                            <TextField {...startProps} />
                                                            <Box sx={{ mx: 2 }}> to </Box>
                                                            <TextField {...endProps} />
                                                        </React.Fragment>
                                                    )}
                                                />
                                            </LocalizationProvider> */}

                                            <h1 className="text-[1.4em] m-[2em] text-center">Select Filters</h1>
                                        </div>
                                        <div className="flex justify-center mt-[1rem]">
                                            <button
                                                // disabled={!filterBtnDisable}
                                                className="bg-blue hover:bg-mid-blue rounded-lg py-2 px-16 text-white font-roboto "
                                            >
                                                Apply Filter
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default UserFilterModal;