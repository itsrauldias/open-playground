import { useState } from 'react';
import styles from './SidebarMenu.module.css';

export function SidebarMenu(props) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div style={{ marginTop: '15px' }}>
            <button className="btn" onClick={() => setIsSidebarOpen(true)}>{props.activateMenu}</button>

            <div className={styles.sidenav} style={isSidebarOpen ? { width: "250px" } : { width: "0" }}>

                <span className={styles.closebtn} onClick={() => setIsSidebarOpen(false)}>
                    &times;
                </span>
                {isLoading ?
                    <div className="card">
                        Carregando...
                    </div>
                    :
                    props.children
                }

            </div>
        </div>
    )
}
