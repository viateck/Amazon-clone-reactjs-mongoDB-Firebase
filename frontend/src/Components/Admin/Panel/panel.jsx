import React from 'react'
import './panel.css'
import { useContext } from 'react'
import { AuthContext } from '../../../store/FirebaseContext'
import { useEffect } from 'react'
import { useNavigate } from '../../../../node_modules/react-router/index'
import dashOrderImg from '../../../Images/Box.png'
import dashUserImg from '../../../Images/users.png'
import dashProductImg from '../../../Images/products.png'
import basket from '../../../Images/shopping-basket.png'
import dollar from '../../../Images/dollar-symbol.png'
import packageImg from '../../../Images/package.png'
import userImg from '../../../Images/user.png'
import profitImg from '../../../Images/profits.png'





function AdminPanel() {

    const navigate = useNavigate()


    const AdminSignIn = () => {

        const { user } = useContext(AuthContext)
        if (user) {
            localStorage.setItem('adminInfo', JSON.stringify(user));
        }
    }

    AdminSignIn()

    useEffect(() => {
        const user = localStorage.getItem('adminInfo')
        if (!user) {
            navigate('/admin')
        }
    }, [navigate])



    return (
        <div className='adminPanelSectionContainer'>

            <section className='adminPanelOverviewSection'>
                <div className="adminPanelOverviewContainer">
                    <div className="adminPanelOverviewTitleDiv">
                        <p className="adminPanelOverviewTitle">Amazon Dashboard</p>
                    </div>
                    <div className="adminPanelOverviewSubTitleDiv">
                        <p className="adminPanelOverviewSubTitleText"><span className="adminPanelOverviewSubDashboardTitle">Dashboard</span>{'>'}<span className="adminPanelOverviewSubAmazonDashboardTitle">Amazon Dashboard</span></p>
                    </div>
                    <div className='adminPanelDashSection'>
                        <div className="adminPanelDashContainer">

                            <div className="adminPanelOverviewBoxContainer">
                                <div className="adminPanelOverviewOrdersBoxContainerDiv">
                                    <div className="adminPanelOverviewOrdersBoxDiv">
                                        <div className="adminPanelOverviewOrdersImgDivContainer">
                                            <img className='adminPanelOverviewOrdersImg' src={dashOrderImg} alt="" />
                                        </div>
                                        <div className="adminPanelOverviewOrdersTextDivContainer">
                                            <div className="adminPanelOverviewOrdersTextDiv">
                                                <p className="adminPanelOverviewOrdersText">Total Orders</p>
                                            </div>
                                            <div className="adminPanelOverviewOrdersSubTextDiv">
                                                <p className="adminPanelOverviewOrdersSubText">Track, return, or manage orders</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="adminPanelOverviewUsersBoxContainerDiv">
                                    <div className="adminPanelOverviewUsersBoxDiv">
                                        <div className="adminPanelOverviewUsersImgDivContainer">
                                            <img className='adminPanelOverviewUsersImg' src={dashUserImg} alt="" />
                                        </div>
                                        <div className="adminPanelOverviewUsersTextDivContainer">
                                            <div className="adminPanelOverviewUsersTextDiv">
                                                <p className="adminPanelOverviewUsersText">Users</p>
                                            </div>
                                            <div className="adminPanelOverviewUsersSubTextDiv">
                                                <p className="adminPanelOverviewUsersSubText">View all users, or manage users</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="adminPanelOverviewProductsBoxContainerDiv">
                                    <div className="adminPanelOverviewProductsBoxDiv">
                                        <div className="adminPanelOverviewProductsImgDivContainer">
                                            <img className='adminPanelOverviewProductsImg' src={dashProductImg} alt="" />
                                        </div>
                                        <div className="adminPanelOverviewProductsTextDivContainer">
                                            <div className="adminPanelOverviewProductsTextDiv">
                                                <p className="adminPanelOverviewProductsText">Products</p>
                                            </div>
                                            <div className="adminPanelOverviewProductsSubTextDiv">
                                                <p className="adminPanelOverviewProductsSubText">Add, edit, or manage products</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='adminPanelDashOrdersBoxContainerSection'>

                                <div className="adminPanelDashOrdersBoxContainer">
                                    <div className="adminPanelDashOrdersBoxDiv">
                                        <div className="adminPanelDashOrdersTextBoxDiv">
                                            <div className="adminPanelDashOrdersBoxTitleDiv">
                                                <p className="adminPanelDashOrdersBoxTitle">TOTAL ORDERS</p>
                                            </div>
                                            <div className="adminPanelDashOrdersBoxValueDiv">
                                                <p className="adminPanelDashOrdersBoxValue">35679</p>
                                            </div>
                                            <div className="adminPanelDashOrdersBoxIncreaseTextDiv">
                                                <p className="adminPanelDashOrdersBoxIncreaseText">2.00% (30 days)</p>
                                            </div>
                                        </div>
                                        <div className="adminPanelDashOrdersImgBoxDiv">
                                            <img src={basket} alt="" className="adminPanelDashOrdersBoxImg" />
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>


                                <div className="adminPanelDashTotalIncomeBoxContainer">
                                    <div className="adminPanelDashTotalIncomeBoxDiv">
                                        <div className="adminPanelDashTotalIncomeTextBoxDiv">
                                            <div className="adminPanelDashTotalIncomeBoxTitleDiv">
                                                <p className="adminPanelDashTotalIncomeBoxTitle">TOTAL INCOME</p>
                                            </div>
                                            <div className="adminPanelDashTotalIncomeBoxValueDiv">
                                                <p className="adminPanelDashTotalIncomeBoxValue">$14,966</p>
                                            </div>
                                            <div className="adminPanelDashTotalIncomeBoxIncreaseTextDiv">
                                                <p className="adminPanelDashTotalIncomeBoxIncreaseText">Increased by 7.35%</p>
                                            </div>
                                        </div>
                                        <div className="adminPanelDashTotalIncomeImgBoxDiv">
                                            <img src={dollar} alt="" className="adminPanelDashTotalIncomeBoxImg" />
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>

                                <div className="adminPanelDashProductsBoxContainer">
                                    <div className="adminPanelDashProductsBoxDiv">
                                        <div className="adminPanelDashProductsTextBoxDiv">
                                            <div className="adminPanelDashProductsBoxTitleDiv">
                                                <p className="adminPanelDashProductsBoxTitle">Products</p>
                                            </div>
                                            <div className="adminPanelDashProductsBoxValueDiv">
                                                <p className="adminPanelDashProductsBoxValue">24680</p>
                                            </div>
                                            <div className="adminPanelDashProductsBoxIncreaseTextDiv">
                                                <p className="adminPanelDashProductsBoxIncreaseText">Increased by 7.35%</p>
                                            </div>
                                        </div>
                                        <div className="adminPanelDashProductsImgBoxDiv">
                                            <img src={packageImg} alt="" className="adminPanelDashProductsBoxImg" />
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>


                                <div className="adminPanelDashUsersBoxContainer">
                                    <div className="adminPanelDashUsersBoxDiv">
                                        <div className="adminPanelDashUsersTextBoxDiv">
                                            <div className="adminPanelDashUsersBoxTitleDiv">
                                                <p className="adminPanelDashUsersBoxTitle">Users</p>
                                            </div>
                                            <div className="adminPanelDashUsersBoxValueDiv">
                                                <p className="adminPanelDashUsersBoxValue">24680</p>
                                            </div>
                                            <div className="adminPanelDashUsersBoxIncreaseTextDiv">
                                                <p className="adminPanelDashUsersBoxIncreaseText">Increased by 7.35%</p>
                                            </div>
                                        </div>
                                        <div className="adminPanelDashUsersImgBoxDiv">
                                            <img src={userImg} alt="" className="adminPanelDashUsersBoxImg" />
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>

                                <div className="adminPanelDashProfitBoxContainer">
                                    <div className="adminPanelDashProfitBoxDiv">
                                        <div className="adminPanelDashProfitTextBoxDiv">
                                            <div className="adminPanelDashProfitBoxTitleDiv">
                                                <p className="adminPanelDashProfitBoxTitle">Profit</p>
                                            </div>
                                            <div className="adminPanelDashProfitBoxValueDiv">
                                                <p className="adminPanelDashProfitBoxValue">$54690</p>
                                            </div>
                                            <div className="adminPanelDashProfitBoxIncreaseTextDiv">
                                                <p className="adminPanelDashProfitBoxIncreaseText">Increased by 7.35%</p>
                                            </div>
                                        </div>
                                        <div className="adminPanelDashProfitImgBoxDiv">
                                            <img src={profitImg} alt="" className="adminPanelDashProfitBoxImg" />
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    )
}

export default AdminPanel