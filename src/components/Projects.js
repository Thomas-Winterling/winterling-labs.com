import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function Projects() {
    return (
        <div id="projects" className="projects">
            <div data-aos="fade-right" className="headline">
                <h1>Webanwendungen</h1>
                <div className="bar"></div>
            </div> 
            <div className="service-container">
            <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentStyle={{ background: 'white', color: 'black'}}
                        icon={<Icon name="keyboard" size="big"/>}
                    >
                        <h3 className="vertical-timeline-element-title">Webentwicklung</h3>
                        <i>Webseiten & Extension Entwicklung</i>
                        <p>
                            Egal sie einen komplett neuen Webauftritt benötigen oder eine bestehende Webseite überarbeiten , des weitern
                            entwicklen wir Erweiterungen für Joomla!, WordPress und React.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<Icon name="search" size="big"/>}
                    >
                        <h3 className="vertical-timeline-element-title">SEO</h3>
                        <i>Suchmaschinenoptimierung</i>
                        <p>
                            Sie möchten bei Google und Co. besser gefunden werden und Ihre Reichweiter vergrößern?
                            Wir verbessern gezielt Ihr Google Ranking.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<Icon name="computer" size="big"/>}
                    >
                        <h3 className="vertical-timeline-element-title">Responsives Design</h3>
                        <i>Ihre Webseite auf allen Endgeräten.</i>
                        <p>
                            Durch Responsive Webdesign sorgen wir für ein ansprechendes Layout auf allen mobilen Geräten sowie Tablet´s.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<Icon name="code" size="big"/>}
                    >
                        <h3 className="vertical-timeline-element-title">Webbasierte Programmierung</h3>
                        <i>Programmiersprachen</i>
                         <p>
                            Bei der Programmierung arbeite ich in der Regel mit PHP,JavaScript, Jquery und in Verbindung zur Datenbankverwaltung mit Open Source MYSQL.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<Icon name="phone" size="big"/>}
                    >
                        <h3 className="vertical-timeline-element-title">Support und Beratung</h3>
                        <i>Kostenlose Beratung</i>
                        <p>
                            Nach der Erstellung der Website bin ichr natürlich auch weiter für Sie da. Durch das verwendete CMS System ist es Ihnen auch möglich Ihre eigene Website selbst zu verwalten.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>   
        </div>
    )
}

export default Projects;
