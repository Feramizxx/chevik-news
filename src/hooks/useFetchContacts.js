import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { apiBaseURL } from "../app/App";

const useFetchContacts = () => {
    const [contacts, setContacts] = useState({});
    const [contactsError, setContactsError] = useState({});
    const [isContactsLoading, setIsContactsLoading] = useState(true);

    const fetchContacts = async () => {
        try {
            const response = await axios.get(apiBaseURL + 'contacts');
            setContacts(response.data.data);
        } catch (error) {
            setContactsError(error);
        } finally {
            setIsContactsLoading(false);
        }
    }

    useEffect(() => {
        fetchContacts();
    }, []);

    return { contacts, isContactsLoading, contacts };
}

export default useFetchContacts;