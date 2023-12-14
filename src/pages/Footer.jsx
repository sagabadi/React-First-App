import instagram from '../assets/instagram.png'
import github from '../assets/github.png'

const Footer = () => {
    return (
        <>
            <div className='foot_root'>
                <div className='foot'>
                    <div className="footer">
                        <img className='instagram-img w-6' src={instagram} alt="" />
                        <img className='github-img w-6 ml-3' src={github} alt="" />
                    </div>
                    <div className='footer_1'>
                        <p className="avl awc awo axr text-xs">©2023 Designed By Bagas Adi Prayitno.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer