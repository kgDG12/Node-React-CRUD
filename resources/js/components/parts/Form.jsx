import React from 'react'

export default function Form({ showFormClick, showform, formVals, SetFormVals, ...props }) {
    return (
        <div>
            <div className="d-flex">
                <button onClick={() => showFormClick()} className={'btn btn-' + (showform ? 'danger' : 'primary')} >
                    {showform ? 'Close' : 'Open'} Form
                </button>
                <form className="d-flex ms-auto">
                    <input type="search" placeholder="Search" aria-label="Search" className="form-control me-2" />
                    <button type="submit" className="btn btn-outline-success">
                        Search
                    </button>
                </form>
            </div>
            {showform ?
                <div className="container-fluid w-75">
                    <div className="row">
                        <div className="col-12 text-center mb-4">
                            <h2>Add Contact</h2>
                        </div>
                        <div className="col-12 text-center">
                            <div className="row">
                                <form noValidate className="row g-3 needs-validation my-4">
                                    <div className="col">
                                        <label className="form-label">Name</label>
                                        <input type="text" value={formVals.name} onChange={() => SetFormVals({ name: this.value })} required="required" className="form-control" />
                                        <div className="text-danger"></div>
                                    </div>
                                    <div className="col">
                                        <label className="form-label">Email</label>
                                        <input type="email" value={formVals.email} required="required" className="form-control" />
                                        <div className="text-danger"></div>
                                    </div>
                                    <div className="col">
                                        <label className="form-label">Phone</label>
                                        <input type="text" value={formVals.phone} required="required" className="form-control" />
                                        <div className="text-danger"></div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button type="submit" className="btn btn-primary me-2">
                                            Add Contact
                                        </button>
                                        <button className="btn btn-secondary">
                                            Reset
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                : ''
            }
        </div>
    )
}