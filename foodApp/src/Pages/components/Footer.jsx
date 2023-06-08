import "./footer.css"
export default function Footer(){
    return (
        <>
            <div className="footer">
                <div className="footer-top">
                    <div>
                        <h3>follow us</h3>
                        <div>
                            <ul>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3>Contact us</h3>
                    </div>
                    <div>
                        <h3>Our menu</h3>
                    </div>
                    <div>
                        <h3>Working hours</h3>
                    </div>   
                </div> 
                <div className="footer-botton">
                <p>&copy; 2023 Flavour Express. All rights reserved.</p>
                </div> 
            </div>
        </>
    )
}
