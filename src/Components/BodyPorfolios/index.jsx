import React from "react";
import './style.css'
import proy1 from '/Users/sergioylaura/Desktop/PORTAFOLIOS/portafolio/src/Assets/Captura de Pantalla 2022-05-03 a las 22.55.34.png'
import proy2 from '/Users/sergioylaura/Desktop/PORTAFOLIOS/portafolio/src/Assets/wheatherapii.png'
import proy3 from '/Users/sergioylaura/Desktop/PORTAFOLIOS/portafolio/src/Assets/tetis.png'
import proy4 from '/Users/sergioylaura/Desktop/PORTAFOLIOS/portafolio/src/Assets/kanba.png'
import proy5 from '/Users/sergioylaura/Desktop/PORTAFOLIOS/portafolio/src/Assets/responsive.png'
import proy6 from '/Users/sergioylaura/Desktop/PORTAFOLIOS/portafolio/src/Assets/rick.png'
import { DiMongodb, DiNodejsSmall, DiCss3, DiHtml5, DiReact, DiJsBadge, DiSass } from 'react-icons/di'
import { SiExpress } from 'react-icons/si'
import { CgWebsite } from 'react-icons/cg'
import { BsGithub } from 'react-icons/bs'
import { useTranslation } from "react-i18next";
import { GiDatabase } from 'react-icons/gi'
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

export default function () {

    const [t] = useTranslation('global')

    const arrayProyects = [{
        "proyectoNum": "1",
        "bg": proy1,
        "nameProyect": "THE LAST TABLE - Booking Page",
        "linkGitHubFront": 'https://github.com/Stejedas/proyectFinalBootcamp_Front',
        "linkGitHubBack": "https://github.com/Stejedas/proyectoFinalBootcamp_Back",
        "linkWeb": 'https://clinquant-taffy-da618e.netlify.app/home',
        "LengUsed": ['React','JavaScript', 'HTML', 'CSS', 'SCSS', 'Express', 'Node', 'MongoDB'],
        "yearProyect": '2022'
    }, {
        "proyectoNum": "2",
        "bg": proy2,
        "nameProyect": "WHEATHER APP",
        "linkGitHubFront": 'https://github.com/Stejedas/weatherAPP',
        "linkGitHubBack": "none",
        "linkWeb": 'none',
        "LengUsed": ['React','JavaScript', 'HTML', 'CSS', 'SCSS'],
        "yearProyect": '2022'
    }, {
        "proyectoNum": "3",
        "bg": proy4,
        "nameProyect": "KANBAN",
        "linkGitHubFront": 'https://github.com/Stejedas/Practica-React',
        "linkGitHubBack": "none",
        "linkWeb": 'none',
        "LengUsed": ['React','JavaScript', 'HTML', 'CSS'],
        "yearProyect": '2022'
    },{
        "proyectoNum": "6",
        "bg": proy5,
        "nameProyect": "Web Responsive",
        "linkGitHubFront": 'https://github.com/Stejedas/practica-web-responsive',
        "linkGitHubBack": "none",
        "linkWeb": 'none',
        "LengUsed": ['HTML', 'CSS'],
        "yearProyect": '2022'
    }, {
        "proyectoNum": "4",
        "bg": proy6,
        "nameProyect": "RickAndMortyPedia",
        "linkGitHubFront": 'https://github.com/Stejedas/rickandmortypedia',
        "linkGitHubBack": "none",
        "linkWeb": 'none',
        "LengUsed": ['React','JavaScript', 'HTML', 'CSS'],
        "yearProyect": '2022'
    }, {
        "proyectoNum": "5",
        "bg": proy3,
        "nameProyect": "Tetris (in progress)",
        "linkGitHubFront": 'https://github.com/Stejedas/Practica-2-Tetris',
        "linkGitHubBack": "none",
        "linkWeb": 'none',
        "LengUsed": ['JavaScript', 'HTML', 'CSS'],
        "yearProyect": '2022'
    }

    ]


    return (
        <Container fluid className="px-2">
        <Row>
        
            <div className="grid mb-5 ">
                {
                    arrayProyects.map((e, i) => <div className={`box${i + 1} box`}>
                        <img src={e.bg} class="img-fluid imgProyect" alt="..."></img>
                        <div className="overlayCard d-flex justify-content-center align-items-center flex-column">
                            <h1 className="mb-3 fs-5">{e.nameProyect}</h1>
                            <div className="iconsProyects px-5 mt-3">
                                {e.LengUsed.map(e => {
                                    if(e === 'React'){
                                        return <DiReact className="fs-2 mx-1" />
                                    } else if (e === 'JavaScript') {
                                        return <DiJsBadge className="fs-2 mx-1" />
                                    } else if (e === "HTML") {
                                        return <DiHtml5 className="fs-2 mx-1" />
                                    } else if (e === "CSS") {
                                        return <DiCss3 className="fs-2 mx-1" />
                                    } else if (e === "SCSS") {
                                        return <DiSass className="fs-2 mx-1" />
                                    } else if (e === "Express") {
                                        return <SiExpress className="fs-2 mx-1" />
                                    } else if (e === 'Node') {
                                        return <DiNodejsSmall className="fs-2 mx-1" />
                                    } else if (e === 'MongoDB') {
                                        return <DiMongodb className="fs-2 mx-1" />
                                    }
                                }
                                )}
                            </div>
                            <p className="mt-4 fs-5">- {e.yearProyect} -</p>
                            <div className="d-flex flex-row w-50 mt-1 justify-content-around">
                                {e.linkWeb === "none" ? <></> : <a href={e.linkWeb} className='colorDark'><CgWebsite className="fs-2" /></a>}
                                {e.linkGitHubFront === "none" ? <></> : <a href={e.linkGitHubFront} className='colorDark'><BsGithub className="fs-2"/></a>}
                                {e.linkGitHubBack === "none" ? <></> :  <a href={e.linkGitHubBack} className='colorDark'><BsGithub className="fs-2"/></a> }
                            </div>
                        </div>

                    </div>)
                }
            </div>
            </Row>
            </Container>
    )
}