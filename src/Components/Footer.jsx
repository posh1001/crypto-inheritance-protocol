import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Footer = () => {
  return (
    <>
      <footer style={{backgroundColor: "rgb(32, 40, 49)", overflow: "hidden", height: "100%"}}>
         <div className="container">
            <h1 style={{textAlign: "center"}}>What makes CIP unique?</h1>
            <div className="row d-flex"> 
            <div className="col-4">
                <h3>Flexibility</h3>
                <p>
                CIP empowers users to create tailored inheritance solutions,
                 multi-signature wallets, and legally sound agreements that
                  evolve alongside their needs. This modularity offers 
                  users the freedom to adapt and secure their assets
                   across decentralized networks with ease.
                </p>
                <br />
            </div>
            <div className="col-4">
                <h3>Bulletproof Security</h3>
                <p>
                CIP introduces a new standard for safeguarding wealth
                 in decentralized ecosystems. Its smart contracts are
                  designed to provide unmatched security for digital
                   legacies, ensuring users' assets and agreements are
                    safe and future-proof.
                </p>
                <br />
            </div>
            <div className="col-4">
                <h3>Comprehensiveness</h3>
                <p>
                Whether it’s traditional or digital, your assets are secured 
                across every ecosystem. With our crypto inheritance protocol,
                 you can rest assured that everything you’ve worked for is 
                 fully protected—no matter the asset, no matter the platform.
                </p>
                <br />
            </div>
            </div>
         </div>
      </footer>
      <div className="lower-footer">
        <p>&copy; 2025 Crypto Inheritance Protocol. All Rights Reserved</p>
    </div>
    </>
  )
}

export default Footer;
