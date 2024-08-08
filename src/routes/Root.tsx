import './Root.css'
import ContactList from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

export default function Root() {
    return (
        <div className="layout">
            <div className="sidebar">
                <ContactList />
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}
