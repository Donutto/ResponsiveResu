
import ProfileImage from './Profile.jpg';
import Phone from './phone.png'
import github from './github.png'
import email from './mail.png'

function Data({Text,Data}){
    const words = Data.split('#');
    return <>
            <strong className='header'>{Text}</strong>
            <div className='line'></div>
            <div>{words.map((word, index) => (
                    <div style={{margin:"1.98px"}} key={index}>{word}</div>
                ))}
            </div>
    </>
}

function LeftTab() {
    return (
        <div className="LeftTab">
            <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            >
            <img
                src={ProfileImage}
                alt="Profile"
                className='Profile-Pic'
            />
            </div>
            <Data Text="Personal Info" Data="Nickname : Donut#
                Date of birth : 12 / 10 / 2002#
                Address : 69/181 moo 2, soi Udomsin,#
                Sukumwit road,Taiban sub-district,#
                Samutprakarn district,Samutprakarn#
                10280 Thailand"></Data>
            <Data Text="SKILL" Data="Python#
                    Java#
                    JavaScript"></Data>
            <Data Text="TOOLS" Data="Oracle Virtualbox#
                    Figma#
                    Github#
                    SQL#
                    AWS#
                    Unix"></Data>
            <Data Text="Framework" Data="Oracle Virtualbox#
                    Springboot#
                    Javafx#
                    Scikit-learn#
                    React#
                    TypeScript#
                    Tailwind"></Data>
                    
            <strong>Contact</strong>
            <div className='line'></div>
            <div>
                <img src={Phone}
                alt="phone"
                className='icon'></img>
                <span className="white-text">  (66+) 65 123 5457</span>
                <br></br>
                <img src={email}
                alt="email"
                className='icon'></img>
                <span className="white-text">  rachata.kae@gmail.com</span>
                <br></br>
                <img src={github}
                alt="github"
                className='icon'></img>
                <span className="white-text">  donutto</span>
                <br></br>
            </div>
        </div>
    );
}

export default LeftTab;
