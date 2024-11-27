import "./Footer.scss"

export default function Footer() {

    const getYear =new Date().getFullYear()
  
    return(
        <div className="section-footer">

          <p className="footer-info ">Your Name {getYear}</p>

        </div>
    )
    
}