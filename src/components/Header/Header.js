import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Header(props) {
    return (
        <div>
            <header className=' px-0 '>
                <nav className="navbar navbar-expand-lg navbar-dark" style={{ padding: '0 5rem' }}>
                    <a className="navbar-brand" href="#">
                        <div className="row mx-0 align-items-center">
                            <div>
                                <i className="fab fa-airbnb" style={{ fontSize: '1.8rem' }}></i>
                            </div>
                            <div className='pl-1 font-weight-bold' >airbnb</div>
                        </div>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav text-danger">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Nơi ở <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link text-light" href="#">Trải nghiệm</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link text-light" href="#" >Trải nghiệm trực tuyến</a>
                            </li>
                        </ul>
                    </div>
                    <div className="row  align-items-center" style={{ listStyle: 'none' }}>
                        <div>
                            <a className="btn text-light" href="#" style={{ borderRadius: '1.25rem' }}>Đón tiếp khách</a>
                        </div>
                        <a className="btn text-light" href="#" style={{ borderRadius: '1.25rem' }}>
                            <i class="fa fa-globe"></i>
                        </a>
                        <div >
                            <li className=" dropdown active ">
                                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                    <div className='row align-content-center login' style={{ borderRadius: '1.25rem' }}>
                                        <i className="fa fa-bars mx-3"></i>
                                        <i className="fa fa-user-circle"></i>
                                    </div>

                                </a>
                                <div className="dropdown-menu" style={{ left: '-65px' }} aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item font-weight-bold" href="#">Đăng kí</a>
                                    <a className="dropdown-item" href="#">Đăng nhập </a>
                                </div>
                            </li>
                        </div>

                    </div>
                </nav>
                <div className='mt-2'>
                    <div className='search-blog'>
                        <div className='row mx-0 text-dark font-weight-bold'>
                            <div className="col-3 form-group pl-5">
                                <label className="mt-2">Địa điểm</label>
                                <input type="text" className="form-control border-white p-0 " style={{ width: '80%', marginTop: '-15px' }} id="exampleInputEmail1" placeholder='Bạn sắp đi đâu?' />
                            </div>
                            <div className="col-3 form-group " >
                                <label className="mt-2 ">Nhận phòng</label>
                                <input type="text" className="form-control border-white p-0 " style={{ width: '70%', marginTop: '-15px', borderStyle: 'solid' }} id="exampleInputEmail1" placeholder='Thêm ngày' />
                            </div>
                            <div className="col-3 form-group">
                                <label className="mt-2 ">Trả phòng</label>
                                <input type="text" className="form-control border-white p-0 " style={{ width: '70%', marginTop: '-15px' }} id="exampleInputEmail1" placeholder='Thêm ngày' />
                            </div>
                            <div className="col-3 row form-group ">
                                <div className='row'>
                                    <div className='col-9'>
                                        <label className="mt-2">Khách</label>
                                        <input type="text" className="form-control border-white p-0" style={{ width: '100%', marginTop: '-15px' }} id="exampleInputEmail1" placeholder='Thêm khách' />
                                    </div>
                                    <div className='col-3'>
                                        <button className='btn-danger mt-2' style={{ width: '50px', height: '50px', borderRadius: '50px', borderWidth: '0', marginLeft: '0' }}>
                                            <i class="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>




    )
}
