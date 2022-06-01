import React from "react";
import styles from "./navbar.module.css";
import { Breadcrumb, Button } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <>
    <Breadcrumb>
      <div className={styles.navbarDiv}>
        <div className={styles.leftDiv}>
          <h3>Logo</h3>
          <div className="dropdown">
             Indpiration
            <div id="content">
              <div className="a" >
                <h4>Expolre Design work</h4>
                <p>Trending Design To Inspire You</p>
                </div>
                <div className="a" >
                <h4>{"New & Noteworthy"}</h4>
                <p>{"Up-and-Coming Designers"}</p>
                </div>
            </div>
          </div>
          <div className="dropdown">
             FindWork
            <div id="content">
            <div className="a" >
                <h4>Job Board</h4>
                <p>Find Your Design Job</p>
                </div>
                <div className="a" >
                <h4>FreeLance Projects</h4>
                <p>An exclusive lists for contect work</p>
                </div>
            </div>
          </div>
          <p style={{cursor:"pointer"}}>Learn Design</p>
          <p style={{cursor:"pointer"}}>Higher Design</p>
        </div>
        <div className={styles.buttonDiv}>
          <p>Sign In</p>
        <Button  colorScheme='pink' size='md'>Sign Up</Button>
        </div>
      </div>
    </Breadcrumb>
    </>
  );
};

export default Navbar;
