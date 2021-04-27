import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {ListGroup, ListGroupItem} from 'reactstrap'

const Repos = ({repoUrl}) =>{
    const [repos, setRepos] = useState([]);

    const fetchRepo = async () => {
        const {data} = await axios.get(repoUrl)
        setRepos(data)
    }

    useEffect(() => {
        fetchRepo()
    }, [repoUrl])

    return(
        <ListGroup>
            {
                repos.map(repo => (
                    <ListGroupItem key={repo.id}>
                        <div className="text-primary">{repo.name}</div>
                        <div className="text-secondary">{repo.language}</div>
                        <div className="text-info">{repo.description}</div>
                    </ListGroupItem>
                ))
            }
        </ListGroup>
    )
}

export default Repos;
