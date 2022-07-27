import React from "react";
import './Footer.css'


function Footer(){
    return(
        <footer>
            <div>
                <ul className="footerMenu">
                    <li>
                        <a href="#">커피</a>
                    </li>
                    <li>
                        <a href="#">주방가전</a>
                    </li>
                    <li>
                        <a href="#">계절가전</a>
                    </li>
                    <li>
                        <a href="#">DE'LONGHI</a>
                    </li>
                </ul>
            </div>
            
            <ul className="footerInfo">
                <li>
                    <a href="#">개인정보보호정책</a>
                </li>
                <li>
                    <a href="#">법적고지</a>
                </li>
                <li>
                    <a href="#">Cookie Preferences</a>
                </li>
            </ul>
            <small>
                &copy;De'Longhi Appliancess S.r.l.  - Via L. Seitz, 47,31100 Treviso, Italy - All right reserved
            </small>
        </footer>
    )
}

export default Footer