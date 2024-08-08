import './Root.css'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

export default function Root() {
    return (
        <div className="layout">
            <Sidebar />
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}
