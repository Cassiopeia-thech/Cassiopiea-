import React from 'react';

//import vmarine
import vmarine from "../img/energy.jpg";
//aguadeluz pics
import aguaDeLuz from "../img/aguaDeLuz.png";

//import todo
//import todoList from "../img/todolist.png";


//import amtbw


//import medlingos


//import landing page


class Services extends React.Component{

    render(){
        return (
          <section id="work" className="services-mf sect-pt4 route">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="title-box text-center">
                    <h3 className="title-a">
                      Our Services
                    </h3>
                    <p className="subtitle-a">
                      Check Out Our Latest Projects.
                    </p>
                    <div className="line-mf"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={vmarine} data-lightbox="gallery-vmarine">
                      <div className="work-img">
                        <img src={vmarine} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Energy Sector</h2>
                            <div className="w-more">
                              <span className="w-ctegory">the discription is found in here</span> {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      </a>
                      <a href={vmarine} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      {/*<a href={vmarine2} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={vmarine3} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={vmarine4} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={vmarine5} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={vmarine6} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={vmarine7} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>*/}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={aguaDeLuz} data-lightbox="gallery-aguadeluz">
                      <div className="work-img">
                        <img src={aguaDeLuz} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Electronics Design</h2>
                            <div className="w-more">
                              <span className="w-ctegory">the Scamatic or somthing diagram is going to placed in here </span> {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href={aguaDeLuz} data-lightbox="gallery-aguadeluz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    {/*<a href={aguaDeLuz2} data-lightbox="gallery-aguadeluz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={aguaDeLuz3} data-lightbox="gallery-aguadeluz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={aguaDeLuz4} data-lightbox="gallery-aguadeluz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>*/}
                  </div>
                </div>
              
                <div className="col-md-4">
                  <div className="work-box">
                    <a data-lightbox="gallery-medlingos">
                      <div className="work-img">
                        {/*<img src={medlingos} alt="" className="img-fluid"/>*/}
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">And Some Other</h2>
                            <div className="w-more">
                              <span className="w-ctegory">Bootstrap ReactJS GoogleAPI</span>{/*/ <span className="w-date">18 Sep. 2018</span>*/}
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    {/*<a href={medlingos} data-lightbox="gallery-medlingos" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>*/}
                    {/*<a href={medlingos2} data-lightbox="gallery-medlingos" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={medlingos3} data-lightbox="gallery-medlingos" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={medlingos4} data-lightbox="gallery-medlingos" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>*/}
                  </div>
                </div>
                
              </div>
            </div>
          </section>
        );
    }
}

export default Services;