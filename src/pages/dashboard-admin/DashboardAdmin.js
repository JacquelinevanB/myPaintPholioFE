import React from 'react';
import Navigation from "../../components/navigation/Navigation";
import './DashboardAdmin.css';
import ButtonClear from "../../components/buttons/buttonClear/ButtonClear";


function DashboardAdmin(props) {
    return (
        <>
            <header id="header" className="outer-content-container">
                <div className="inner-content-container">
                    <Navigation pageName="Admin pagina" id="navigation"/>

                </div>
            </header>

            <main id="main" className="outer-content-container">
                <div className="inner-content-container dashboard-admin-container">
                    <div className="dashboard-admin-numberscontainer">
                        <h4>Totaal aantal gebruikers:</h4>
                        <h4>Totaal aantal projecten:</h4>
                        <h4>Totaal aantal updates:</h4>
                    </div>
                    <h4>Alle gebruikers</h4>
                    <table>
                        <thead>
                        <tr>
                            <th>Gebruikersnaam</th>
                            <th>Voornaam</th>
                            <th>Achternaam</th>
                            <th>Emailadres</th>
                            <th className="tablecell-center">Aantal projecten</th>
                            <th></th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>Jacqueline</td>
                            <td>Jacqueline</td>
                            <td>van Burk</td>
                            <td>jacqueline@test.nl</td>
                            <td className="tablecell-center">6</td>
                            <td className="tablecell-center">
                                <ButtonClear>
                                    wijzigen
                                </ButtonClear>
                            </td>
                        </tr>
                        <tr>
                            <td>Jacqueline</td>
                            <td>Jacqueline</td>
                            <td>van Burk</td>
                            <td>jacqueline@test.nl</td>
                            <td className="tablecell-center">6</td>
                            <td className="tablecell-center">
                                <ButtonClear>
                                    wijzigen
                                </ButtonClear>
                            </td>
                        </tr>
                        <tr>
                            <td>Jacqueline</td>
                            <td>Jacqueline</td>
                            <td>van Burk</td>
                            <td>jacqueline@test.nl</td>
                            <td className="tablecell-center">6</td>
                            <td className="tablecell-center">
                                <ButtonClear>
                                    wijzigen
                                </ButtonClear>
                            </td>
                        </tr>
                        <tr>
                            <td>Jacqueline</td>
                            <td>Jacqueline</td>
                            <td>van Burk</td>
                            <td>jacqueline@test.nl</td>
                            <td className="tablecell-center">6</td>
                            <td className="tablecell-center">
                                <ButtonClear>
                                    wijzigen
                                </ButtonClear>
                            </td>
                        </tr>
                        </tbody>
                        {/*{students.map((student) => {*/}
                        {/*    // De key moet op het buitenste element staan en uniek zijn*/}
                        {/*    return <tr key={student.studentNumber}>*/}
                        {/*        <td>{student.studentNumber}</td>*/}
                        {/*        /!*Even checken of er uberhaupt een file is, en zo ja, dan laten we hem zien!*!/*/}
                        {/*        <td>{student.file && <img src={student.file.url} alt={student.name}/>}</td>*/}
                        {/*        <td>{student.name}</td>*/}
                        {/*        <td>{student.course}</td>*/}
                        {/*        <td>{student.emailAddress}</td>*/}
                        {/*    </tr>*/}
                        {/*})}*/}

                    </table>
                </div>
            </main>
        </>
    );
}

export default DashboardAdmin;