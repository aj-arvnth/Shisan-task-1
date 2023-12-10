import "../Styles/Footer.css";
import PhoneIcon from '@mui/icons-material/Phone';

export default function Footer() {
  return (
    <>
   
      <footer className="footer print-hidden">
                <div className="section__container footer__container">
                    <div className="footer__logo"><h4>
                    <a href="#">Shisan Technologies Pvt. Ltd.</a>
                    </h4>
                        <p>20, TT Krishnamachari Rd,<br></br>Cooperative Colony, Sri Ram Nagar,<br></br>Alwarpet,chennai,<br></br>Tamil Nadu - 600018</p>

                    </div>
                    <ul className="footer__nav">
                  
                        <li className="footer__link"><i className="ri-phone-fill"/>&nbsp;+91 44 4217 7035</li>
                      
                        
                        <li className="footer__link"><a href="mailto:tkj@corms.co.in"><i className="ri-mail-fill"/> &nbsp;tkj@corms.co.in</a></li>
                       
                    </ul>
                </div>
            </footer>
    </>
  );
}
