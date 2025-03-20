import { useState, useEffect } from 'react';

interface Data {
    title: string;
    body: string;
}

const ClientFetchPage = () => {
    const [data, setData] = useState<Data | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await res.json();
                setData(data);
            } catch (error) {
                setError(error.message());
            } finally {
                setLoading(false);
            }
        };

        fetchData()
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>{data?.title}</h1>
            <p>{data?.body}</p>
        </div>
    );
};

export default ClientFetchPage;
