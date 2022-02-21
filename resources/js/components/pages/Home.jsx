import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ConList from '../parts/ConList';
import Form from '../parts/Form';

export default function Home({ url, ...props }) {
    const [contacts, setContacts] = useState([])
    const [showform, ShowForm] = useState(false)
    const [formVals, SetFormVals] = useState({ name: '', email: '', phone: '' })

    useEffect(() => {
        document.title = "Home";
        fetchContacts();
    }, []);

    const showFormClick = () => {
        ShowForm(!showform)
    }

    const fetchContacts = async () => {
        await axios
            .get(`${url}api/get`)
            .then(res => {
                // console.log(res)
                setContacts(res.data)
            })
            .catch(err => console.log(err))
    }

    const delClick = (id, name) => {
        if (confirm('Are You Sure to Delete ' + name + '\'s Contact? ')) {
            axios
                .delete(`${url}api/del/${id}`)
                .then(res => {
                    let status = res.data.status
                    if (status) {
                        fetchContacts()
                        alert(name + '\'s Contact Deleted...')
                    } else {
                        alert('Delete Failed...')
                    }
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className="container mt-4">
            <Form showFormClick={showFormClick} showform={showform} formVals={formVals} SetFormVals={SetFormVals} />

            <ConList contacts={contacts} delClick={delClick} />
        </div>
    );
}