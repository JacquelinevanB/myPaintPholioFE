import React, { useEffect, useState} from "react";
import axios from "axios";
import PaintingCardImg from "../../cards/paintingCardImg/PaintingCardImg";
import dummy from '../../../assets/placeholder-image.png'


//GOED KIJKEN NAAR DE QUERY
//QUERIES IN DE BACKEND AANVULLEN
//CSS
//
function UserProjectCollection() {
    // const {user: {username}} = useContext(AuthContext);
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3aWxsZW0iLCJleHAiOjE2NjIxMzA2ODgsImlhdCI6MTY2MTI2NjY4OH0.RtAcpJVhhTpKOSarQ72do5UYYAwGJwh5a_npgYruYfI';
    const [ projectCollection, setProjectCollection ] = useState([]);
    const [ updateCollection, setUpdateCollection ] = useState([]);
    const [ projectUpdateCollection, setProjectUpdateCollection ] = useState([]);

    function getProjectUpdates(projectId) {
        updateCollection.map((update) => {
            if (update.projectDto.id === projectId) {
                projectUpdateCollection.add(update);
            }
            setUpdateCollection(updateCollection.sort((a, b) => b.id - a.id));
        })
    }

    useEffect(() => {
        async function getProjectCollection() {
            try {
                const [responseOne, responseTwo] = await Promise.all([
                    axios.get(`http://localhost:8080/projects/user/paul`,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    ),
                    axios.get(`http://localhost:8080/reflections/admin`,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                            }
                        }
                    )
                ])
                console.log(responseOne.data);
                console.log(responseTwo.data);
                setProjectCollection(responseOne.data);
                setUpdateCollection(responseTwo.data);
            } catch(error) {
                console.error(error);
            }
        }
        getProjectCollection();
    },[])

    return (
        <>
            <section>
                {(projectCollection.sort((a, b) => b.id - a.id)).map((project) => {
                    getProjectUpdates(project.id);
                    return (
                        <PaintingCardImg key={project.id}
                                         title={project.title}
                                         imgDescription={"foto van schilderproject"}
                                         img={projectUpdateCollection[0] ? projectUpdateCollection[0].url : dummy }
                                         url={'/'}
                        />
                    )
                })}
            </section>
        </>
    )
}

export default UserProjectCollection;

//1. op het dashboard komen cards van de aanwezige projecten van de user die is ingelogd (paintingcardimg element voor ieder project)
//2. de cards zijn geordend van meest recent (hoogste id) naar minst recent (laagste id)
//      dus de array moet op de juiste volgorde gezet worden
//3. dan wordt er langs de array gemapt om voor ieder project een card aan te maken die op de pagina geplaatst wordt
//4. de card toont de titel en de foto van de laatste update
//      dus tijdens het mappen wordt voor ieder project de verzameling updates opgehaald
//      als er geen updates zijn -> een placeholder foto plaatsen
//      van deze updates wordt de update met het hoogste id geselecteerd
//      van deze update wordt weer de foto-url geselecteerd
//      de url wordt dan geïnjecteerd in de paintingcard
//5. een klik op de card opent de pagina van dat project (url naar projectpage/projectid mbv de key)
//6. op de pagina worden de cards per 3 getoond en kunnen er via de button per 3 meer getoond worden

