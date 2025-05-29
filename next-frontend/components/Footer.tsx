import Link from "next/link";

export default function Footer(){
    return(
        <footer className=" container pt-5 ">
            
					<div className="row">
						<div className="col-sm-12 text-center">
							<span className="text-white">© 2024 Sayantan Choudhury - All Rights Reserved. </span>
							
							
							<div className="icon text-white icon_mail"></div>
							<Link href="/contact" className="text-white"><span className="text-white"> Get in touch with me <i className="icon arrow_right"></i></span></Link>
						</div>
					</div>
				
        </footer>
    )
}